'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "../ui/ScrollAnimation"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Link from "next/link"
import { useState, useEffect } from "react"
import { BlogPost } from "@/types/blog"
import { LoadingState } from "../ui/LoadingState"
import { ErrorState } from "../ui/ErrorState"

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/blog')
        if (!response.ok) throw new Error('Failed to fetch posts')
        const data = await response.json()
        setPosts(data.filter((post: BlogPost) => post.published).slice(0, 3))
      } catch (err) {
        console.error('Error fetching blog posts:', err)
        setError('Failed to load blog posts')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) return <LoadingState />
  if (error) return <ErrorState message={error} />

  return (
    <section id="blog" className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] -right-[15%] w-[45%] h-[45%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[30%] -left-[15%] w-[45%] h-[45%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative">
        <ScrollAnimation>
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter neon-text">
              Latest Articles
            </h2>
            <Link 
              href="/blog"
              className="text-sm text-white/70 hover:text-white flex items-center gap-2 transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollAnimation>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ScrollAnimation key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group h-full">
                  <CardContent className="p-6 relative overflow-hidden h-full flex flex-col">
                    {/* Content */}
                    <div className="relative z-10 flex flex-col flex-1">
                      {post.image && (
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
                        <h3 className="font-display text-lg font-semibold text-white/90 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-white/60 text-sm line-clamp-3">
                          {post.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 3).map((tag, idx) => (
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

                    {/* Decorative Elements */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-[50px] animate-pulse-slow" />
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-[50px] animate-pulse-slow" />
                  </CardContent>
                </Card>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
} 