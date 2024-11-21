'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { About } from "./components/sections/About"
import { Contact } from "./components/sections/Contact"
import { Experience } from "./components/sections/Experience"
import { Hero } from "./components/sections/Hero"
import { Skills } from "./components/sections/Skills"
import { ScrollProgress } from "./components/ui/ScrollProgress"
import { ScrollToTop } from "./components/ui/ScrollToTop"
import { useRef } from "react"
import { Education } from "./components/sections/Education"
import { Projects } from "./components/sections/Projects"
import { Certifications } from "./components/sections/Certifications"
import { Testimonials } from "./components/sections/Testimonials"
import { Timeline } from "./components/sections/Timeline"
import { Blog } from "./components/sections/Blog"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      
      {/* Background Effects */}
      <motion.div 
        className="fixed inset-0 overflow-hidden pointer-events-none"
        style={{ y: backgroundY, opacity: backgroundOpacity }}
      >
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] -left-[20%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
        <div className="absolute inset-0 loading-rotate opacity-[0.02]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative min-h-screen">
        <Header />
        <main className="pt-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24 py-16">
              <Hero />
              <About />
              <Timeline />
              <Education />
              <Experience />
              <Skills />
              <Projects />
              <Blog />
              <Certifications />
              <Testimonials />
              <Contact />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}