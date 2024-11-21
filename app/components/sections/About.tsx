'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "../ui/ScrollAnimation"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-[10%] -right-[20%] w-[40%] h-[40%] rounded-full bg-blue-500/10 opacity-50" />
        <div className="absolute bottom-[10%] -left-[20%] w-[40%] h-[40%] rounded-full bg-purple-500/10 opacity-50" />
        <div className="absolute inset-0 bg-black/5 glass-noise" />
      </div>

      <div className="container relative w-full max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollAnimation>
          <Card className="glassmorphic-depth transition-transform duration-300 group hover:scale-[1.02]">
            <CardContent className="p-6 sm:p-8 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-4 sm:mb-6 neon-text text-center sm:text-left">
                  About Me
                </h2>
                <div className="max-w-3xl relative">
                  <p className="text-white/70 text-base sm:text-lg font-sans leading-relaxed">
                    I'm a passionate web developer with 5 years of experience in creating responsive and user-friendly websites. I
                    specialize in front-end development and have a keen eye for design. My goal is to craft digital experiences that
                    are not only visually stunning but also highly functional and accessible.
                  </p>
                  <div className="absolute -inset-x-4 inset-y-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                </div>
              </div>

              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full opacity-50" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full opacity-50" />
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.05] to-transparent rounded-full transform rotate-45 opacity-50" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-white/[0.05] to-transparent rounded-full transform -rotate-45 opacity-50" />
              
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  )
} 