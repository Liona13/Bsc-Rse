'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { ShareButtons } from "@/components/ui/ShareButtons"
import { BlogCard } from "@/components/ui/BlogCard"
import { ScrollProgress } from "@/components/ui/ScrollProgress"
import { ScrollToTop } from "@/components/ui/ScrollToTop"
import { BlogPost } from "@/lib/blog/types"
import { getRelatedPosts } from "@/lib/blog"
import { useEffect, useState } from "react"

interface BlogLayoutProps {
  children: React.ReactNode
  post: BlogPost
}

export function BlogLayout({ children, post }: BlogLayoutProps) {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      const posts = await getRelatedPosts(post.slug, post.tags)
      setRelatedPosts(posts)
    }
    fetchRelatedPosts()
  }, [post.slug, post.tags])

  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <ScrollToTop />

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] -left-[20%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
      </div>

      {/* Content */}
      <main className="relative z-10 pt-16 pb-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center text-sm text-white/50 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Main Content */}
            <Card className="glassmorphic-depth p-6 sm:p-8 space-y-8">
              {children}
            </Card>

            {/* Share Buttons */}
            <div className="flex justify-center">
              <ShareButtons url={`${window.location.origin}/blog/${post.slug}`} title={post.title} />
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="space-y-6">
                <h3 className="font-display text-xl font-semibold text-white/90">
                  Related Articles
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.slug} post={relatedPost} variant="compact" />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
} 