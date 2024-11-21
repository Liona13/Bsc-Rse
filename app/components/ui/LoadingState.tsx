'use client'

import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { Card } from "./card"

export function LoadingState() {
  return (
    <Card className="glassmorphic-depth p-12">
      <motion.div
        className="flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Loader2 className="w-8 h-8 text-white/60 animate-spin" />
        <p className="text-white/60">Loading content...</p>
      </motion.div>
    </Card>
  )
} 