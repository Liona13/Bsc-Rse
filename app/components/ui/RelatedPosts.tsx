'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, Clock, Tag } from 'lucide-react'
import Link from "next/link"
import { blogPosts } from "@/config/blog"

interface RelatedPostsProps {
  currentPostSlug: string
  currentPostTags: string[]
}

export function RelatedPosts({ currentPostSlug, currentPostTags }: RelatedPostsProps) {
  // This would typically come from your CMS or database
  const allPosts = blogPosts

  // Filter out current post and find related posts based on tags
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPostSlug)
    .filter(post => post.tags.some(tag => currentPostTags.includes(tag)))
    .slice(0, 3)

  return (
    <div className="space-y-6">
      <h3 className="font-display text-xl font-semibold text-white/90">
        Related Articles
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group h-full">
                <CardContent className="p-4 relative overflow-hidden h-full">
                  {/* Card content similar to blog list */}
                  {/* ... */}
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 