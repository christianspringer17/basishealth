/**
 * Prepare transparent / trimmed cutouts for the protocol carousel.
 * Gray card shell + these assets = Eden-style layout.
 */
import sharp from "sharp";
import path from "node:path";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, "../public/images/how-it-works");
const outDir = path.join(srcDir, "cutouts");

function luminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function isNearWhite(r, g, b, threshold = 248) {
  return r >= threshold && g >= threshold && b >= threshold;
}

async function stripNearWhiteBackground(input, output) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels } = info;
  const visited = new Uint8Array(w * h);
  const queue = [];

  function enqueue(x, y) {
    const pi = y * w + x;
    if (visited[pi]) return;
    const i = pi * channels;
    if (!isNearWhite(data[i], data[i + 1], data[i + 2])) return;
    queue.push([x, y]);
  }

  for (let x = 0; x < w; x++) {
    enqueue(x, 0);
    enqueue(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    enqueue(0, y);
    enqueue(w - 1, y);
  }

  while (queue.length > 0) {
    const [x, y] = queue.pop();
    const pi = y * w + x;
    if (visited[pi]) continue;
    const i = pi * channels;
    if (!isNearWhite(data[i], data[i + 1], data[i + 2])) continue;
    visited[pi] = 1;
    data[i + 3] = 0;
    if (x > 0) enqueue(x - 1, y);
    if (x < w - 1) enqueue(x + 1, y);
    if (y > 0) enqueue(x, y - 1);
    if (y < h - 1) enqueue(x, y + 1);
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 6, adaptiveFiltering: true })
    .toFile(output);
}

async function cropTopPercent(input, output, topPercent) {
  const meta = await sharp(input).metadata();
  const top = Math.round(meta.height * topPercent);
  await sharp(input)
    .extract({
      left: 0,
      top,
      width: meta.width,
      height: meta.height - top,
    })
    .png()
    .toFile(output);
}

async function trimAndResize(input, output, maxWidth) {
  await sharp(input)
    .trim({ threshold: 12 })
    .resize({ width: maxWidth, withoutEnlargement: false })
    .png()
    .toFile(output);
}

await mkdir(outDir, { recursive: true });

await stripNearWhiteBackground(
  path.join(srcDir, "provider-support.png"),
  path.join(outDir, "provider-cutout.png"),
);

// Drop baked-in headline; card shell supplies the title.
const goalsMeta = await sharp(path.join(srcDir, "goals-app.png")).metadata();
const goalsTop = Math.round(goalsMeta.height * 0.11);
await sharp(path.join(srcDir, "goals-app.png"))
  .extract({
    left: 0,
    top: goalsTop,
    width: goalsMeta.width,
    height: goalsMeta.height - goalsTop,
  })
  .trim({ threshold: 10 })
  .resize({ width: 520, withoutEnlargement: false })
  .png()
  .toFile(path.join(outDir, "goals-cutout.png"));

await cropTopPercent(
  path.join(srcDir, "treatments.png"),
  path.join(outDir, "treatments-cutout.png"),
  0.2,
);

await cropTopPercent(
  path.join(srcDir, "shipping.png"),
  path.join(outDir, "shipping-cutout.png"),
  0.18,
);

console.log("Protocol cutouts written to public/images/how-it-works/cutouts/");
