import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import BlogTheme from '@sugarat/theme'
import { computed, defineComponent, h } from 'vue'
import './custom.css'

import TopicDirectory from './components/TopicDirectory.vue'

const BlogLayout = BlogTheme.Layout ?? DefaultTheme.Layout

const Layout = defineComponent({
  name: 'TokFluxLayout',
  setup(_, { slots }) {
    const route = useRoute()
    const isDocsRoute = computed(() => route.path === '/' || route.path === '/docs' || route.path.startsWith('/docs/'))
    const routeClass = computed(() => (route.path === '/' ? 'tokflux-site-home' : 'tokflux-docs-route'))

    return () =>
      isDocsRoute.value
        ? h('div', { class: routeClass.value }, h(DefaultTheme.Layout, null, slots))
        : h('div', { class: 'tokflux-blog-route' }, h(BlogLayout, null, slots))
  }
})

const theme: Theme = {
  ...BlogTheme,
  Layout,
  enhanceApp(ctx) {
    BlogTheme.enhanceApp?.(ctx)
    const { app } = ctx
    app.component('TopicDirectory', TopicDirectory)
  }
}

export default theme
