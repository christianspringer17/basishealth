import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir =
  "C:/Users/ChristianSpringer/.cursor/projects/c-Users-ChristianSpringer-Downloads-athene1/assets";
const outDir = path.join(__dirname, "../public/images/expect");

function readAsset(id) {
  const name = fs.readdirSync(assetsDir).find((f) => f.includes(id));
  if (!name) throw new Error(`Asset not found for id: ${id}`);
  return fs.readFileSync(path.join(assetsDir, name));
}

const steps = [
  { out: "step-1-eligibility", id: "5390518b" },
  { out: "step-2-protocol", id: "404b929a" },
  { out: "step-3-care", id: "c1b3a231" },
  { out: "step-4-literacy", id: "25d97e81-70a5" },
];

async function exportLandscape(input, output) {
  await sharp(input)
    .rotate()
    .resize(1600, 1000, { fit: "cover", position: "centre" })
    .webp({ quality: 88 })
    .toFile(output);
}

async function exportPortrait(input, output) {
  await sharp(input)
    .rotate()
    .resize(900, 1125, { fit: "cover", position: "centre" })
    .webp({ quality: 88 })
    .toFile(output);
}

fs.mkdirSync(outDir, { recursive: true });

for (const step of steps) {
  const input = readAsset(step.id);
  await exportLandscape(input, path.join(outDir, `${step.out}.webp`));
  await exportPortrait(input, path.join(outDir, `${step.out}-mobile.webp`));
  console.log("OK", step.out);
}
