'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      style={{ opacity, scale }}
      className="fixed bottom-8 right-8 p-3 rounded-full glassmorphic-floating group z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <ArrowUp className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
    </motion.button>
  )
} 