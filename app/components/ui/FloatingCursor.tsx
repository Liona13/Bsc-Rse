'use client'

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function FloatingCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON') {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-50"
    >
      <motion.div
        className="fixed rounded-full backdrop-blur-[1px]"
        style={{
          width: isHovering ? "48px" : "24px",
          height: isHovering ? "48px" : "24px",
          background: "linear-gradient(120deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 12),
          y: mousePosition.y - (isHovering ? 24 : 12),
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
      </motion.div>
    </motion.div>
  )
} 