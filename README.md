# Alex Desroches

French/English portfolio built with Next.js Pages Router and React, hosted on Cloudflare Pages.

## Local development

Use Bun **1.4.2** and Node.js **24+**. `.node-version` and `.nvmrc` pin Node 24.15.0.

```sh
bun install --frozen-lockfile
bun run dev
```

The dev server runs at `http://localhost:3000`. Public site metadata comes from `.env`.

## Checks and production preview

```sh
bun run lint
bun test
bun run build
bun run preview
```

The build writes to `out` and checks that every registered language pair is exported, with nonempty HTML and matching sitemap language alternates. Tests cover route helpers and export validation.

## Cloudflare Pages

- Build command: `bun run build`.
- Build output directory: `out`.
- Environment variable: `BUN_VERSION=1.4.2`.
- The repository's default branch is `main`; the production branch is selected in Cloudflare.

## Editing the site

- `pages/` and `pages/en/`: French and English page content.
- `lib/page-paths.json`: paired routes and sitemap priorities, shared by navigation and sitemap generation.
- `components/TechnologyList.js`: the shared technology lists.
- `components/ContactOptions.js`: the existing email and LinkedIn links, shared by both contact pages.

New pages need a route pair in `lib/page-paths.json` and matching canonical/alternate metadata. Image sizes in `ResponsiveImage.js` must match the column widths and padding in `globals.css`.

Preserve the existing visual design during technical maintenance: typography, colors, spacing, image effects, and control appearance should only change when explicitly requested. The header intentionally sticks within the first viewport, then scrolls away; the viewport-height `#__next` container supplies that boundary. Compare rendered pages and interaction states with the baseline when changing layout-related code.
