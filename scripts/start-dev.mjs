import { spawn } from "node:child_process";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

function killPort3000OnWindows() {
  if (process.platform !== "win32") return;
  try {
    execSync(
      `powershell -NoProfile -Command "$p = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique; foreach ($id in $p) { Stop-Process -Id $id -Force -ErrorAction SilentlyContinue }"`,
      { stdio: "ignore", cwd: root },
    );
  } catch {
    // ignore
  }
}

// Run cache guard (same logic as predev)
await import("./ensure-dev-cache.mjs");

killPort3000OnWindows();

const child = spawn("npx", ["next", "dev", "--turbo"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
  env: process.env,
});

child.on("exit", (code) => process.exit(code ?? 0));

process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
