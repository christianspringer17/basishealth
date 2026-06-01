import { readFileSync } from "node:fs";
import { join } from "node:path";

const LEGAL_DIR = join(process.cwd(), "lib/content/legal");

export function loadLegalMarkdown(...parts: string[]): string {
  return parts
    .map((name) => readFileSync(join(LEGAL_DIR, name), "utf8"))
    .join("\n\n")
    .trim();
}
