'use client'

import { ScrollAnimation } from "../ui/ScrollAnimation"
import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react'

interface TimelineEvent {
  date: string
  title: string
  subtitle: string
  description: string
  location: string
  type: 'work' | 'education'
  icon: typeof Briefcase | typeof GraduationCap
}

export function Timeline() {
  const events: TimelineEvent[] = [
    {
      date: "2020 - Present",
      title: "Senior Software Engineer",
      subtitle: "TechCorp Inc.",
      description: "Leading development of enterprise-scale applications and mentoring junior developers.",
      location: "San Francisco, CA",
      type: 'work',
      icon: Briefcase
    },
    {
      date: "2018 - 2020",
      title: "Full Stack Developer",
      subtitle: "Digital Solutions LLC",
      description: "Developed and maintained multiple client applications using modern web technologies.",
      location: "New York, NY",
      type: 'work',
      icon: Briefcase
    },
    {
      date: "2015 - 2017",
      title: "Master of Science in Computer Science",
      subtitle: "Stanford University",
      description: "Specialized in AI and Machine Learning with research focus on Computer Vision.",
      location: "Stanford, CA",
      type: 'education',
      icon: GraduationCap
    },
    {
      date: "2011 - 2015",
      title: "Bachelor of Science in Software Engineering",
      subtitle: "MIT",
      description: "Graduated with honors, led Web Development Club, and won Annual Hackathon.",
      location: "Cambridge, MA",
      type: 'education',
      icon: GraduationCap
    }
  ]

  return (
    <section id="timeline" className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] -right-[15%] w-[45%] h-[45%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[30%] -left-[15%] w-[45%] h-[45%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative">
        <ScrollAnimation>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-12 neon-text text-center sm:text-left">
            Career Timeline
          </h2>
        </ScrollAnimation>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 sm:left-1/2 h-full w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <ScrollAnimation key={index}>
                <div className={`relative flex flex-col sm:flex-row gap-8 ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}>
                  {/* Timeline Node */}
                  <div className="absolute left-0 sm:left-1/2 w-8 h-8 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-full h-full rounded-full glassmorphic-frost flex items-center justify-center group">
                      <event.icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'sm:pr-16' : 'sm:pl-16'}`}>
                    <div className="p-6 rounded-xl glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />

                      <div className="relative z-10 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                          <span className="text-white/40">•</span>
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-white/90">
                            {event.title}
                          </h3>
                          <p className="text-white/70">{event.subtitle}</p>
                        </div>

                        <p className="text-sm text-white/60">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 