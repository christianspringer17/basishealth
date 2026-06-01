export function parseLegalFrontmatter(source: string): {
  lastUpdated: string | null;
  body: string;
} {
  let body = source.trim();
  let lastUpdated: string | null = null;

  const match = body.match(/^Last Updated:\s*(.+)$/m);
  if (match) {
    lastUpdated = match[1].trim();
    body = body.replace(/^Last Updated:\s*.+\n\n?/, "");
  }

  return { lastUpdated, body: body.trim() };
}
