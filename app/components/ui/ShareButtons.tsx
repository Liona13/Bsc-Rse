'use client'

import { motion } from "framer-motion"
import { Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react'
import { useState } from "react"

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareButtons = [
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'hover:text-blue-500'
    }
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-white/60">Share:</span>
      <div className="flex items-center gap-3">
        {shareButtons.map((button) => (
          <motion.a
            key={button.name}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white/60 ${button.color} transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button.icon className="w-5 h-5" />
          </motion.a>
        ))}
        <motion.button
          onClick={copyToClipboard}
          className="text-white/60 hover:text-white transition-colors relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkIcon className="w-5 h-5" />
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white/90 bg-black/50 px-2 py-1 rounded"
            >
              Copied!
            </motion.span>
          )}
        </motion.button>
      </div>
    </div>
  )
} 