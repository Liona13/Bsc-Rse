'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

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
      {/* Enhanced Glassmorphic background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent" />
        <div className="absolute inset-0 glass-noise opacity-20" />
        <div className="absolute inset-0 glass-shimmer opacity-50" />
      </div>
      
      {/* Logo with enhanced effects */}
      <Link 
        className="flex items-center justify-center relative z-10" 
        href="#home"
        onClick={(e) => scrollToSection(e, 'home')}
      >
        <motion.div 
          className="relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl group-hover:bg-blue-500/30 transition-colors duration-300" />
          <div className="absolute inset-0 rounded-full animate-pulse-slow" />
          <span className="relative h-8 w-8 rounded-full glassmorphic-glow flex items-center justify-center text-white text-lg font-display font-bold">
            YN
          </span>
        </motion.div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="ml-auto hidden lg:flex gap-6 relative z-10">
        {navItems.map(({ id, label }) => (
          <motion.div
            key={id}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              className={`text-sm font-medium transition-colors font-sans cursor-pointer relative group px-1 ${
                activeSection === id ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
            >
              {label}
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-blue-500/0"
                initial={false}
                animate={{
                  scaleX: activeSection === id ? 1 : 0,
                  opacity: activeSection === id ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
              />
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/70 to-white/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <motion.button 
        className="ml-auto lg:hidden relative z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isMenuOpen ? "close" : "menu"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="text-white/70 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 right-0 glassmorphic-darker backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col items-center py-4 gap-4">
              {navItems.map(({ id, label }, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    className={`text-sm font-medium transition-colors font-sans relative group px-4 py-2 ${
                      activeSection === id ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                  >
                    {label}
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-blue-500/0"
                      initial={false}
                      animate={{
                        scaleX: activeSection === id ? 1 : 0,
                        opacity: activeSection === id ? 1 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 