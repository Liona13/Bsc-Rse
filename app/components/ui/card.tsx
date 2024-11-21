'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'floating' | 'glow' | 'depth'
  hoverEffect?: 'none' | 'lift' | 'tilt' | 'glow'
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = 'default', hoverEffect = 'lift', ...props }, ref) => {
    const variants = {
      default: "glassmorphic",
      floating: "glassmorphic-floating",
      glow: "glassmorphic-glow",
      depth: "glassmorphic-depth"
    }

    const hoverVariants = {
      none: {},
      lift: {
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      },
      tilt: {
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.2 }
      },
      glow: {
        scale: 1.02,
        boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
        transition: { duration: 0.2 }
      }
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-xl relative group",
          variants[variant],
          className
        )}
        whileHover={hoverVariants[hoverEffect]}
        {...props}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        <div className="absolute inset-0 rounded-xl glass-shimmer opacity-0 group-hover:opacity-100" />
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-xl" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    )
  }
)
Card.displayName = "Card"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn(
      "p-6 relative z-10",
      className
    )} 
    {...props} 
  />
))
CardContent.displayName = "CardContent"

export { Card, CardContent } 