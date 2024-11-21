export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Your Name",
  title: process.env.NEXT_PUBLIC_SITE_TITLE || "Your Portfolio",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Creative Developer Portfolio",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE || "https://your-domain.com/og.png",
  links: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/yourusername",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/yourusername",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/yourusername",
    email: process.env.NEXT_PUBLIC_EMAIL || "your.email@example.com",
  },
} as const 