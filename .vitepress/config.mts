import { defineConfig } from 'vitepress'
import type { PluginOption } from 'vite'
import { blogTheme } from './blog-theme.mts'

const siteUrl = process.env.SITE_URL || 'https://developer.tokflux.com'
const ogImage = `${siteUrl}/covers/tokflux-og.png`

function excludeDocsFromBlog(): PluginOption {
  return {
    name: 'tokflux-exclude-docs-from-blog',
    enforce: 'post',
    config(config: any) {
      const blog = config.vitepress?.site?.themeConfig?.blog
      if (!blog?.pagesData) return
      blog.pagesData = blog.pagesData.filter((page: { route: string }) => !page.route.startsWith('/docs/'))
    }
  }
}

export default defineConfig({
  extends: blogTheme,
  lang: 'zh-CN',
  title: 'TokFlux 企业级大模型 API 网关',
  description: 'TokFlux 提供企业级大模型 API 网关与统一中转服务，覆盖 OpenAI、Claude、Gemini、DeepSeek、Qwen 等主流模型，帮助团队以更低成本、更少改造接入全链路 AI 场景。',
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
    ['meta', { property: 'og:site_name', content: 'TokFlux 企业级大模型 API 网关' }],
    ['meta', { property: 'og:title', content: 'TokFlux 企业级大模型 API 网关' }],
    ['meta', { property: 'og:description', content: 'TokFlux 提供企业级大模型 API 网关与统一中转服务，覆盖 OpenAI、Claude、Gemini、DeepSeek、Qwen 等主流模型，帮助团队以更低成本、更少改造接入全链路 AI 场景。' }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'TokFlux 企业级大模型 API 网关' }],
    ['meta', { name: 'twitter:description', content: 'TokFlux 提供企业级大模型 API 网关与统一中转服务，覆盖 OpenAI、Claude、Gemini、DeepSeek、Qwen 等主流模型，帮助团队以更低成本、更少改造接入全链路 AI 场景。' }],
    ['meta', { name: 'twitter:image', content: ogImage }]
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },
  vite: {
    plugins: [excludeDocsFromBlog()]
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
      {
        text: '文档',
        items: [
          { text: '快速开始', link: '/docs/' },
          { text: '使用说明', link: '/docs/markdown-examples' },
          { text: 'Node 环境配置', link: '/docs/setup/node' },
          { text: 'Codex 接入', link: '/docs/codex/cli' },
          { text: 'Claude 接入', link: '/docs/claude/cli' }
        ]
      },
      {
        text: '博客',
        items: [
          { text: '博客首页', link: '/blog/' },
          { text: '教程', link: '/blog/tutorials/' },
          { text: '公告', link: '/blog/announcements/' }
        ]
      },
      { text: '控制台', link: 'https://tokenflux.cloud/dashboard/overview' }
    ],
    sidebar: {
      '/docs/': [
        {
          text: '文档',
          items: [
            { text: '快速开始', link: '/docs/' },
            { text: '使用说明', link: '/docs/markdown-examples' },
            { text: 'API 示例', link: '/docs/api-examples' }
          ]
        },
        {
          text: '环境配置',
          items: [
            { text: 'Node 环境配置', link: '/docs/setup/node' },
            { text: 'Codex 中转配置', link: '/docs/setup/codex-gateway' },
            { text: 'Claude 中转配置', link: '/docs/setup/claude-gateway' }
          ]
        },
        {
          text: '插件安装',
          items: [
            {
              text: 'Codex',
              collapsed: true,
              items: [
                { text: 'Codex CLI', link: '/docs/codex/cli' },
                { text: 'Codex IDE 插件', link: '/docs/codex/ide-plugin' },
                { text: 'Codex 桌面端', link: '/docs/codex/desktop' }
              ]
            },
            {
              text: 'Claude',
              collapsed: true,
              items: [
                { text: 'Claude CLI', link: '/docs/claude/cli' },
                { text: 'Claude IDE 插件', link: '/docs/claude/ide-plugin' },
                { text: 'Claude 桌面端', link: '/docs/claude/desktop' }
              ]
            }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tokflux/tokflux-developer' }
    ]
  }
})
