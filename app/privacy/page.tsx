'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              
              <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
                <p className="text-white/70">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2>1. Information We Collect</h2>
                <p>
                  We only collect information that you voluntarily provide when contacting us through our website.
                </p>

                <h2>2. How We Use Your Information</h2>
                <p>
                  Any information we collect is used solely for the purpose of responding to your inquiries and improving our website's user experience.
                </p>

                <h2>3. Data Security</h2>
                <p>
                  We implement reasonable security measures to protect your personal information from unauthorized access or disclosure.
                </p>

                <h2>4. Cookies</h2>
                <p>
                  This website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.
                </p>

                <h2>5. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these sites.
                </p>

                <h2>6. Changes to This Policy</h2>
                <p>
                  We reserve the right to update this privacy policy at any time. Changes will be effective immediately upon posting to the website.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
} 