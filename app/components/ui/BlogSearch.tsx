'use client'

import { motion } from "framer-motion"
import { Search, X, Filter, SlidersHorizontal } from 'lucide-react'
import { useState } from "react"
import { Card, CardContent } from "./card"

interface BlogSearchProps {
  onSearch: (query: string) => void
  onTagSelect: (tag: string) => void
  onSortChange: (sort: 'date' | 'title' | 'readTime') => void
  selectedTags: string[]
  availableTags: string[]
}

export function BlogSearch({ 
  onSearch, 
  onTagSelect, 
  onSortChange,
  selectedTags, 
  availableTags 
}: BlogSearchProps) {
  const [query, setQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearch(value)
  }

  const sortOptions = [
    { value: 'date', label: 'Latest First' },
    { value: 'title', label: 'Alphabetical' },
    { value: 'readTime', label: 'Read Time' }
  ]

  return (
    <Card className="glassmorphic-depth">
      <CardContent className="p-4 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-12 pr-20 py-3 rounded-lg glassmorphic-frost bg-white/5 text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {query && (
              <button
                onClick={() => handleSearch("")}
                className="text-white/40 hover:text-white/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`text-white/40 hover:text-white/60 transition-colors ${
                showFilters ? 'text-white/60' : ''
              }`}
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4"
          >
            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <SlidersHorizontal className="w-4 h-4 text-white/60" />
              <div className="flex gap-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => onSortChange(option.value as 'date' | 'title' | 'readTime')}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/70 hover:bg-white/20 transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <motion.button
                  key={tag}
                  onClick={() => onTagSelect(tag)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-500/20 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
} 