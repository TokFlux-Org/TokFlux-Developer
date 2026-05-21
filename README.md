# TokFlux Technical Blog

Technical articles, integration notes, and troubleshooting guides for TokFlux.

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
  guide/
  api/
  examples/
  pricing/
  changelog/
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

- Docs are intentionally scaffolded only.
- The visible site is intentionally kept as a lightweight blog.
- RSS and sitemap are generated during build.
- Replace the default `SITE_URL` assumption in config and `robots.txt` if the production domain differs.
