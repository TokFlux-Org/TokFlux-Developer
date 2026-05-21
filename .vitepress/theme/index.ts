import type { Theme } from 'vitepress'
import BlogTheme from '@sugarat/theme'
import './custom.css'

import TopicDirectory from './components/TopicDirectory.vue'

const theme: Theme = {
  ...BlogTheme,
  enhanceApp(ctx) {
    BlogTheme.enhanceApp?.(ctx)
    const { app } = ctx
    app.component('TopicDirectory', TopicDirectory)
  }
}

export default theme
