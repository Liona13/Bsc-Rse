'use client'

import { motion } from "framer-motion"
import { Calendar, Clock, Tag } from 'lucide-react'
import Link from "next/link"
import { Card, CardContent } from "./card"
import { BlogPost } from "@/lib/blog/types"

interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'compact'
}

export function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group h-full">
        <CardContent className={`${variant === 'compact' ? 'p-4' : 'p-6'} relative overflow-hidden h-full`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
          
          <div className="relative z-10 flex flex-col h-full">
            {post.image && variant === 'default' && (
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
            )}

            <div className="flex-1 space-y-4">
              <h3 className={`font-display font-semibold text-white/90 line-clamp-2 ${
                variant === 'compact' ? 'text-base' : 'text-lg'
              }`}>
                {post.title}
              </h3>
              {variant === 'default' && (
                <p className="text-white/60 text-sm line-clamp-3">
                  {post.description}
                </p>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, variant === 'compact' ? 2 : undefined).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
} 