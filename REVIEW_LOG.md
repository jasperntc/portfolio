# Review log

Mistakes caught during review, mine and the AI's. Newest first.

| Date | Where | Mistake | Caught by | Fix |
|---|---|---|---|---|
| 2026-10-13 | `package.json` | `npm install -D wrangler@4` resolved to 4.86, not the current 4.149. Vitest 3 and Wrangler 4.86 had critical and high advisories, and the PR description only mentioned the ESLint chain. | `npm audit` re-read before merge | Node 24, Wrangler 4.149, Vitest 5. Production audit is clean and now runs in CI. Dependabot watches the rest. |
| 2026-10-13 | `eslint.config.mjs` | ESLint linted Wrangler's temporary bundles in `.wrangler/`. | Lint warnings after a local preview | Ignore `.wrangler/**`. |
| 2026-10-13 | `wrangler.jsonc` | Compatibility date 2026-10-01 is newer than Wrangler 4.86 supports. Current Wrangler needs Node 22; this machine runs Node 20. | `wrangler dev` refused to start | Pinned Wrangler 4.86 and set the date to 2026-05-01. Upgrade Node, then Wrangler. |
| 2026-10-13 | `package.json` | `tsc --noEmit` failed on `LayoutProps`, a type Next.js generates. | `npm run typecheck` | Run `next typegen` before `tsc`. |
| 2026-10-13 | `tests/content.test.ts` | Newest-first check sorted by start date, so a current role that started earlier looked out of order. | Test run | Sort by end date, with current roles first. |
| 2026-10-13 | `tests/content.test.ts` | The "number needs a source" check flagged "Built4You" because of the digit in the name. | Test run | Count a digit only when it isn't glued to a letter. |
| 2026-10-13 | `app/globals.css` | The first "faint" text colors were 3.5:1 (light) and 4.35:1 (dark), below WCAG AA. | Contrast script | Darkened light to 4.83:1, lightened dark to 5.5:1. |
