import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const size = 32;
const radius = 7;
const input = path.join(__dirname, "../public/images/favicon-b-source.png");
const output = path.join(__dirname, "../app/icon.png");
const mask = Buffer.from(
  `<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="white"/></svg>`,
);

await sharp(input)
  .resize(size, size, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toFile(output);

console.log(`Wrote ${output}`);
