'use client'

import { motion } from "framer-motion"
import { ExternalLink } from 'lucide-react'
import Link from "next/link"

interface CardProps {
  title: string
  description: string
  link?: string
  image?: string
  className?: string
}

export function Card({ title, description, link, image, className = "" }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`my-6 ${className}`}
    >
      <div className="rounded-lg glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group overflow-hidden">
        {image && (
          <div className="relative w-full h-48 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          </div>
        )}

        <div className="p-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-lg font-semibold text-white/90">
                {title}
              </h3>
              {link && (
                <Link 
                  href={link}
                  target="_blank"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              )}
            </div>
            <p className="mt-2 text-white/70 text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 