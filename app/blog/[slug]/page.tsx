'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  // This would typically come from your CMS or database
  const post = {
    title: "Building Scalable Microservices with Node.js",
    description: "A comprehensive guide to designing and implementing microservices architecture using Node.js and Docker.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Microservices", "Node.js", "Docker"],
    content: `
      <h2>Introduction</h2>
      <p>Microservices architecture has become increasingly popular...</p>

      <h2>Understanding Microservices</h2>
      <p>Microservices are an architectural style that structures an application...</p>

      <h2>Implementation with Node.js</h2>
      <p>Node.js is particularly well-suited for microservices because...</p>

      <h2>Docker Integration</h2>
      <p>Docker containers provide isolation and consistency across environments...</p>

      <h2>Conclusion</h2>
      <p>Building scalable microservices requires careful planning...</p>
    `
  }

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
          >
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center text-sm text-white/50 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <Card className="glassmorphic-depth p-6 sm:p-8 space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight neon-text">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div 
                className="prose prose-invert prose-sm sm:prose-base max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
} 