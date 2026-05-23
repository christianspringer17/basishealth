# Eonic Health

Landing page for Eonic Health — a modern longevity and performance health brand.

## Requirements

- **Node.js** 18.18+ or 20.9+ (recommended: Node 20 LTS)
- npm 9+

Check your version:

```bash
node -v
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Troubleshooting

**Port already in use**

```bash
# Stop any existing Next process, then:
rm -rf .next
npm run dev
```

**Stale install or build errors**

```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Wrong Node version**

Use [nvm](https://github.com/nvm-sh/nvm) if installed:

```bash
nvm use
```

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript
