'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/ui/ScrollAnimation"
import { motion } from "framer-motion"

export function Experience() {
  const experiences = {
    senior: {
      title: "Senior Web Developer",
      company: "TechCorp Inc.",
      period: "2020 - Present",
      responsibilities: [
        "Led a team of 5 developers in creating responsive web applications",
        "Implemented new frontend architecture, improving load times by 40%",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    junior: {
      title: "Web Developer",
      company: "Digital Solutions LLC",
      period: "2018 - 2020",
      responsibilities: [
        "Developed and maintained client websites using HTML, CSS, and JavaScript",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Optimized websites for maximum speed and scalability",
      ],
    },
  }

  const cardVariants = {
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

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  }

  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] -right-[15%] w-[45%] h-[45%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[30%] -left-[15%] w-[45%] h-[45%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
        <div className="absolute inset-0 loading-rotate opacity-[0.02]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative">
        <ScrollAnimation>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-8 neon-text text-center sm:text-left">
            Experience
          </h2>
        </ScrollAnimation>
        <div className="space-y-6">
          {Object.entries(experiences).map(([key, exp], index) => (
            <ScrollAnimation key={key}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group">
                  <CardContent className="p-5 sm:p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
                    
                    <div className="relative z-10 space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <h3 className="font-display text-lg sm:text-xl font-semibold text-white/90 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-white/70 font-sans text-sm">
                          {exp.company} | {exp.period}
                        </p>
                      </motion.div>

                      <motion.ul 
                        className="list-disc list-inside text-white/70 font-sans space-y-2 text-sm"
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {exp.responsibilities.map((responsibility, idx) => (
                          <motion.li 
                            key={idx} 
                            className="leading-relaxed relative pl-2"
                            variants={itemVariants}
                          >
                            <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-white/30" />
                            {responsibility}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-[50px] animate-pulse-slow" />
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-[50px] animate-pulse-slow" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.05] to-transparent rounded-full transform rotate-45 opacity-50" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-white/[0.05] to-transparent rounded-full transform -rotate-45 opacity-50" />
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
} 