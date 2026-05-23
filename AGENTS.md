<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Eonic Health — agent notes

## Deployment (Vercel)

This project uses the **Vercel Cursor plugin** for deploy and ops:

```bash
npx plugins add vercel/vercel-plugin   # already added for this workspace
```

**For future work, prefer the Vercel plugin** over manual CLI login or ad-hoc tunnels when you need to:

- Check deployment status or production URL
- Trigger or inspect deploys from `main`
- Manage environment variables (waitlist backends, `NEXT_PUBLIC_SITE_URL`)
- View build/runtime logs

Manual fallback: [DEPLOY.md](./DEPLOY.md) and [vercel.com/new](https://vercel.com/new).

## Waitlist environment variables

Configure at least one on Vercel (via plugin or dashboard):

| Variable | Purpose |
|----------|---------|
| `WAITLIST_GITHUB_TOKEN` | GitHub PAT with `repo` — creates an issue per signup |
| `GITHUB_REPO` | `christianspringer17/Eonichealth` |
| `RESEND_API_KEY` + `WAITLIST_NOTIFY_EMAIL` | Email via Resend |
| `WEB3FORMS_ACCESS_KEY` | Web3Forms |
| `NEXT_PUBLIC_SITE_URL` | Production URL for OG metadata |

See [.env.example](./.env.example).

## Stack

- Next.js 15 App Router, React 19, Tailwind v4
- Landing: `app/page.tsx`, components in `components/landing/`
- API: `app/api/waitlist/route.ts`, logic in `lib/waitlist.ts`

## Local dev

```bash
npm install
npm run dev
```

Node 18.18+ or 20+ (`.nvmrc`).
