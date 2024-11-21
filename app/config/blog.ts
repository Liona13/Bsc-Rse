export const blogConfig = {
  postsPerPage: 6,
  featuredPostsCount: 3,
  categories: [
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
  ],
  defaultTags: [
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "AWS",
    "Docker",
    "Kubernetes",
    "DevOps",
    "Architecture",
    "Performance"
  ],
  metadata: {
    title: "Blog | Your Portfolio",
    description: "Articles about software development, architecture, and best practices",
    ogImage: "/og/blog.jpg",
  },
  components: {
    InfoBox: {
      tip: {
        icon: "💡",
        className: "bg-blue-500/10 border-blue-500/20"
      },
      warning: {
        icon: "⚠️",
        className: "bg-yellow-500/10 border-yellow-500/20"
      },
      error: {
        icon: "❌",
        className: "bg-red-500/10 border-red-500/20"
      }
    }
  }
} 