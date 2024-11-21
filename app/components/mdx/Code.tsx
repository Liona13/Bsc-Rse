'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { motion } from 'framer-motion'

interface CodeProps {
  children: string
  className?: string
  language?: string
}

export function Code({ children, className = "", language }: CodeProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="relative group">
      <pre className={`${className} rounded-lg p-4 bg-black/50 overflow-x-auto`}>
        {language && (
          <div className="absolute top-2 right-2 text-xs text-white/40">
            {language}
          </div>
        )}
        <motion.button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-white/60" />
          )}
        </motion.button>
        <code className="text-sm font-mono text-white/80">
          {children}
        </code>
      </pre>
    </div>
  )
} 