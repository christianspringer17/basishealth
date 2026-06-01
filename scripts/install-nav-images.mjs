/**
 * Download and export premium nav + about hero photography.
 * Run: node scripts/install-nav-images.mjs
 * Requires: npm install sharp (devDependency)
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/nav");
const editorialDir = path.join(__dirname, "../public/images/editorial");

/** Curated Unsplash — licensed for download; saved locally (no runtime hotlinks). */
const IMAGES = [
  {
    out: "nav-about",
    url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=2000&q=90",
    w: 1600,
    h: 1000,
    position: "centre",
  },
  {
    out: "nav-unlock",
    url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=2000&q=90",
    w: 1600,
    h: 1000,
    position: "centre",
  },
  {
    out: "nav-learn-metabolism",
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=90",
    w: 1600,
    h: 1000,
    position: "centre",
  },
  {
    out: "nav-learn-fingerprint",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=2000&q=90",
    w: 1600,
    h: 1000,
    position: "top",
  },
  {
    out: "nav-learn-markers",
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=90",
    w: 1600,
    h: 1000,
    position: "centre",
  },
  {
    out: "about-gallery-primary",
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2000&q=90",
    w: 1600,
    h: 1000,
    position: "centre",
  },
  {
    out: "about-gallery-secondary",
    url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=2000&q=90",
    w: 1600,
    h: 1000,
    position: "centre",
  },
];

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "basishealth-asset-script/1.0" },
  });
  if (!res.ok) throw new Error(`Fetch failed ${res.status}: ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function exportWebp(input, output, w, h, position) {
  await sharp(input)
    .rotate()
    .resize(w, h, { fit: "cover", position })
    .modulate({ brightness: 1.02, saturation: 0.92 })
    .webp({ quality: 90, effort: 4 })
    .toFile(output);
}

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(editorialDir, { recursive: true });

for (const img of IMAGES) {
  console.log("Fetching", img.out, "…");
  const buf = await fetchBuffer(img.url);
  const isAboutGallery = img.out.startsWith("about-gallery-");
  const baseDir = isAboutGallery ? editorialDir : outDir;
  const baseName = isAboutGallery
    ? img.out.replace("about-gallery-", "about-")
    : img.out;
  const webpPath = path.join(baseDir, `${baseName}.webp`);
  await exportWebp(buf, webpPath, img.w, img.h, img.position);
  console.log("OK", path.relative(process.cwd(), webpPath));
}

console.log("\nDone — update lib/media.ts if paths changed.");
