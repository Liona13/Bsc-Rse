'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"
import { MessageSquare, Send } from 'lucide-react'

interface Comment {
  id: string
  author: string
  content: string
  date: string
  avatar?: string
}

interface CommentsProps {
  postSlug: string
}

export function Comments({ postSlug }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Alice Johnson',
      content: 'Great article! The microservices architecture patterns you described are very insightful.',
      date: '2024-01-20',
      avatar: '/avatars/alice.jpg'
    },
    {
      id: '2',
      author: 'Bob Smith',
      content: 'Would love to see more examples of Docker configuration for these microservices.',
      date: '2024-01-19',
      avatar: '/avatars/bob.jpg'
    }
  ])

  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      author: 'Guest User', // In a real app, this would come from auth
      content: newComment,
      date: new Date().toISOString().split('T')[0],
    }

    setComments(prev => [comment, ...prev])
    setNewComment('')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-white/80" />
        <h3 className="font-display text-xl font-semibold text-white/90">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <Card className="glassmorphic-depth">
        <CardContent className="p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20 border border-white/10"
              rows={3}
            />
            <div className="flex justify-end">
              <motion.button
                type="submit"
                className="px-4 py-2 rounded-lg glassmorphic-frost text-white/90 hover:text-white transition-colors relative group overflow-hidden flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!newComment.trim()}
              >
                <Send className="w-4 h-4" />
                <span>Post Comment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="glassmorphic-depth hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                    {comment.avatar ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={comment.avatar}
                        alt={comment.author}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-white/60">
                        {comment.author[0]}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-white/90">{comment.author}</div>
                    <div className="text-sm text-white/50">{comment.date}</div>
                  </div>
                </div>
                <p className="text-white/70 text-sm pl-13">
                  {comment.content}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 