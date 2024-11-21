'use client'

import { motion } from "framer-motion"

interface BlockquoteProps {
  children: React.ReactNode
  className?: string
  author?: string
}

export function Blockquote({ children, className = "", author }: BlockquoteProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`pl-6 border-l-4 border-white/20 my-6 space-y-2 ${className}`}
    >
      <div className="text-white/70 italic">{children}</div>
      {author && (
        <cite className="text-sm text-white/50 not-italic">— {author}</cite>
      )}
    </motion.blockquote>
  )
} 