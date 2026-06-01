# Site images (native assets)

All imagery is served from `/public/images` — no third-party stock URLs in production.

## About page

| File | Purpose |
|------|---------|
| `editorial/about-primary.webp` | Main About gallery (left) |
| `editorial/about-secondary.webp` | Main About gallery (right) |
| `nav/nav-about.webp` | About nav card, How it works hero, story carousel |
| `nav/nav-unlock.webp` | Unlock living nav card, Vitality hero |

Regenerate: `npm run images:nav`

## Hero & video posters

| File | Purpose |
|------|---------|
| `hero-poster.jpg` | Hero fallback frame (shown before `hero.mp4` loads) |
| `visual-poster.jpg` | Visual section fallback before `visual.mp4` |

**Recommended:** export a still from your hero video (first frame or a strong mid-frame).

```powershell
# From repo root (requires ffmpeg)
.\scripts\extract-poster.ps1 -Video public\videos\hero.mp4 -Output public\images\hero-poster.jpg
.\scripts\extract-poster.ps1 -Video public\videos\visual.mp4 -Output public\images\visual-poster.jpg
```

Until posters exist, the site uses `placeholder.svg` automatically.

## Section photography

| Path | Used in |
|------|---------|
| `sections/program.jpg` | Program section |
| `sections/vitality.jpg` | Vitality section |
| `expect/step-1.jpg` … `step-4.jpg` | What to expect carousel |
| `nav/*` | Header dropdown cards |

Replace placeholders with licensed brand photography when ready.

## Fuse / GoHighLevel

Upload the full `public/` folder (including `videos/` and `images/`) with your static site build.
