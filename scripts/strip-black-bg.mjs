/**
 * Removes black backgrounds with soft alpha edges (avoids jagged cutout borders).
 */
import sharp from "sharp";
import path from "node:path";
import { rename, unlink } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = process.argv[2] ?? path.join(__dirname, "../public/images/nav/protocol-product.png");

function luminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function isPureBackground(r, g, b) {
  return r < 18 && g < 18 && b < 18;
}

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h, channels } = info;
const size = w * h;
const visited = new Uint8Array(size);
const queue = [];

function enqueue(x, y) {
  const pi = y * w + x;
  if (visited[pi]) return;
  const i = pi * channels;
  if (!isPureBackground(data[i], data[i + 1], data[i + 2])) return;
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
  if (!isPureBackground(data[i], data[i + 1], data[i + 2])) continue;
  visited[pi] = 1;
  data[i + 3] = 0;
  if (x > 0) enqueue(x - 1, y);
  if (x < w - 1) enqueue(x + 1, y);
  if (y > 0) enqueue(x, y - 1);
  if (y < h - 1) enqueue(x, y + 1);
}

// Soft fringe: smooth alpha on near-black edge pixels (preserves anti-aliasing).
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const pi = y * w + x;
    const i = pi * channels;
    if (data[i + 3] === 0) continue;
    const lum = luminance(data[i], data[i + 1], data[i + 2]);
    if (lum < 55) {
      const soft = Math.min(255, Math.round((lum / 55) * 255));
      data[i + 3] = Math.min(data[i + 3], soft);
    }
  }
}

const output = `${input}.tmp.png`;
await sharp(data, { raw: { width: w, height: h, channels: 4 } })
  .png({ compressionLevel: 6, adaptiveFiltering: true })
  .toFile(output);

await unlink(input).catch(() => {});
await rename(output, input);
console.log(`Soft transparent background: ${input}`);
