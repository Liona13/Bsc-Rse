'use client'

import { motion } from "framer-motion"
import { Calendar, Clock, Tag } from 'lucide-react'
import { type BlogPost } from "@/lib/blog/types"
import { Card } from "./card"
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { MDXProviderComponent } from "../mdx/MDXProvider"
import { useEffect, useState } from "react"
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import React from 'react'
import { MDXComponents } from '../mdx'
import type { Plugin } from 'unified'

interface BlogPostProps {
  post: BlogPost
}

export function BlogPost({ post }: BlogPostProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null)

  useEffect(() => {
    const prepareMDX = async () => {
      if (!post.content) return
      try {
        const serialized = await serialize(post.content, {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [[rehypeHighlight as any]],
            development: process.env.NODE_ENV === 'development',
          },
          parseFrontmatter: true,
        })
        setMdxSource(serialized)
      } catch (error) {
        console.error('Error serializing MDX:', error)
      }
    }

    prepareMDX()
  }, [post.content])

  if (!mdxSource) return null

  return (
    <Card className="glassmorphic-depth">
      <div className="p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <motion.h1 
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight neon-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {post.title}
          </motion.h1>

          <motion.div 
            className="flex flex-wrap gap-4 text-sm text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 flex items-center gap-1"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="prose prose-invert prose-sm sm:prose-base max-w-none"
        >
          <MDXProviderComponent>
            <React.Suspense fallback={<div>Loading...</div>}>
              <MDXRemote {...mdxSource} components={MDXComponents} />
            </React.Suspense>
          </MDXProviderComponent>
        </motion.div>

        {/* Author Info */}
        {post.author && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 pt-6 border-t border-white/10"
          >
            {post.author.avatar && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <div className="font-medium text-white/90">{post.author.name}</div>
              {post.author.role && (
                <div className="text-sm text-white/60">{post.author.role}</div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </Card>
  )
} 