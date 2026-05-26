# Site videos (bundled with the app)

Place MP4 files here. They are **native static assets** — same as images in `public/images/`. No Vercel, CDN, or env vars required.

| File | Used in |
|------|---------|
| `hero.mp4` | Full-screen hero background (muted, looping) |
| `visual.mp4` | Cinematic section mid-page (play controls) |

## How to add your video

1. Export as **MP4 (H.264)**
2. Copy into this folder as `hero.mp4` (and/or `visual.mp4`)
3. Commit and deploy with the rest of the site

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

## Optional override

Only if you need a different URL in staging:

- `NEXT_PUBLIC_HERO_VIDEO_URL`
- `NEXT_PUBLIC_VISUAL_VIDEO_URL`

Production should rely on files in this folder.
