'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Link from "next/link"
import { ScrollAnimation } from "../ui/ScrollAnimation"
import { motion } from "framer-motion"

export function Contact() {
  const contactItems = [
    { href: "mailto:your.email@example.com", icon: Mail, text: "Email", color: "from-blue-500/20 to-blue-600/20" },
    { href: "tel:+1234567890", icon: Phone, text: "Phone", color: "from-green-500/20 to-green-600/20" },
    { href: "https://linkedin.com/in/yourprofile", icon: Linkedin, text: "LinkedIn", color: "from-blue-600/20 to-blue-700/20" },
    { href: "https://github.com/yourusername", icon: Github, text: "GitHub", color: "from-purple-500/20 to-purple-600/20" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4
      }
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[40%] -right-[10%] w-[35%] h-[35%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[40%] -left-[10%] w-[35%] h-[35%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
        <div className="absolute inset-0 loading-rotate opacity-[0.02]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative">
        <ScrollAnimation>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-8 neon-text text-center sm:text-left">
            Contact Me
          </h2>
        </ScrollAnimation>
        <motion.div 
          className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {contactItems.map((item, index) => (
            <motion.div key={item.text} variants={itemVariants}>
              <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group">
                <CardContent className="p-4 sm:p-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                  
                  <Link 
                    href={item.href}
                    className="flex items-center justify-center gap-3 text-white/90 hover:text-white font-display group relative z-10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-current opacity-20 blur-md" />
                      <item.icon className="h-5 w-5 relative z-10" />
                    </motion.div>
                    <span className="text-base relative">
                      {item.text}
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/50 to-white/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                  </Link>

                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-[50px] animate-pulse-slow" />
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-[50px] animate-pulse-slow" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.05] to-transparent rounded-full transform rotate-45 opacity-50" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-white/[0.05] to-transparent rounded-full transform -rotate-45 opacity-50" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 