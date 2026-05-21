import type { Theme } from '@sugarat/theme'
import { getThemeConfig } from '@sugarat/theme/node'

const baseUrl = process.env.SITE_URL || 'https://developer.tokflux.com'

const RSS: Theme.RSSOptions = {
  title: 'TokFlux 技术博客',
  baseUrl,
  copyright: 'Copyright (c) 2026 TokFlux',
  description: 'TokFlux AI Gateway 的技术文章、教程、发布更新与故障排查笔记。',
  language: 'zh-CN',
  image: `${baseUrl}/covers/tokflux-og.png`,
  favicon: `${baseUrl}/tokenflux-logo.png`,
  icon: false,
  filter(post) {
    return /\/blog\/(tutorials|errors|comparisons|announcements)\/[^/]+$/.test(post.url)
  }
}

const blogTheme = getThemeConfig({
  RSS,
  mermaid: false,
  hotArticle: {
    title: '精选文章',
    pageSize: 4,
    empty: false
  },
  recommend: false,
  footer: {
    message: 'OpenAI 兼容网关的教程、排障与工程笔记。',
    copyright: 'Copyright (c) 2026 TokFlux'
  },
  author: 'TokFlux',
  homeTags: {
    title: '浏览主题'
  }
})

export { blogTheme }
