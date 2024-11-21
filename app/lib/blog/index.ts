import { BlogPost } from './types'
import { calculateReadTime } from './utils'

export async function getAllPosts(): Promise<BlogPost[]> {
  const response = await fetch('/api/blog/posts')
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  return response.json()
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const response = await fetch(`/api/blog/posts/${slug}`)
  if (!response.ok) {
    throw new Error('Failed to fetch post')
  }
  return response.json()
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.tags.includes(tag))
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.featured)
}

export async function getRelatedPosts(currentSlug: string, tags: string[]): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts
    .filter((post: any) => post.slug !== currentSlug)
    .filter((post: any) => post.tags.some((tag: string) => tags.includes(tag)))
    .slice(0, 3)
}

export async function searchPosts(query: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  const searchTerms = query.toLowerCase().split(' ')
  
  return allPosts.filter(post => {
    const searchContent = `${post.title} ${post.description} ${post.tags.join(' ')}`.toLowerCase()
    return searchTerms.every(term => searchContent.includes(term))
  })
}

export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts()
  const tags = allPosts.flatMap((post: any) => post.tags)
  return Array.from(new Set(tags))
} 