'use client'

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-xl glassmorphic-frost crystal-edge crystal-highlight group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      <div className="absolute inset-0 rounded-xl crystal-shimmer" />
      <div className="relative z-10">
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-white/90" />
        ) : (
          <Moon className="w-5 h-5 text-white/90" />
        )}
      </div>
    </motion.button>
  )
} 