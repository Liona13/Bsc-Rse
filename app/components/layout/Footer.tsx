'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import { Github, Linkedin, Twitter } from "@/components/icons"

const footerLinks = [
  { text: 'Terms of Service', href: '/terms' },
  { text: 'Privacy Policy', href: '/privacy' },
] as const

const socialLinks = [
  { text: 'GitHub', href: siteConfig.links.github, icon: Github },
  { text: 'LinkedIn', href: siteConfig.links.linkedin, icon: Linkedin },
  { text: 'Twitter', href: siteConfig.links.twitter, icon: Twitter }
] as const

export function Footer() {
  const currentYear = new Date().getFullYear()

  const linkVariants = {
    initial: { opacity: 0.7, y: 0 },
    hover: { 
      opacity: 1, 
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="w-full py-6 relative">
      {/* Enhanced Glassmorphic background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute inset-0 glassmorphic-darker backdrop-blur-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute inset-0 glass-noise opacity-20" />
          <div className="absolute inset-0 loading-rotate opacity-[0.02]">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
          </div>
        </div>
      </div>

      <motion.div 
        className="container relative z-10 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs text-white/50 font-sans relative group">
              © {currentYear} {siteConfig.name}. All rights reserved.
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </p>
          </motion.div>
          
          <nav className="flex gap-4 sm:gap-6">
            {footerLinks.map((link, index) => (
              <motion.div 
                key={link.text}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                custom={index}
              >
                <Link 
                  className="text-xs text-white/50 hover:text-white transition-colors font-sans relative group"
                  href={link.href}
                >
                  {link.text}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            {socialLinks.map((link, index) => (
              <motion.div key={link.text} variants={linkVariants} initial="initial" whileHover="hover">
                <Link 
                  className="text-xs text-white/50 hover:text-white transition-colors font-sans flex items-center gap-2"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-4 h-4" />
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </motion.div>
    </footer>
  )
} 