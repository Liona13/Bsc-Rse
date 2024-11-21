'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "../ui/ScrollAnimation"
import { motion } from "framer-motion"
import { Award, Calendar, ExternalLink, Medal, Trophy, CheckCircle2, Cloud } from 'lucide-react'
import Link from "next/link"

interface CertificationType {
  title: string
  issuer: string
  date: string
  credentialId: string
  verifyLink: string
  type: 'certification'
}

interface AwardType {
  title: string
  issuer: string
  date: string
  description: string
  type: 'award'
}

type Achievement = CertificationType | AwardType

export function Certifications() {
  const certifications: CertificationType[] = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456",
      verifyLink: "https://aws.amazon.com/verify",
      type: "certification"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-789012",
      verifyLink: "https://google.com/verify",
      type: "certification"
    }
  ]

  const awards: AwardType[] = [
    {
      title: "Best Technical Innovation Award",
      issuer: "TechCorp Inc.",
      date: "2023",
      description: "Awarded for developing an AI-powered code review system that improved team productivity by 40%",
      type: "award"
    },
    {
      title: "Outstanding Leadership Award",
      issuer: "Digital Solutions LLC",
      date: "2022",
      description: "Recognized for exceptional team leadership and project management skills",
      type: "award"
    }
  ]

  const achievements: Achievement[] = [...certifications, ...awards]

  return (
    <section id="certifications" className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] -right-[15%] w-[45%] h-[45%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[30%] -left-[15%] w-[45%] h-[45%] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative">
        <ScrollAnimation>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-8 neon-text text-center sm:text-left">
            Certifications & Awards
          </h2>
        </ScrollAnimation>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => (
            <ScrollAnimation key={index}>
              <Card className="glassmorphic-depth hover:scale-[1.02] transition-all duration-300 group h-full">
                <CardContent className="p-6 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
                  
                  <div className="relative z-10 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        {item.type === 'certification' ? (
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-1" />
                        ) : (
                          <Trophy className="w-5 h-5 text-yellow-400 mt-1" />
                        )}
                        <div>
                          <h3 className="font-display text-lg font-semibold text-white/90">
                            {item.title}
                          </h3>
                          <p className="text-white/60 text-sm mt-1">
                            {item.issuer}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* Content */}
                    {item.type === 'certification' ? (
                      <div className="space-y-3">
                        <p className="text-white/70 text-sm">
                          Credential ID: {item.credentialId}
                        </p>
                        <Link 
                          href={item.verifyLink}
                          target="_blank"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                        >
                          Verify Certificate
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    ) : (
                      <p className="text-white/70 text-sm">
                        {item.description}
                      </p>
                    )}
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