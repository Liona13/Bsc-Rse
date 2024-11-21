'use client'

import { motion } from "framer-motion"

export default function Loading() {
  const loadingVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  const dotVariants = {
    initial: { scale: 1, opacity: 0.3 },
    animate: { 
      scale: [1, 1.2, 1],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center z-50"
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced Glassmorphic background */}
      <div className="absolute inset-0 glassmorphic-darker backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent" />
        <div className="absolute inset-0 glass-noise opacity-20" />
        
        {/* Animated background orbs */}
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow" />
        
        {/* Rotating background pattern */}
        <div className="absolute inset-0 loading-rotate opacity-5">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
        </div>
      </div>

      {/* Loading animation container */}
      <motion.div 
        className="relative z-10 glassmorphic-glow p-8 rounded-2xl loading-container"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Loading dots container */}
        <div className="flex items-center gap-3">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-4 h-4 rounded-full glassmorphic-floating loading-dot"
              variants={dotVariants}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent loading-shimmer" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
} 