import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  type?: 'website' | 'article' | 'profile'
  path?: string
}

export function generateMetadata({
  title,
  description,
  image,
  type = 'website',
  path = ''
}: SEOProps): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImage = image || siteConfig.ogImage

  return {
    title: title ? `${title} | ${siteConfig.title}` : siteConfig.title,
    description: description || siteConfig.description,
    openGraph: {
      title: title || siteConfig.title,
      description: description || siteConfig.description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage }],
      locale: 'en-US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: title || siteConfig.title,
      description: description || siteConfig.description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  }
} 