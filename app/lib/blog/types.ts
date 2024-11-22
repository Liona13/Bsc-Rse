export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime?: string
  author: {
    name: string
    avatar?: string
    role?: string
    social?: {
      twitter?: string
      github?: string
      linkedin?: string
      website?: string
    }
  }
  tags: string[]
  image?: string
  featured?: boolean
  published: boolean
  content: string
}

export interface BlogCategory {
  name: string
  description: string
  slug: string
} 