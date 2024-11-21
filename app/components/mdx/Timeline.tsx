'use client'

import { motion } from "framer-motion"
import { Calendar, MapPin } from 'lucide-react'

interface TimelineEvent {
  date: string
  title: string
  description: string
  location?: string
}

interface TimelineProps {
  events: TimelineEvent[]
  className?: string
}

export function Timeline({ events, className = "" }: TimelineProps) {
  return (
    <div className={`space-y-8 my-6 relative ${className}`}>
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent" />

      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-12"
        >
          {/* Timeline Node */}
          <div className="absolute left-0 w-8 h-8 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500/50 to-purple-500/50" />
          </div>

          <div className="p-4 rounded-lg glassmorphic-depth">
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              {event.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>

            <h3 className="text-lg font-semibold text-white/90 mb-2">
              {event.title}
            </h3>
            <p className="text-white/70 text-sm">
              {event.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 