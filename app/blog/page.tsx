'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'
import { ScrollAnimation } from "@/components/ui/ScrollAnimation"

export default function BlogPage() {
  const posts = [
    {
      slug: "building-scalable-microservices",
      title: "Building Scalable Microservices with Node.js",
      description: "A comprehensive guide to designing and implementing microservices architecture using Node.js and Docker.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Microservices", "Node.js", "Docker"],
      image: "/blog/microservices.jpg",
    },
    // Add more blog posts...
  ]

  return (
    <div className="min-h-screen relative">
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
            {/* Header */}
            <div className="flex justify-between items-center">
              <Link 
                href="/"
                className="inline-flex items-center text-sm text-white/50 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight neon-text">
                Blog Posts
              </h1>
            </div>

            {/* Posts Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post, index) => (
                <ScrollAnimation key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group h-full">
                      <CardContent className="p-6 relative overflow-hidden h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
                        
                        <div className="relative z-10 space-y-4">
                          {/* Image */}
                          {post.image && (
                            <div className="relative w-full h-48 rounded-lg overflow-hidden">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            </div>
                          )}

                          {/* Content */}
                          <div className="space-y-2">
                            <h2 className="font-display text-xl font-semibold text-white/90">
                              {post.title}
                            </h2>
                            <p className="text-white/60 text-sm line-clamp-2">
                              {post.description}
                            </p>
                          </div>

                          {/* Footer */}
                          <div className="pt-4 border-t border-white/10">
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.tags.map((tag, idx) => (
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
                </ScrollAnimation>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
} 