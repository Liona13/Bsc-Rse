'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ScrollAnimation } from "../ui/ScrollAnimation"
import { Code2, Palette, Database, Cloud, Brain, Terminal } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React/Next.js", level: "Expert", proficiency: 95 },
        { name: "TypeScript", level: "Expert", proficiency: 90 },
        { name: "Tailwind CSS", level: "Expert", proficiency: 95 },
        { name: "HTML5/CSS3", level: "Expert", proficiency: 95 },
        { name: "Redux/Zustand", level: "Advanced", proficiency: 85 },
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: "Expert", proficiency: 90 },
        { name: "Python", level: "Advanced", proficiency: 85 },
        { name: "PostgreSQL", level: "Advanced", proficiency: 85 },
        { name: "MongoDB", level: "Advanced", proficiency: 80 },
        { name: "GraphQL", level: "Advanced", proficiency: 80 },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: [
        { name: "AWS", level: "Advanced", proficiency: 85 },
        { name: "Docker", level: "Advanced", proficiency: 85 },
        { name: "CI/CD", level: "Advanced", proficiency: 80 },
        { name: "Kubernetes", level: "Intermediate", proficiency: 75 },
        { name: "Linux", level: "Advanced", proficiency: 85 },
      ]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: [
        { name: "Figma", level: "Advanced", proficiency: 85 },
        { name: "Adobe XD", level: "Advanced", proficiency: 80 },
        { name: "Prototyping", level: "Advanced", proficiency: 85 },
        { name: "Design Systems", level: "Expert", proficiency: 90 },
        { name: "User Research", level: "Advanced", proficiency: 80 },
      ]
    },
    {
      title: "Programming Concepts",
      icon: Brain,
      skills: [
        { name: "Data Structures", level: "Expert", proficiency: 90 },
        { name: "Algorithms", level: "Expert", proficiency: 90 },
        { name: "System Design", level: "Advanced", proficiency: 85 },
        { name: "Design Patterns", level: "Advanced", proficiency: 85 },
        { name: "Testing", level: "Expert", proficiency: 90 },
      ]
    },
    {
      title: "Tools & Others",
      icon: Terminal,
      skills: [
        { name: "Git/GitHub", level: "Expert", proficiency: 95 },
        { name: "VS Code", level: "Expert", proficiency: 95 },
        { name: "Jira/Trello", level: "Advanced", proficiency: 85 },
        { name: "Postman", level: "Expert", proficiency: 90 },
        { name: "Terminal", level: "Expert", proficiency: 90 },
      ]
    }
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
            Technical Skills
          </h2>
        </ScrollAnimation>

        <div className="grid gap-6 md:grid-cols-2 auto-rows-fr">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={index}>
              <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group h-full">
                <CardContent className="p-6 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3">
                      <category.icon className="w-5 h-5 text-white/80" />
                      <h3 className="font-display text-lg font-semibold text-white/90">
                        {category.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white/80 text-sm">{skill.name}</span>
                            <span className="text-white/60 text-xs">{skill.level}</span>
                          </div>
                          <div className="h-1.5 glassmorphic-darker rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
                              className="h-full rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Elements */}
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