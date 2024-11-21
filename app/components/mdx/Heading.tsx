'use client'

import { motion } from "framer-motion"

interface HeadingProps {
  as: 'h1' | 'h2' | 'h3'
  children: React.ReactNode
  className?: string
}

const styles = {
  h1: "text-3xl font-bold mb-6 text-white/90",
  h2: "text-2xl font-semibold mt-8 mb-4 text-white/90",
  h3: "text-xl font-semibold mt-6 mb-3 text-white/90"
}

export function Heading({ as: Component, children, className = "" }: HeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Component className={`${styles[Component]} ${className}`}>
        {children}
      </Component>
    </motion.div>
  )
} 