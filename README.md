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
  pz/
  codex/
  claude/
blog/
  tutorials/
  errors/
  comparisons/
  announcements/
```

## Cloudflare Pages

- Build command: `pnpm build`
- Output directory: `.vitepress/dist`
- Optional env var: `SITE_URL=https://developer.tokflux.com`

## Notes

- RSS, sitemap, and Pagefind are generated during build.
- The site uses a single TokFlux brand name across docs, blog, and landing page.
