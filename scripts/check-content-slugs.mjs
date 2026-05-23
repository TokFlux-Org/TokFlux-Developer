import { readdirSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const ROOT = process.cwd()
const CONTENT_DIRS = ['blog', 'docs']

const MAX_SLUG_LENGTH = 24
const MAX_SLUG_PARTS = 4
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

const errors = []

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    if (name.startsWith('.')) return []

    const fullPath = join(dir, name)
    const stats = statSync(fullPath)
    return stats.isDirectory() ? walk(fullPath) : [fullPath]
  })
}

function report(filePath, message) {
  const path = relative(ROOT, filePath).split(sep).join('/')
  errors.push(`${path}: ${message}`)
}

function validateSlug(filePath, slug, type) {
  const parts = slug.split('-')

  if (!SLUG_PATTERN.test(slug)) {
    report(filePath, `${type} slug must use lowercase kebab-case`)
  }

  if (slug.length > MAX_SLUG_LENGTH) {
    report(filePath, `${type} slug must be ${MAX_SLUG_LENGTH} characters or fewer`)
  }

  if (parts.length > MAX_SLUG_PARTS) {
    report(filePath, `${type} slug must use ${MAX_SLUG_PARTS} words or fewer`)
  }

  if (slug.startsWith('tokflux-')) {
    report(filePath, `${type} slug should not repeat the site brand prefix`)
  }
}

for (const contentDir of CONTENT_DIRS) {
  const rootDir = join(ROOT, contentDir)

  for (const filePath of walk(rootDir)) {
    const relativePath = relative(rootDir, filePath)
    const segments = relativePath.split(sep)
    const fileName = segments.at(-1)

    for (const dirSlug of segments.slice(0, -1)) {
      validateSlug(filePath, dirSlug, 'directory')
    }

    if (!fileName?.endsWith('.md') || fileName === 'index.md') continue

    validateSlug(filePath, fileName.replace(/\.md$/, ''), 'page')
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
