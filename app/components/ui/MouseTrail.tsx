'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface MousePosition {
  x: number
  y: number
}

export function MouseTrail() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const [trail, setTrail] = useState<MousePosition[]>([])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMoving(true)
      setTrail(prev => [...prev, { x: e.clientX, y: e.clientY }].slice(-5))

      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMoving(false)
        setTrail([])
      }, 200)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <AnimatePresence>
      {isMoving && (
        <>
          {/* Main cursor effect */}
          <motion.div
            className="fixed inset-0 pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute w-40 h-40"
              style={{
                top: mousePosition.y - 80,
                left: mousePosition.x - 80,
              }}
            >
              {/* Crystal-like glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-[50px] crystal-glow" />
              <div className="absolute inset-0 rounded-full crystal-shimmer" />
              <div className="absolute inset-0 rounded-full glass-shimmer" />
            </motion.div>
          </motion.div>

          {/* Trail effects */}
          {trail.map((position, index) => (
            <motion.div
              key={index}
              className="fixed pointer-events-none z-40"
              initial={{ opacity: 0.5, scale: 0.8 }}
              animate={{ 
                opacity: 0,
                scale: 0.2,
                x: position.x - 20,
                y: position.y - 20
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut"
              }}
            >
              <div className="w-10 h-10 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-[20px]" />
                <div className="absolute inset-0 rounded-full crystal-shimmer opacity-50" />
              </div>
            </motion.div>
          ))}
        </>
      )}
    </AnimatePresence>
  )
} 