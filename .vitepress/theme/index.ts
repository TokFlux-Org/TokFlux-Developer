import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import BlogTheme from '@sugarat/theme'
import { computed, defineComponent, h } from 'vue'
import './custom.css'

import BlogArticleHeader from './components/BlogArticleHeader.vue'
import TopicDirectory from './components/TopicDirectory.vue'

const BlogLayout = BlogTheme.Layout ?? DefaultTheme.Layout

const Layout = defineComponent({
  name: 'TokFluxLayout',
  setup(_, { slots }) {
    const route = useRoute()
    const { frontmatter } = useData()
    const isDocsRoute = computed(() => route.path === '/' || route.path === '/docs' || route.path.startsWith('/docs/'))
    const routeClass = computed(() => (route.path === '/' ? 'tokflux-site-home' : 'tokflux-docs-route'))
    const isBlogArticle = computed(() => route.path.startsWith('/blog/') && Boolean(frontmatter.value.date))

    return () => {
      if (isDocsRoute.value) {
        return h('div', { class: routeClass.value }, h(DefaultTheme.Layout, null, slots))
      }

      const blogSlots = isBlogArticle.value
        ? {
            ...slots,
            'doc-before': () => [slots['doc-before']?.(), h(BlogArticleHeader)]
          }
        : slots

      return h(
        'div',
        { class: ['tokflux-blog-route', isBlogArticle.value && 'tokflux-blog-article'] },
        h(BlogLayout, null, blogSlots)
      )
    }
  }
})

const theme: Theme = {
  ...BlogTheme,
  Layout,
  enhanceApp(ctx) {
    BlogTheme.enhanceApp?.(ctx)
    const { app } = ctx
    app.component('BlogArticleHeader', BlogArticleHeader)
    app.component('TopicDirectory', TopicDirectory)
  }
}

export default theme
