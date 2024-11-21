'use client'

import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 backdrop-blur-sm z-50" />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 z-50"
        style={{ 
          scaleX: scrollYProgress,
          background: 'linear-gradient(to right, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))',
          backgroundSize: '200% 100%',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
          transformOrigin: '0%'
        }}
      />
    </>
  )
} 