'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function Hero() {
  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: "blur(8px)" 
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <motion.section 
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 sm:py-20 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-blue-500/20 blur-[100px] animate-pulse-slow" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-purple-500/20 blur-[100px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] glass-noise" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col items-center space-y-8 text-center">
          <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group w-full">
            <CardContent className="p-8 sm:p-10 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <motion.h1 
                  variants={textVariants}
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                >
                  <span className="neon-text">Creative Developer</span>
                </motion.h1>
                <motion.p 
                  variants={textVariants}
                  className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto font-sans"
                >
                  Crafting digital experiences with modern web technologies
                </motion.p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-[50px] animate-pulse-slow" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-[50px] animate-pulse-slow" />
            </CardContent>
          </Card>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md mx-auto">
            <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 flex-1 group">
              <CardContent className="p-3 sm:p-4 relative">
                <Link 
                  href="#contact" 
                  className="flex items-center justify-center gap-2 text-white/90 hover:text-white font-display text-base sm:text-lg"
                >
                  Contact Me
                </Link>
              </CardContent>
            </Card>

            <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 flex-1 group">
              <CardContent className="p-3 sm:p-4 relative">
                <Link 
                  href="/resume.pdf" 
                  className="flex items-center justify-center gap-2 text-white/90 hover:text-white font-display text-base sm:text-lg"
                >
                  Download Resume
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  )
} 