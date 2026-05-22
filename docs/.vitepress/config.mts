import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "首页",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: '页面导航',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    nav: [
      { text: '文档', link: '/markdown-examples' },
      { text: '文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '欢迎使用',
        collapsed: true,
        items: [
          { text: '使用说明', link: '/markdown-examples' },
          { text: '快速开始', link: '/api-examples' }
        ]
      },
      {
        text: '环境配置',
        collapsed: true,
        items: [
          { text: 'Node环境配置', link: '/pz/node_a' },
          { text: 'codex 中转配置', link: '/pz/codex_a' },
          { text: 'claude 中转配置', link: '/pz/claude_a' },
        ]
      },
      {
        text: '插件安装',
        collapsed: true,
        items: [
          {
            text: 'Codex',
            collapsed: true,
            items: [
              { text: 'Codex CLI', link: '/codex/codex_a' },
              { text: 'Codex IDE 插件', link: '/codex/codex_b' },
              { text: 'Codex 桌面端', link: '/codex/codex_c' },
            ]
          },
          {
            text: 'Claude',
            collapsed: true,
            items: [
              { text: 'Claude CLI', link: '/claude/claude_a' },
              { text: 'Claude IDE 插件', link: '/claude/claude_b' },
              { text: 'Claude 桌面端', link: '/claude/claude_c' },
            ]
          },
        ]
      } 

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
