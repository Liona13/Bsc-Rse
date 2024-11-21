'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { ScrollAnimation } from "@/components/ui/ScrollAnimation"
import { BlogSearch } from "@/components/ui/BlogSearch"
import { BlogCard } from "@/components/ui/BlogCard"
import { useState, useEffect } from "react"
import { getAllPosts, getAllTags } from "@/lib/blog"
import { LoadingState } from "@/components/ui/LoadingState"
import { ErrorState } from "@/components/ui/ErrorState"
import { BlogPost } from "@/types/blog"
import { blogConfig } from "@/config/blog"
import { sortPosts, filterPublishedPosts } from "@/lib/blog/utils"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'readTime'>('date')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const [allPosts, availableTags] = await Promise.all([
          getAllPosts(),
          getAllTags()
        ])
        setPosts(filterPublishedPosts(sortPosts(allPosts)))
        setTags(availableTags)

        // Update page metadata
        document.title = blogConfig.metadata.title
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
          metaDescription.setAttribute('content', blogConfig.metadata.description)
        }
      } catch (err) {
        console.error('Error fetching blog data:', err)
        setError('Failed to load blog posts')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // Filter and sort posts
  const filteredPosts = posts
    .filter(post => {
      // Apply search filter
      if (searchQuery) {
        const searchContent = `${post.title} ${post.description} ${post.tags.join(' ')}`.toLowerCase()
        const searchTerms = searchQuery.toLowerCase().split(' ')
        if (!searchTerms.every(term => searchContent.includes(term))) {
          return false
        }
      }

      // Apply tag filter
      if (selectedTags.length > 0) {
        return selectedTags.every(tag => post.tags.includes(tag))
      }

      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case 'title':
          return a.title.localeCompare(b.title)
        case 'readTime':
          return parseInt(b.readTime) - parseInt(a.readTime)
        default:
          return 0
      }
    })

  // Pagination
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * blogConfig.postsPerPage,
    currentPage * blogConfig.postsPerPage
  )

  if (isLoading) return <LoadingState />
  if (error) return <ErrorState message={error} />

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

            {/* Search and Filters */}
            <BlogSearch
              onSearch={setSearchQuery}
              onTagSelect={(tag) => {
                setSelectedTags(prev => 
                  prev.includes(tag)
                    ? prev.filter(t => t !== tag)
                    : [...prev, tag]
                )
              }}
              onSortChange={setSortBy}
              selectedTags={selectedTags}
              availableTags={tags}
            />

            {/* Posts Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {paginatedPosts.length > 0 ? (
                paginatedPosts.map((post) => (
                  <ScrollAnimation key={post.slug}>
                    <BlogCard post={post} />
                  </ScrollAnimation>
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <p className="text-white/60">No posts found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredPosts.length > blogConfig.postsPerPage && (
              <div className="flex justify-center gap-2">
                {Array.from({ length: Math.ceil(filteredPosts.length / blogConfig.postsPerPage) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === idx + 1
                        ? 'bg-blue-500/20 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    } transition-colors`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
} 