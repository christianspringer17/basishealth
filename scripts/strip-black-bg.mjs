/**
 * Removes edge-connected black backgrounds only (preserves interior dark pixels).
 */
import sharp from "sharp";
import path from "node:path";
import { rename, unlink } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = process.argv[2] ?? path.join(__dirname, "../public/images/nav/protocol-product.png");

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

const output = `${input}.tmp.png`;
await sharp(data, { raw: { width: w, height: h, channels: 4 } })
  .png({ compressionLevel: 6, adaptiveFiltering: true })
  .toFile(output);

await unlink(input).catch(() => {});
await rename(output, input);
console.log(`Transparent background: ${input}`);
