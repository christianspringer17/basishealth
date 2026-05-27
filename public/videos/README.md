# Site videos (bundled with the app)

Place MP4 files here. They are **native static assets** — same as images in `public/images/`. No Vercel, CDN, or env vars required.

| File | Used in |
|------|---------|
| `hero.mp4` | Full-screen hero background (muted, looping) |
| `visual.mp4` | Cinematic section mid-page (play controls) |

## How to add your video

**Drag-and-drop often fails** for MP4s in Cursor (size limits, cloud workspaces). Use one of these instead:

### Option A — Copy via terminal (local clone)

```bash
cp ~/Downloads/your-video.mp4 public/videos/hero.mp4
git add public/videos/hero.mp4
git commit -m "Add hero video"
git push
```

### Option B — Finder / File Explorer

1. Open the project folder on your computer (not only inside Cursor).
2. Go to `public/videos/`.
3. Paste `hero.mp4` there.
4. Commit and push from Cursor or terminal.

### Option C — Fuse asset upload

If Fuse hosts your site, upload `hero.mp4` through Fuse’s file/asset manager to the same path (`/videos/hero.mp4` on your domain). No Git required if Fuse deploys from their UI.

### Option D — Share a link with your dev agent

Upload the MP4 to Google Drive, Dropbox, or similar (direct download link), and ask your agent or dev to pull it into `public/videos/hero.mp4`.

---

After the file is in place:

1. Export as **MP4 (H.264)**
2. Name it `hero.mp4` (and/or `visual.mp4`)
3. Deploy with the rest of the site

The site loads them from `/videos/hero.mp4` on **your domain** — e.g. `https://yoursite.com/videos/hero.mp4`.

## Specs

- Length: 10–30 seconds, seamless loop
- Resolution: 1920×1080 recommended
- Size: under ~8MB per file when possible
- No audio track needed (hero autoplays muted)

## Fuse / GoHighLevel

When this site is deployed on Fuse or embedded in GoHighLevel:

- Upload or sync the **whole project build** including `public/videos/`
- Videos stay on the same origin as the site (no third-party stock URLs)
- If a file is missing, the hero falls back to the poster image automatically

## npm scripts (from repo root)

| Command | Action |
|---------|--------|
| `npm run video:hero` | Copy hero MP4 from Downloads + extract poster |
| `npm run video:visual` | Copy visual MP4 (edit script source path if needed) |
| `npm run poster:hero` | Extract `public/images/hero-poster.jpg` |
| `npm run poster:visual` | Extract `public/images/visual-poster.jpg` |

## Optional override

Only if you need a different URL in staging:

- `NEXT_PUBLIC_HERO_VIDEO_URL`
- `NEXT_PUBLIC_VISUAL_VIDEO_URL`

Production should rely on files in this folder.
