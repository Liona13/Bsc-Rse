'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "../ui/ScrollAnimation"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award, ExternalLink } from 'lucide-react'
import Link from "next/link"

export function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2015 - 2017",
      location: "Stanford, CA",
      gpa: "3.9/4.0",
      achievements: [
        "Specialization in Artificial Intelligence and Machine Learning",
        "Graduate Research Assistant in Human-Computer Interaction Lab",
        "Published 2 papers in international conferences"
      ],
      courses: [
        "Advanced Algorithms",
        "Machine Learning",
        "Distributed Systems",
        "Computer Vision"
      ],
      link: "https://stanford.edu"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "MIT",
      period: "2011 - 2015",
      location: "Cambridge, MA",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for all semesters",
        "Led the university's Web Development Club",
        "Won first place in Annual Hackathon"
      ],
      courses: [
        "Data Structures",
        "Operating Systems",
        "Database Management",
        "Web Development"
      ],
      link: "https://mit.edu"
    }
  ]

  return (
    <section id="education" className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] -right-[15%] w-[45%] h-[45%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[30%] -left-[15%] w-[45%] h-[45%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative">
        <ScrollAnimation>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-8 neon-text text-center sm:text-left">
            Education
          </h2>
        </ScrollAnimation>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <ScrollAnimation key={index}>
              <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
                  
                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-white/80" />
                          <h3 className="font-display text-xl sm:text-2xl font-semibold text-white/90">
                            {edu.degree}
                          </h3>
                        </div>
                        <Link 
                          href={edu.link}
                          target="_blank"
                          className="flex items-center gap-2 text-white/70 hover:text-white/90 transition-colors group/link"
                        >
                          <span className="font-medium">{edu.school}</span>
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </Link>
                      </div>
                      <div className="space-y-2 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4">
                      <h4 className="font-display text-sm font-medium text-white/80">
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        {edu.achievements.map((achievement, idx) => (
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

                    {/* Relevant Courses */}
                    <div>
                      <h4 className="font-display text-sm font-medium text-white/80 mb-3">
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
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