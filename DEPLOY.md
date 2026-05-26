# Deploy Athene Health

## Fastest: Vercel (recommended)

1. Open [vercel.com/new](https://vercel.com/new) and import **christianspringer17/Athenehealth**
2. Use defaults (Next.js, `main` branch, `npm run build`)
3. Add environment variables (at least one for the waitlist):

| Variable | Purpose |
|----------|---------|
| `WAITLIST_GITHUB_TOKEN` | GitHub PAT with `repo` scope — creates an issue per signup |
| `GITHUB_REPO` | `christianspringer17/Athenehealth` |
| `RESEND_API_KEY` + `WAITLIST_NOTIFY_EMAIL` | Email notification via [Resend](https://resend.com) |
| `WEB3FORMS_ACCESS_KEY` | [Web3Forms](https://web3forms.com) |
| `NEXT_PUBLIC_SITE_URL` | Your live URL (e.g. `https://athenehealth.vercel.app`) |

4. Deploy. Your site will be live at `https://<project>.vercel.app`.

## Waitlist signups (GitHub Issues)

With `WAITLIST_GITHUB_TOKEN` set, each waitlist submission creates a GitHub issue titled `Waitlist: email@example.com` in this repository.

## Local development

```bash
npm install
npm run dev
```

See [README.md](./README.md) for troubleshooting.

## Cursor agents

Use the **Vercel plugin** (`vercel/vercel-plugin`) for deploys, env vars, and logs — see [AGENTS.md](./AGENTS.md).
