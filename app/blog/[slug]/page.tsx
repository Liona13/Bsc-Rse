'use client'

import { motion } from "framer-motion"
import { BlogPost } from "@/components/ui/BlogPost"
import { BlogLayout } from "@/components/layout/BlogLayout"
import { getPostBySlug } from "@/lib/blog"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { type BlogPost as BlogPostType } from "@/types/blog"
import { LoadingState } from "@/components/ui/LoadingState"
import { ErrorState } from "@/components/ui/ErrorState"
import { blogConfig } from "@/config/blog"

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true)
        const slug = typeof params.slug === 'string' ? params.slug : params.slug[0]
        const postData = await getPostBySlug(slug)
        setPost(postData)
        
        // Update page metadata
        document.title = `${postData.title} | ${blogConfig.metadata.title}`
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
          metaDescription.setAttribute('content', postData.description)
        }
      } catch (err) {
        console.error('Error fetching post:', err)
        setError('Failed to load blog post')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [params.slug])

  if (isLoading) return <LoadingState />
  if (error || !post) return <ErrorState message={error || 'Post not found'} />

  return (
    <BlogLayout post={post}>
      <BlogPost post={post} />
    </BlogLayout>
  )
} 