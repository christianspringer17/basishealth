#!/usr/bin/env bash
# Copy hero video into public/videos/hero.mp4
# Usage: ./scripts/install-hero-video.sh [path-to-source.mp4]

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/videos/hero.mp4"
SOURCE="${1:-$HOME/Downloads/Metabolism is the foundation. Your care should reflect it. (1).mp4}"

if [[ ! -f "$SOURCE" ]]; then
  echo "Source not found: $SOURCE"
  echo "Usage: $0 /path/to/your-video.mp4"
  exit 1
fi

mkdir -p "$ROOT/public/videos"
cp "$SOURCE" "$DEST"
echo "Done: public/videos/hero.mp4 ($(du -h "$DEST" | cut -f1))"
echo "Next: git add public/videos/hero.mp4 && git commit -m 'Add hero video' && git push"
