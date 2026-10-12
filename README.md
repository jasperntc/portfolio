# portfolio

Source for Jasper Ng's personal portfolio site, [jasperntc.dev](https://jasperntc.dev).

## Status

v1: an editorial one-pager with work, experience and about sections. Coming next: mission control styling and a `⌘K` palette, the Touchstone case study, a live 3D hero, and a contact form.

## Stack

Next.js 16 (static export), TypeScript, Tailwind CSS v4, Vitest. Hosted on Cloudflare Workers static assets.

## Develop

```bash
npm install
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run lint` | ESLint |
| `npm run typecheck` | Generates Next.js route types, then runs `tsc` |
| `npm test` | Vitest, including the content checks |
| `npm run build` | Static export to `out/` |
| `npm run preview` | Build, then serve `out/` with Wrangler at http://localhost:8787 |
| `npm run deploy` | Build, then deploy to Cloudflare |

## Content

Everything the site says lives in typed data under `content/`. Every number on the site must trace to a source: each one carries a `source` field and a `// Source:` comment, and `tests/content.test.ts` fails if a sentence containing a number has no source.

## Repository layout

| Path | What it is |
| --- | --- |
| `app/` | Pages, layout and global styles |
| `components/` | UI components |
| `content/` | Typed site content and its sources |
| `lib/` | Small pure helpers |
| `tests/` | Vitest tests |
| `wrangler.jsonc` | Cloudflare Workers config |
| `REVIEW_LOG.md` | Mistakes caught during review |
| `LICENSE` | MIT license for the code |

## License

Code is MIT-licensed; text and images are not.

See [LICENSE](LICENSE) for the terms that apply to the code.
