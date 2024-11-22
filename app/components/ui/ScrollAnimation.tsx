'use client'

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  key?: string | number;
}

export function ScrollAnimation({ children, className = "", delay = 0, key }: ScrollAnimationProps) {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 