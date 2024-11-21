'use client'

import { motion } from "framer-motion"
import { Menu, X } from 'lucide-react'

interface NavButtonProps {
  isOpen: boolean
  onClick: () => void
}

export function NavButton({ isOpen, onClick }: NavButtonProps) {
  return (
    <motion.button 
      className="relative p-2 rounded-lg glassmorphic-frost crystal-edge crystal-highlight group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      {/* Crystal effects */}
      <div className="absolute inset-0 rounded-lg crystal-shimmer" />
      <div className="absolute inset-0 rounded-lg glass-shimmer" />
      
      {/* Icon container */}
      <div className="relative z-10">
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
          ) : (
            <Menu className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
          )}
        </motion.div>
      </div>

      {/* Breathing glow effect */}
      <div className="absolute inset-0 rounded-lg breathing-glow" />
    </motion.button>
  )
} 