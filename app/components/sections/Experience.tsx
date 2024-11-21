'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "../ui/ScrollAnimation"
import { motion } from "framer-motion"
import { Calendar, Building2, Award } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      period: "2020 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced application load time by 40% through optimization",
        "Mentored 5 junior developers and established code review practices",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2018 - 2020",
      location: "New York, NY",
      type: "Full-time",
      achievements: [
        "Developed 20+ responsive web applications for clients",
        "Increased test coverage from 40% to 90%",
        "Optimized database queries reducing response time by 50%",
        "Collaborated with UX team to improve user satisfaction by 35%"
      ],
      technologies: ["JavaScript", "React", "MongoDB", "Express", "Redux"]
    },
    {
      title: "Frontend Developer",
      company: "StartUp Innovation",
      period: "2017 - 2018",
      location: "Remote",
      type: "Contract",
      achievements: [
        "Built interactive dashboards using React and D3.js",
        "Implemented responsive designs for 10+ client websites",
        "Reduced bundle size by 45% through code splitting",
        "Integrated third-party APIs and payment gateways"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "D3.js"]
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] -right-[15%] w-[45%] h-[45%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[30%] -left-[15%] w-[45%] h-[45%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative">
        <ScrollAnimation>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-8 neon-text text-center sm:text-left">
            Professional Experience
          </h2>
        </ScrollAnimation>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollAnimation key={index}>
              <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
                  
                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-semibold text-white/90">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2 text-white/70">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-white/40">•</span>
                          <span>{exp.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                        <span className="text-white/40">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-display text-sm font-medium text-white/80 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-white/70 text-sm leading-relaxed"
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
} 