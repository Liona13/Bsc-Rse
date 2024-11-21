import { BlogPost, BlogCategory, BlogTag, BlogSeries } from '@/types/blog'

export const blogCategories: BlogCategory[] = [
  {
    name: "Development",
    description: "Articles about software development and programming",
    slug: "development",
    image: "/blog/categories/development.jpg"
  },
  {
    name: "Architecture",
    description: "System design and architecture patterns",
    slug: "architecture",
    image: "/blog/categories/architecture.jpg"
  },
  {
    name: "DevOps",
    description: "CI/CD, deployment, and infrastructure",
    slug: "devops",
    image: "/blog/categories/devops.jpg"
  }
]

export const blogTags: BlogTag[] = [
  {
    name: "React",
    slug: "react",
    description: "Articles about React and its ecosystem"
  },
  {
    name: "Node.js",
    slug: "nodejs",
    description: "Server-side JavaScript development"
  },
  {
    name: "TypeScript",
    slug: "typescript",
    description: "Static typing for JavaScript"
  }
]

export const blogSeries: BlogSeries[] = [
  {
    name: "Microservices Architecture",
    slug: "microservices-architecture",
    description: "A comprehensive guide to building microservices",
    posts: [
      "building-scalable-microservices",
      "microservices-communication-patterns",
      "microservices-deployment"
    ],
    image: "/blog/series/microservices.jpg"
  }
]

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-microservices",
    title: "Building Scalable Microservices with Node.js",
    description: "A comprehensive guide to designing and implementing microservices architecture using Node.js and Docker.",
    date: "2024-01-15",
    readTime: "8 min read",
    author: {
      name: "John Doe",
      avatar: "/avatars/john.jpg",
      role: "Senior Software Engineer",
      social: {
        twitter: "https://twitter.com/johndoe",
        github: "https://github.com/johndoe"
      }
    },
    tags: ["Microservices", "Node.js", "Docker", "Architecture"],
    image: "/blog/microservices.jpg",
    featured: true,
    published: true,
    content: `
      # Building Scalable Microservices with Node.js

      ## Introduction
      Microservices architecture has become increasingly popular...

      ## Understanding Microservices
      Microservices are an architectural style that structures an application...

      ## Implementation with Node.js
      Node.js is particularly well-suited for microservices because...

      ## Docker Integration
      Docker containers provide isolation and consistency...

      ## Best Practices
      Here are some best practices to follow...

      ## Conclusion
      Building scalable microservices requires careful planning...
    `,
    seo: {
      title: "Building Scalable Microservices with Node.js - A Complete Guide",
      description: "Learn how to design and implement scalable microservices using Node.js and Docker.",
      keywords: ["microservices", "node.js", "docker", "architecture"]
    },
    series: {
      name: "Microservices Architecture",
      order: 1
    }
  }
  // Add more blog posts...
] 