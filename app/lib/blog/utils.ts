export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getExcerpt(content: string, maxLength: number = 160): string {
  const plainText = content.replace(/<[^>]+>/g, '')
  if (plainText.length <= maxLength) return plainText
  return plainText.slice(0, maxLength).trim() + '...'
}

export function sortPosts<T extends { date: string }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function filterPublishedPosts<T extends { published?: boolean }>(posts: T[]): T[] {
  return posts.filter(post => post.published !== false)
}

export function groupPostsByYear<T extends { date: string }>(posts: T[]): Record<string, T[]> {
  return posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString()
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {} as Record<string, T[]>)
} 