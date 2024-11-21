'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] -left-[20%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] glass-noise" />
      </div>

      {/* Content */}
      <main className="relative z-10 pt-16 pb-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back Button */}
            <Link 
              href="/"
              className="inline-flex items-center text-sm text-white/50 hover:text-white mb-8 transition-colors"
            >
              ← Back to Home
            </Link>

            <Card className="glassmorphic-depth p-6 sm:p-8 space-y-6">
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight neon-text">
                Terms of Service
              </h1>
              
              <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
                <p className="text-white/70">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2>1. Agreement to Terms</h2>
                <p>
                  By accessing and using this website, you agree to be bound by these Terms of Service.
                </p>

                <h2>2. Use License</h2>
                <p>
                  Permission is granted to temporarily view the materials (information or software) on this website for personal, non-commercial transitory viewing only.
                </p>

                <h2>3. Disclaimer</h2>
                <p>
                  The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2>4. Limitations</h2>
                <p>
                  In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
                </p>

                <h2>5. Revisions</h2>
                <p>
                  We may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
} 