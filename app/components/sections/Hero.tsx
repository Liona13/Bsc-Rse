'use client'

import { motion } from "framer-motion"
import { ScrollAnimation } from "../ui/ScrollAnimation"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Download } from 'lucide-react'
import { PDFPreview } from "../ui/PDFPreview"
import { downloadResume } from "../ui/PDFResume"
import { ResumePreview } from "../ui/ResumePreview"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] -right-[20%] w-[70%] h-[70%] rounded-full bg-blue-500/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] -left-[20%] w-[70%] h-[70%] rounded-full bg-purple-500/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
        <div className="absolute inset-0 loading-rotate opacity-[0.02]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-500 group">
            <CardContent className="p-8 sm:p-12 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10 text-center space-y-8">
                <motion.div variants={itemVariants} className="space-y-4">
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                    <span className="neon-text">John Doe</span>
                  </h1>
                  <div className="space-y-2">
                    <p className="text-2xl sm:text-3xl text-white/90 font-display">
                      Senior Software Engineer
                    </p>
                    <p className="text-lg text-white/70 font-sans">
                      Full Stack Developer • UI/UX Enthusiast • Tech Lead
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
                  <Link href="#contact">
                    <motion.button
                      className="px-8 py-3 rounded-lg glassmorphic-frost text-white/90 hover:text-white transition-colors relative group overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Contact Me</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 glass-shimmer" />
                    </motion.button>
                  </Link>
                  
                  <ResumePreview />
                </motion.div>

                {/* Quick Stats */}
                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
                >
                  {[
                    { label: "Years Experience", value: "5+" },
                    { label: "Projects Completed", value: "50+" },
                    { label: "Companies Worked", value: "4+" },
                    { label: "Satisfied Clients", value: "30+" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white/90">{stat.value}</div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Enhanced Decorative Gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full transform rotate-45 opacity-50" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full transform -rotate-45 opacity-50" />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 