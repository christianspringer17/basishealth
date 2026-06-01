const [major, minor] = process.versions.node.split(".").map(Number);
const ok = major > 18 || (major === 18 && minor >= 18) || major >= 20;
if (!ok) {
  console.error(
    `\nBasis Health requires Node.js 18.18+ or 20.9+ (you have ${process.version}).\n` +
      `Install Node 20 LTS: https://nodejs.org/\n`
  );
  process.exit(1);
}
