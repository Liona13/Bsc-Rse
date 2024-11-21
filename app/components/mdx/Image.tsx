'use client'

import { motion } from 'framer-motion'

interface ImageProps {
  src: string
  alt: string
  className?: string
}

export function Image({ src, alt, className = "" }: ImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="my-6"
    >
      <div className="relative rounded-lg overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto ${className}`}
        />
        {alt && (
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 backdrop-blur-sm">
            <p className="text-sm text-white/70 text-center">
              {alt}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
} 