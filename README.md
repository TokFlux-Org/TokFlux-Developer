# TokFlux Developer

Docs, blog, examples, and developer resources for TokFlux.

## Stack

- VitePress
- TypeScript
- pnpm
- `@sugarat/theme`
- Cloudflare Pages

## Local Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm serve
```

## Content Structure

```txt
docs/
  setup/
  codex/
  claude/
blog/
  tutorials/
  errors/
  comparisons/
  announcements/
```

## Content Naming

- Content files live under `docs/` or `blog/`.
- Use short lowercase kebab-case slugs for directories and pages, for example `creator-reward.md` or `ide-plugin.md`.
- Keep content slugs to 24 characters or fewer and 4 words or fewer.
- Do not repeat the site brand in slugs, for example prefer `blog-launch.md` over `tokflux-blog-launch.md`.
- `index.md` files are section landing pages and are exempt from page slug rules.

## Cloudflare Pages

- Build command: `pnpm build`
- Output directory: `.vitepress/dist`
- Optional env var: `SITE_URL=https://developer.tokflux.com`

## Notes

- RSS, sitemap, and Pagefind are generated during build.
- The site uses a single TokFlux brand name across docs, blog, and landing page.
