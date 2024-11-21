'use client'

import { motion, useScroll } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Header() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.header 
      className={`px-4 lg:px-6 h-16 flex items-center fixed w-full top-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'glassmorphic-darker backdrop-blur-xl' : 'glassmorphic backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/"
          className="text-lg font-bold text-white hover:text-white/80 transition-colors"
        >
          Logo
        </Link>

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  )
} 