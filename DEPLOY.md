# Deploy Basis Health

## Fastest: Vercel (recommended)

1. Open [vercel.com/new](https://vercel.com/new) and import **christianspringer17/basishealth**
2. Use defaults (Next.js, `main` branch, `npm run build`)
3. Add environment variables:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://basis.health`) |
| `NEXT_PUBLIC_GHL_FORM_EMBED_URL` | GoHighLevel form embed URL (waitlist) |
| `NEXT_PUBLIC_MYDOSE_CHECKOUT_URL` | MyDose whitelabel checkout / intake URL (when live) |
| `WAITLIST_GITHUB_TOKEN` | GitHub PAT with `repo` scope — creates an issue per signup (native waitlist fallback) |
| `GITHUB_REPO` | `christianspringer17/basishealth` |
| `RESEND_API_KEY` + `WAITLIST_NOTIFY_EMAIL` | Email notification via [Resend](https://resend.com) |
| `WEB3FORMS_ACCESS_KEY` | [Web3Forms](https://web3forms.com) |

4. Deploy. Your site will be live at `https://<project>.vercel.app`.

## Waitlist

When `NEXT_PUBLIC_GHL_FORM_EMBED_URL` is set, the waitlist section embeds your GoHighLevel form. Otherwise signups post to `/api/waitlist` (GitHub Issues, Resend, or Web3Forms).

## Local development

```bash
npm install
npm run dev
```

See [README.md](./README.md) for troubleshooting.

## Cursor agents

Use the **Vercel plugin** (`vercel/vercel-plugin`) for deploys, env vars, and logs — see [AGENTS.md](./AGENTS.md).
