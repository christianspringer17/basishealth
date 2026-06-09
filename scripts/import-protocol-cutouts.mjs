/**
 * Process user-supplied cutouts (black matte export).
 * Edge-connected black removal only — preserves interior dark pixels.
 */
import sharp from "sharp";
import path from "node:path";
import { rename, unlink } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cutoutDir = path.join(__dirname, "../public/images/how-it-works/cutouts");

function isBackgroundBlack(r, g, b) {
  return r < 22 && g < 22 && b < 22;
}

async function stripBlackBackground(file) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels } = info;
  const visited = new Uint8Array(w * h);
  const queue = [];

  function enqueue(x, y) {
    const pi = y * w + x;
    if (visited[pi]) return;
    const i = pi * channels;
    if (!isBackgroundBlack(data[i], data[i + 1], data[i + 2])) return;
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
    if (!isBackgroundBlack(data[i], data[i + 1], data[i + 2])) continue;
    visited[pi] = 1;
    data[i + 3] = 0;
    if (x > 0) enqueue(x - 1, y);
    if (x < w - 1) enqueue(x + 1, y);
    if (y > 0) enqueue(x, y - 1);
    if (y < h - 1) enqueue(x, y + 1);
  }

  const tmp = `${file}.tmp.png`;
  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 6, adaptiveFiltering: true })
    .toFile(tmp);
  await unlink(file).catch(() => {});
  await rename(tmp, file);
}

async function trim(file) {
  const tmp = `${file}.tmp.png`;
  await sharp(file).trim({ threshold: 8 }).png().toFile(tmp);
  await unlink(file).catch(() => {});
  await rename(tmp, file);
}

async function cropGoalsTitle(file) {
  const meta = await sharp(file).metadata();
  const top = Math.min(Math.round(meta.height * 0.105), meta.height - 2);
  const tmp = `${file}.tmp.png`;
  await sharp(file)
    .extract({ left: 0, top, width: meta.width, height: meta.height - top })
    .png()
    .toFile(tmp);
  await unlink(file).catch(() => {});
  await rename(tmp, file);
  await trim(file);
}

const files = ["treatments-cutout.png", "shipping-cutout.png", "goals-cutout.png"];

for (const name of files) {
  const file = path.join(cutoutDir, name);
  await stripBlackBackground(file);
  await trim(file);
  if (name === "goals-cutout.png") {
    await cropGoalsTitle(file);
  }
  console.log(`Processed ${name}`);
}

console.log("Cutouts ready in public/images/how-it-works/cutouts/");
