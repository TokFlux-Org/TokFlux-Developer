import { readdirSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const ROOT = process.cwd()
const BLOG_DIR = join(ROOT, 'blog')

const MAX_BLOG_SLUG_LENGTH = 24
const MAX_BLOG_SLUG_PARTS = 4
const BLOG_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

const errors = []

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const fullPath = join(dir, name)
    const stats = statSync(fullPath)
    return stats.isDirectory() ? walk(fullPath) : [fullPath]
  })
}

function report(filePath, message) {
  const path = relative(ROOT, filePath).split(sep).join('/')
  errors.push(`${path}: ${message}`)
}

for (const filePath of walk(BLOG_DIR)) {
  if (!filePath.endsWith('.md')) continue

  const fileName = filePath.split(sep).at(-1)
  if (!fileName || fileName === 'index.md') continue

  const slug = fileName.replace(/\.md$/, '')
  const parts = slug.split('-')

  if (!BLOG_SLUG_PATTERN.test(slug)) {
    report(filePath, 'blog article slug must use lowercase kebab-case')
  }

  if (slug.length > MAX_BLOG_SLUG_LENGTH) {
    report(filePath, `blog article slug must be ${MAX_BLOG_SLUG_LENGTH} characters or fewer`)
  }

  if (parts.length > MAX_BLOG_SLUG_PARTS) {
    report(filePath, `blog article slug must use ${MAX_BLOG_SLUG_PARTS} words or fewer`)
  }

  if (slug.startsWith('tokflux-')) {
    report(filePath, 'blog article slug should not repeat the site brand prefix')
  }
}

if (errors.length) {
  console.error('Content slug check failed:\n')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log('Content slug check passed.')
