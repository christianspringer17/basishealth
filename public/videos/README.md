# Custom videos

Add your own loops here to match the Basal-style cinematic sections.

| File | Used in |
|------|---------|
| `hero.mp4` | Full-screen hero background (muted, looping) |
| `visual.mp4` | Wide section below intro (with play affordance) |

**Tips**

- Format: MP4 (H.264), 10–30 seconds, seamless loop
- Resolution: 1920×1080 or 2560×1440
- Keep file size under ~8MB for fast loads
- Muted autoplay — no audio track required

**Or use hosted URLs** in Vercel env:

- `NEXT_PUBLIC_HERO_VIDEO_URL`
- `NEXT_PUBLIC_VISUAL_VIDEO_URL`

If no video is found, the site falls back to poster images automatically.
