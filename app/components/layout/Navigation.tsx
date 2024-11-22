'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const pathname = usePathname()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle anchor links
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
  }

  return (
    <nav className="hidden md:flex gap-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className={`relative text-sm transition-colors ${
              isActive ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            {item.label}
            {isActive && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30
                }}
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
} 