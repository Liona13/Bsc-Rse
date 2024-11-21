export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  image?: string
  content: string
  author: {
    name: string
    avatar?: string
    role?: string
  }
  featured?: boolean
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
  }
}

export interface BlogCategory {
  name: string
  description: string
  slug: string
} 