/**
 * Build transparent protocol carousel cutouts from source images.
 * Edge-connected background removal + peel from transparent borders.
 */
import sharp from "sharp";
import path from "node:path";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, "../public/images/how-it-works");
const outDir = path.join(srcDir, "cutouts");

function isPureWhite(r, g, b) {
  return r >= 252 && g >= 252 && b >= 252;
}

function isGoalsFrameBg(r, g, b) {
  const lum = (r + g + b) / 3;
  return lum >= 242 && lum <= 250 && Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b)) <= 6;
}

function isLightGrayBg(r, g, b) {
  const lum = (r + g + b) / 3;
  return lum >= 232 && lum <= 255 && Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b)) <= 12;
}

function stripEdgeBackground(data, w, h, channels, isBg) {
  const visited = new Uint8Array(w * h);
  const queue = [];

  function enqueue(x, y) {
    const pi = y * w + x;
    if (visited[pi]) return;
    const i = pi * channels;
    if (!isBg(data[i], data[i + 1], data[i + 2])) return;
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
    if (!isBg(data[i], data[i + 1], data[i + 2])) continue;
    visited[pi] = 1;
    data[i + 3] = 0;
    if (x > 0) enqueue(x - 1, y);
    if (x < w - 1) enqueue(x + 1, y);
    if (y > 0) enqueue(x, y - 1);
    if (y < h - 1) enqueue(x, y + 1);
  }
}

function peelFromTransparent(data, w, h, channels, isRemovable) {
  let changed = true;
  while (changed) {
    changed = false;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const pi = y * w + x;
        const i = pi * channels;
        if (data[i + 3] < 40) continue;
        if (!isRemovable(data[i], data[i + 1], data[i + 2])) continue;
        const neighbors = [
          x > 0 ? data[((y * w + x - 1) * 4) + 3] : 0,
          x < w - 1 ? data[((y * w + x + 1) * 4) + 3] : 0,
          y > 0 ? data[(((y - 1) * w + x) * 4) + 3] : 0,
          y < h - 1 ? data[(((y + 1) * w + x) * 4) + 3] : 0,
        ];
        if (neighbors.some((a) => a < 40)) {
          data[i + 3] = 0;
          changed = true;
        }
      }
    }
  }
}

async function processCutout(input, output, passes, peels = []) {
  const source = Buffer.isBuffer(input) ? sharp(input) : sharp(input);
  const { data, info } = await source.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels } = info;
  const pixels = new Uint8Array(data);

  for (const isBg of passes) {
    stripEdgeBackground(pixels, w, h, channels, isBg);
  }
  for (const isRemovable of peels) {
    peelFromTransparent(pixels, w, h, channels, isRemovable);
  }

  await sharp(pixels, { raw: { width: w, height: h, channels: 4 } })
    .trim({ threshold: 10 })
    .png({ compressionLevel: 6, adaptiveFiltering: true })
    .toFile(output);
}

await mkdir(outDir, { recursive: true });

await processCutout(
  path.join(srcDir, "provider-support.png"),
  path.join(outDir, "provider-cutout.png"),
  [isPureWhite],
  [isPureWhite],
);
console.log("provider-cutout.png");

await processCutout(
  path.join(srcDir, "goals-source.png"),
  path.join(outDir, "goals-cutout.png"),
  [isPureWhite, isGoalsFrameBg],
  [isGoalsFrameBg, isPureWhite],
);
console.log("goals-cutout.png");

await processCutout(
  path.join(srcDir, "treatments-source.png"),
  path.join(outDir, "treatments-cutout.png"),
  [isPureWhite, isLightGrayBg],
);
console.log("treatments-cutout.png");

await processCutout(
  path.join(srcDir, "shipping-expedited.png"),
  path.join(outDir, "shipping-cutout.png"),
  [isPureWhite, isLightGrayBg],
);
console.log("shipping-cutout.png");

console.log("Done — cutouts in public/images/how-it-works/cutouts/");
