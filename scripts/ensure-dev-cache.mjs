import fs from "node:fs";
import path from "node:path";

/**
 * Detects broken or production-mixed .next folders before `next dev`.
 * Common on Windows when build + dev run overlap or .next is half-deleted.
 */
const root = process.cwd();
const nextDir = path.join(root, ".next");

function exists(p) {
  return fs.existsSync(p);
}

function shouldClean() {
  if (process.env.DEV_ALWAYS_CLEAN === "1") return true;
  if (!exists(nextDir)) return false;

  const serverDir = path.join(nextDir, "server");
  const routesManifest = path.join(nextDir, "routes-manifest.json");
  const buildManifest = path.join(nextDir, "build-manifest.json");
  const devStatic = path.join(nextDir, "static", "development");
  const buildId = path.join(nextDir, "BUILD_ID");

  // Production build output — dev must not reuse it (causes 331.js / ENOENT loops)
  if (exists(buildId) && !exists(devStatic)) {
    return true;
  }

  // Partial / corrupted cache
  if (exists(serverDir) && (!exists(routesManifest) || !exists(buildManifest))) {
    return true;
  }

  // Empty-ish .next (failed delete)
  try {
    const entries = fs.readdirSync(nextDir);
    if (entries.length > 0 && !exists(serverDir) && !exists(routesManifest)) {
      return true;
    }
  } catch {
    return true;
  }

  return false;
}

function clean() {
  if (exists(nextDir)) {
    fs.rmSync(nextDir, {
      recursive: true,
      force: true,
      maxRetries: 10,
      retryDelay: 250,
    });
  }
  const nodeCache = path.join(root, "node_modules", ".cache");
  if (exists(nodeCache)) {
    fs.rmSync(nodeCache, {
      recursive: true,
      force: true,
      maxRetries: 8,
      retryDelay: 200,
    });
  }
  console.log("Removed stale .next — starting fresh dev build.");
}

if (shouldClean()) {
  clean();
}
