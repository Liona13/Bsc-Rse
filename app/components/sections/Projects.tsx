'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "../ui/ScrollAnimation"
import { motion } from "framer-motion"
import { Github, ExternalLink, Folder, Star, GitFork } from 'lucide-react'
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      image: "/projects/ecommerce.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      stats: {
        stars: 120,
        forks: 35
      },
      featured: true
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered application that generates SEO-optimized content using OpenAI's GPT-3 API.",
      image: "/projects/ai-generator.png",
      technologies: ["React", "Node.js", "OpenAI API", "TailwindCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      stats: {
        stars: 89,
        forks: 24
      },
      featured: true
    },
    {
      title: "Task Management System",
      description: "A collaborative task management system with real-time updates and team collaboration features.",
      image: "/projects/task-manager.png",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      stats: {
        stars: 67,
        forks: 18
      },
      featured: true
    }
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] -right-[15%] w-[45%] h-[45%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[30%] -left-[15%] w-[45%] h-[45%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative">
        <ScrollAnimation>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-8 neon-text text-center sm:text-left">
            Featured Projects
          </h2>
        </ScrollAnimation>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollAnimation key={index}>
              <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group h-full">
                <CardContent className="p-6 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
                  
                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <Folder className="w-6 h-6 text-white/80" />
                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <Link 
                            href={project.githubUrl}
                            target="_blank"
                            className="text-white/60 hover:text-white transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </Link>
                        )}
                        {project.liveUrl && (
                          <Link 
                            href={project.liveUrl}
                            target="_blank"
                            className="text-white/60 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-white/90 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="space-y-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.stats && (
                        <div className="flex items-center gap-4 text-white/60 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            <span>{project.stats.forks}</span>
                          </div>
                        </div>
                      )}
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