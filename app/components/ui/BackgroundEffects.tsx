'use client'

import { motion } from "framer-motion"

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-blue-500/20 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-purple-500/20 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
    </div>
  )
} 