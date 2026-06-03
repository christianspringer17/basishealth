<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Basis Health — agent notes

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
| `GITHUB_REPO` | `christianspringer17/basishealth` |
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

If you see **Internal Server Error** or missing chunk errors in dev (`331.js`, `ENOENT` on `.next`):

1. Stop **all** terminals running `npm run dev` (Ctrl+C each).
2. On Windows, run:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/restart-dev.ps1
```

Or: `npm run dev:clean`

3. Use only **one** dev server on **http://localhost:3000**.

**Why it keeps happening:** `npm run build` and `npm run dev` both write to `.next`. On Windows, running them together (or switching without a clean) corrupts the cache. `npm run dev` now auto-clears a production or broken `.next` before starting. After `npm run build`, run `npm run dev:clean` before dev again.

Node 18.18+ or 20+ (`.nvmrc`).

## Cursor Cloud specific instructions

Single Next.js app — no Docker, database, or separate backend services. One dev server on **http://localhost:3000** serves all pages and API routes (`/api/waitlist`, `/api/assessment`).

### Commands (see `package.json` for the full list)

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (runs `predev` cache checks; Turbo via `scripts/start-dev.mjs`) |
| Dev after build | `npm run dev:clean` — required if you ran `npm run build` first (both write to `.next`) |
| Lint | `npm run lint` |
| Production build | `npm run build` then `npm start` |
| Tests | **None configured** — CI runs lint + build only (`.github/workflows/ci.yml`) |

### Running the dev server

Use **one** dev server instance on port 3000. If port 3000 is in use, stop the existing process before starting another. Long-running dev servers are best kept in a tmux session (e.g. `npm run dev:clean` in `/workspace`).

### Waitlist / assessment APIs

Browsing the site works without env vars. Form submissions need at least one backend from `.env.example` (`WAITLIST_GITHUB_TOKEN`, `RESEND_API_KEY` + `WAITLIST_NOTIFY_EMAIL`, or `WEB3FORMS_ACCESS_KEY`). Without them, POST `/api/waitlist` returns a graceful error pointing users to `concierge@basis.care`.

Optional public env vars (`NEXT_PUBLIC_GHL_FORM_EMBED_URL`, `NEXT_PUBLIC_MYDOSE_CHECKOUT_URL`, analytics IDs) change CTAs and embeds but are not required for local page rendering.
