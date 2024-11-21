'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ScrollAnimation } from "@/components/ui/ScrollAnimation"

export function Skills() {
  const skillCards = [
    { 
      title: "Frontend Development",
      description: "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS",
      skills: [
        { name: "HTML/CSS", proficiency: 90 },
        { name: "JavaScript", proficiency: 85 },
        { name: "React", proficiency: 80 },
        { name: "Next.js", proficiency: 75 },
      ]
    },
    { 
      title: "Backend Development",
      description: "Node.js, Express, MongoDB, PostgreSQL, GraphQL",
      skills: [
        { name: "Node.js", proficiency: 85 },
        { name: "Express", proficiency: 80 },
        { name: "MongoDB", proficiency: 75 },
        { name: "PostgreSQL", proficiency: 70 },
      ]
    },
    { 
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Sketch, User Research, Prototyping",
      skills: [
        { name: "Figma", proficiency: 85 },
        { name: "Adobe XD", proficiency: 80 },
        { name: "User Research", proficiency: 75 },
        { name: "Prototyping", proficiency: 80 },
      ]
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative">
        <ScrollAnimation>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-8 neon-text text-center sm:text-left">
            Skills
          </h2>
        </ScrollAnimation>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {skillCards.map((card, index) => (
            <ScrollAnimation key={index}>
              <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group h-full">
                <CardContent className="p-5 sm:p-6 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
                  
                  <div className="relative z-10 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-lg sm:text-xl mb-3 text-white/90">
                      {card.title}
                    </h3>
                    <p className="text-white/70 font-sans text-sm mb-6">
                      {card.description}
                    </p>
                    <div className="space-y-3 mt-auto">
                      {card.skills.map((skill, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex justify-between items-center">
                            <span className="text-white/90 font-sans text-sm">{skill.name}</span>
                            <span className="text-white/90 font-sans text-sm font-medium">{skill.proficiency}%</span>
                          </div>
                          <div className="h-1.5 glassmorphic-darker rounded-full overflow-hidden backdrop-blur-sm">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
                              className="h-full rounded-full"
                              style={{ 
                                background: `linear-gradient(90deg, 
                                  rgba(255, 255, 255, 0.07) 0%, 
                                  rgba(255, 255, 255, 0.13) 50%, 
                                  rgba(255, 255, 255, 0.07) 100%
                                )`,
                                boxShadow: `
                                  inset 0 0.5px 1px rgba(255, 255, 255, 0.15),
                                  0 0.5px 2px rgba(0, 0, 0, 0.1)
                                `
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-[50px] animate-pulse-slow" />
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-[50px] animate-pulse-slow" />
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
} 