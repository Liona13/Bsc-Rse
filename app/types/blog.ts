export interface Author {
  name: string
  avatar?: string
  role?: string
  bio?: string
  social?: {
    twitter?: string
    github?: string
    linkedin?: string
    website?: string
  }
}

export interface SEO {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime?: string
  author: Author
  tags: string[]
  image?: string
  featured?: boolean
  published: boolean
  content: string
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
    ogImage?: string
    canonical?: string
  }
  series?: {
    name: string
    order: number
  }
}

export interface BlogCategory {
  name: string
  description: string
  slug: string
  image?: string
}

export interface BlogTag {
  name: string
  slug: string
  count?: number
  description?: string
}

export interface BlogSeries {
  name: string
  slug: string
  description: string
  posts: string[] // Array of post slugs
  image?: string
}

export interface BlogStats {
  totalPosts: number
  totalViews: number
  totalLikes: number
  popularTags: { tag: string; count: number }[]
  popularPosts: { slug: string; views: number }[]
} 