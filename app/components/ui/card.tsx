'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'floating' | 'glow'
  hoverEffect?: 'none' | 'lift' | 'tilt' | 'glow'
}

const CardComponent = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, variant = 'default', hoverEffect = 'none', ...props }, ref) => {
    const baseClass = "rounded-xl relative overflow-hidden"
    
    const variants = {
      default: "glassmorphic",
      floating: "glassmorphic shadow-lg hover:shadow-xl transition-shadow duration-300",
      glow: "glassmorphic before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
    }

    const hoverEffects = {
      none: {},
      lift: {
        whileHover: { y: -5, transition: { duration: 0.2 } },
      },
      tilt: {
        whileHover: { rotate: 2, scale: 1.02, transition: { duration: 0.2 } },
      },
      glow: {
        whileHover: { 
          boxShadow: "0 0 20px rgba(255,255,255,0.2)",
          transition: { duration: 0.2 }
        }
      }
    }

    return (
      <motion.div
        ref={ref}
        className={cn(baseClass, variants[variant], className)}
        {...hoverEffects[hoverEffect]}
        {...props}
      >
        {/* Glass reflection effect */}
        <div className="absolute inset-0 glass-reflection" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    )
  }
)
CardComponent.displayName = "Card"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn("p-6 relative z-10", className)} 
    {...props} 
  />
))
CardContent.displayName = "CardContent"

export { CardComponent as Card, CardContent } 