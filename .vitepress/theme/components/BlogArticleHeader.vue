<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

type Frontmatter = {
  title?: string
  description?: string
  date?: string | number | Date
  cover?: string
  categories?: string[]
  tag?: string[]
}

const { frontmatter } = useData<Frontmatter>()

const publishedDate = computed(() => {
  if (!frontmatter.value.date) return ''

  const date = new Date(frontmatter.value.date)
  if (Number.isNaN(date.getTime())) return String(frontmatter.value.date)

  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
})

const categories = computed(() => frontmatter.value.categories ?? [])
const tags = computed(() => frontmatter.value.tag ?? [])
</script>

<template>
  <header class="tokflux-article-hero">
    <div class="tokflux-article-hero-copy">
      <div class="tokflux-article-kicker">
        <span v-for="category in categories" :key="category">{{ category }}</span>
        <time v-if="publishedDate">{{ publishedDate }}</time>
      </div>

      <div class="tokflux-article-title" role="heading" aria-level="1">{{ frontmatter.title }}</div>
      <p v-if="frontmatter.description">{{ frontmatter.description }}</p>

      <div v-if="tags.length" class="tokflux-article-tags" aria-label="文章标签">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
    </div>

    <div v-if="frontmatter.cover" class="tokflux-article-cover">
      <img :src="frontmatter.cover" :alt="frontmatter.title || 'TokFlux article cover'">
    </div>
  </header>
</template>
