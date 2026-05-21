---
title: Cloudflare Pages 部署
description: TokFlux 技术博客在 Cloudflare Pages 上的部署基线。
hidden: true
publish: false
readingTime: false
---

# Cloudflare Pages 部署

建议使用以下配置：

| 配置项 | 值 |
| --- | --- |
| Framework preset | `None` |
| Build command | `pnpm build` |
| Build output directory | `.vitepress/dist` |
| Root directory | `/` |
| Node.js | `22` |

## 环境变量

| 名称 | 示例 |
| --- | --- |
| `SITE_URL` | `https://developer.tokflux.com` |

## 说明

- `feed.rss`、`sitemap.xml` 与 pagefind 搜索资源会在 `pnpm build` 时自动生成。
- `public/_headers` 会被复制到最终产物中，作为响应头默认配置。
- 如果正式域名变化，需要同步调整 `SITE_URL` 与 `robots.txt`。
