import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir =
  "C:/Users/ChristianSpringer/.cursor/projects/c-Users-ChristianSpringer-Downloads-athene1/assets";
const outDir = path.join(__dirname, "../public/images/editorial");

const assets = [
  { id: "8cd97352", out: "wellness-field", w: 1600, h: 1000 },
  { id: "c218f3d4", out: "coastal-sky", w: 1600, h: 900 },
  { id: "06904f39", out: "clinical-blue", w: 1600, h: 1000 },
];

function findAsset(id) {
  const name = fs.readdirSync(assetsDir).find((f) => f.includes(id));
  if (!name) throw new Error(`Asset not found: ${id}`);
  return fs.readFileSync(path.join(assetsDir, name));
}

fs.mkdirSync(outDir, { recursive: true });

for (const { id, out, w, h } of assets) {
  const buf = findAsset(id);
  await sharp(buf)
    .rotate()
    .resize(w, h, { fit: "cover", position: "centre" })
    .webp({ quality: 88 })
    .toFile(path.join(outDir, `${out}.webp`));
  await sharp(buf)
    .rotate()
    .resize(420, 280, { fit: "cover", position: "centre" })
    .webp({ quality: 85 })
    .toFile(path.join(outDir, `${out}-thumb.webp`));
  console.log("OK", out);
}
