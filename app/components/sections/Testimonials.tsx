'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "../ui/ScrollAnimation"
import { motion } from "framer-motion"
import { Quote } from 'lucide-react'

interface Testimonial {
  content: string
  author: string
  role: string
  company: string
  image?: string
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      content: "One of the most talented developers I've worked with. Their ability to solve complex problems while maintaining clean, efficient code is remarkable.",
      author: "Sarah Johnson",
      role: "Engineering Manager",
      company: "TechCorp Inc.",
      image: "/testimonials/sarah.jpg"
    },
    {
      content: "Their technical expertise and leadership skills transformed our development process. They consistently delivered high-quality solutions ahead of schedule.",
      author: "Michael Chen",
      role: "CTO",
      company: "Digital Solutions LLC",
      image: "/testimonials/michael.jpg"
    },
    {
      content: "An exceptional team player with outstanding communication skills. Their contributions were instrumental in the success of our key projects.",
      author: "Emily Rodriguez",
      role: "Product Manager",
      company: "Innovation Labs",
      image: "/testimonials/emily.jpg"
    }
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] -right-[15%] w-[45%] h-[45%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[30%] -left-[15%] w-[45%] h-[45%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative">
        <ScrollAnimation>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-8 neon-text text-center sm:text-left">
            What People Say
          </h2>
        </ScrollAnimation>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index}>
              <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group h-full">
                <CardContent className="p-6 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <Quote className="w-8 h-8 text-white/20 mb-4" />
                    
                    <blockquote className="flex-1 mb-6">
                      <p className="text-white/70 text-sm italic leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </blockquote>

                    <div className="flex items-center gap-4">
                      {testimonial.image && (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full" />
                        </div>
                      )}
                      <div>
                        <div className="font-display font-medium text-white/90">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-white/50">
                          {testimonial.role} at {testimonial.company}
                        </div>
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