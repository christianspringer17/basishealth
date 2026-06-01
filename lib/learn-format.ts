/** Format "14 min read" → "14 minutes" (Basal All Articles style) */
export function formatReadMinutes(readTime: string): string {
  const match = readTime.match(/(\d+)\s*min/i);
  if (!match) return readTime.replace(/\s*read$/i, "").trim();
  const n = parseInt(match[1], 10);
  return `${n} minute${n === 1 ? "" : "s"}`;
}

/** Format for inline meta: "14 min read" */
export function formatReadTimeLabel(readTime: string): string {
  return readTime.replace(/\s*read$/i, "").trim() || readTime;
}
