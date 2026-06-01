import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const targets = [
  path.join(root, ".next"),
  path.join(root, "node_modules", ".cache"),
];

function removeDir(dir) {
  if (!fs.existsSync(dir)) return false;
  fs.rmSync(dir, {
    recursive: true,
    force: true,
    maxRetries: 8,
    retryDelay: 200,
  });
  return true;
}

let removed = 0;
for (const dir of targets) {
  if (removeDir(dir)) {
    removed += 1;
    console.log(`Removed ${path.relative(root, dir)}`);
  }
}

if (removed === 0) {
  console.log("No dev caches to remove.");
} else {
  console.log("Dev cache cleared — run: npm run dev");
}
