import { defineConfig } from 'vitepress'
import { blogTheme } from './blog-theme.mts'

const siteUrl = process.env.SITE_URL || 'https://developer.tokflux.com'
const ogImage = `${siteUrl}/covers/tokflux-og.png`

export default defineConfig({
  extends: blogTheme,
  lang: 'zh-CN',
  title: 'TokFlux 技术博客',
  description: 'TokFlux 的技术文章、集成教程与排障笔记。',
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
  srcExclude: ['my-blog/**', 'README.md'],
  ignoreDeadLinks: [/^\/feed\.rss$/],
  sitemap: {
    hostname: siteUrl
  },
  head: [
    ['link', { rel: 'icon', href: '/tokenflux-logo.png', type: 'image/png' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'TokFlux RSS', href: '/feed.rss' }],
    ['meta', { name: 'theme-color', content: '#0b1220' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'TokFlux 技术博客' }],
    ['meta', { property: 'og:title', content: 'TokFlux 技术博客' }],
    ['meta', { property: 'og:description', content: 'TokFlux 的技术文章、集成教程与排障笔记。' }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'TokFlux 技术博客' }],
    ['meta', { name: 'twitter:description', content: 'TokFlux 的技术文章、集成教程与排障笔记。' }],
    ['meta', { name: 'twitter:image', content: ogImage }]
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    logo: '/tokenflux-logo.png',
    siteTitle: 'TokFlux',
    outline: {
      level: [2, 3],
      label: '本页内容'
    },
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '导航',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/blog/tutorials/' },
      { text: '公告', link: '/blog/announcements/' },
      { text: '文档', link: '/docs/' },
      { text: '控制台', link: 'https://tokenflux.cloud/dashboard/overview' }
    ],
    sidebar: {
      '/docs/': [
        {
          text: '文档',
          items: [
            { text: '概览', link: '/docs/' },
            { text: '指南', link: '/docs/guide/' },
            { text: 'API', link: '/docs/api/' },
            { text: '示例', link: '/docs/examples/' },
            { text: '定价', link: '/docs/pricing/' },
            { text: '更新日志', link: '/docs/changelog/' },
            { text: '部署', link: '/docs/deploy/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tokflux/tokflux-developer' }
    ]
  }
})
