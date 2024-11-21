'use client'

import { motion, useAnimation } from "framer-motion"
import { useState, useEffect } from "react"

type Particle = {
  x: number
  y: number
  scale: number
  opacity: number
  color: string
}

export function GlitterCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const wandControls = useAnimation()

  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    const updateMousePosition = (e: MouseEvent) => {
      const dx = e.clientX - lastPosition.x
      const dy = e.clientY - lastPosition.y
      const speed = Math.sqrt(dx * dx + dy * dy)
      const rotation = Math.atan2(dy, dx) * (180 / Math.PI) - 45 // Base -45 degree rotation

      setMousePosition({ x: e.clientX, y: e.clientY })
      setLastPosition({ x: e.clientX, y: e.clientY })

      // Add rotation based on movement direction
      if (speed > 1) {
        wandControls.start({
          rotateZ: rotation * 0.2, // Subtle rotation
          transition: { type: "spring", stiffness: 150, damping: 15 }
        })
      }
      
      if (Math.random() > 0.3) {
        const colors = isHovering ? [
          "rgba(255, 215, 0, 0.9)",  // Gold
          "rgba(255, 255, 255, 0.9)", // White
          "rgba(135, 206, 235, 0.8)", // Sky Blue
          "rgba(255, 192, 203, 0.8)"  // Pink
        ] : [
          "rgba(255, 255, 255, 0.9)",
          "rgba(255, 215, 0, 0.7)",
          "rgba(255, 255, 255, 0.6)"
        ]
        
        for (let i = 0; i < (isHovering ? 4 : 2); i++) {
          const angle = Math.random() * Math.PI * 2
          const distance = Math.random() * (isHovering ? 40 : 20)
          const newParticle = {
            x: e.clientX + Math.cos(angle) * distance,
            y: e.clientY + Math.sin(angle) * distance,
            scale: Math.random() * 0.8 + 0.2,
            opacity: Math.random() * 0.5 + 0.5,
            color: colors[Math.floor(Math.random() * colors.length)]
          }
          setParticles(prev => [...prev.slice(-30), newParticle])
        }
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON') {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseDown = () => {
      setIsClicking(true)
      // Create burst of particles on click
      const burstCount = 12
      const newParticles: Particle[] = []
      for (let i = 0; i < burstCount; i++) {
        const angle = (i / burstCount) * Math.PI * 2
        const distance = 40
        newParticles.push({
          x: mousePosition.x + Math.cos(angle) * distance,
          y: mousePosition.y + Math.sin(angle) * distance,
          scale: Math.random() * 1 + 0.5,
          opacity: 1,
          color: "rgba(255, 215, 0, 0.9)"
        })
      }
      setParticles(prev => [...prev, ...newParticles])
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      clearTimeout(timeout)
    }
  }, [lastPosition, mousePosition, isHovering, wandControls])

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({ ...p, opacity: p.opacity - 0.05 })).filter(p => p.opacity > 0))
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div className="fixed inset-0 pointer-events-none z-50">
      {/* Magic Wand Cursor */}
      <motion.div
        className="fixed"
        style={{
          width: "24px",
          height: "100px",
          transform: `translate(${mousePosition.x - 50}px, ${mousePosition.y - 50}px) rotate(-45deg)`,
          transformOrigin: "50% 50%",
        }}
        animate={wandControls}
      >
        {/* Wand handle with wood grain texture */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-10"
          style={{
            background: `
              linear-gradient(to bottom, #4A3728, #2C1810),
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.1) 2px,
                rgba(0,0,0,0.1) 4px
              )
            `,
            borderRadius: "3px 3px 4px 4px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          {/* Enhanced handle details */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#5C483A] rounded-full opacity-60" />
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#5C483A] rounded-full opacity-70" />
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#5C483A] rounded-full opacity-80" />
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[3px] bg-[#2C1810] rounded-full" />
        </motion.div>

        {/* Enhanced wand shaft */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{
            width: "2px",
            height: "60px",
            background: "linear-gradient(to bottom, #3A2820, #4A3728)",
            borderRadius: "1px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          }}
        >
          {/* Enhanced shaft details */}
          <div className="absolute top-1/4 -left-[1.5px] w-[5px] h-[1px] bg-[#5C483A] rounded-full opacity-60" />
          <div className="absolute top-1/2 -left-[1.5px] w-[5px] h-[1px] bg-[#5C483A] rounded-full opacity-70" />
          <div className="absolute top-3/4 -left-[1.5px] w-[5px] h-[1px] bg-[#5C483A] rounded-full opacity-80" />
        </motion.div>

        {/* Enhanced wand tip with glow */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: "3px",
            height: "8px",
            background: "linear-gradient(to top, #4A3728, #2C1810)",
            borderRadius: "1px 1px 0.5px 0.5px",
            boxShadow: `
              0 0 ${isHovering ? '20px' : '10px'} ${isClicking ? 'rgba(255,215,0,0.8)' : 'rgba(255,215,0,0.3)'},
              0 0 ${isHovering ? '40px' : '20px'} ${isClicking ? 'rgba(255,215,0,0.4)' : 'rgba(255,215,0,0.1)'}
            `,
          }}
          animate={{
            boxShadow: [
              `0 0 10px rgba(255,215,0,0.3), 0 0 20px rgba(255,215,0,0.1)`,
              `0 0 15px rgba(255,215,0,0.5), 0 0 30px rgba(255,215,0,0.2)`,
              `0 0 10px rgba(255,215,0,0.3), 0 0 20px rgba(255,215,0,0.1)`,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Enhanced Glitter particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="fixed"
          style={{
            width: "3px",
            height: "3px",
            background: particle.color,
            borderRadius: "50%",
            boxShadow: `
              0 0 ${8 * particle.scale}px ${particle.color},
              0 0 ${15 * particle.scale}px rgba(255, 255, 255, 0.5)
            `,
          }}
          initial={{ 
            x: particle.x - 1.5,
            y: particle.y - 1.5,
            scale: particle.scale,
            opacity: particle.opacity,
            rotate: Math.random() * 360
          }}
          animate={{ 
            scale: 0,
            opacity: 0,
            y: particle.y - 15 - Math.random() * 15,
            rotate: Math.random() * 360
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  )
} 