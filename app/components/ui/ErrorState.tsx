'use client'

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"
import { Card } from "./card"

interface ErrorStateProps {
  message: string
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <Card className="glassmorphic-depth p-12">
      <motion.div
        className="flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <AlertCircle className="w-8 h-8 text-red-400" />
        <p className="text-red-400">{message}</p>
      </motion.div>
    </Card>
  )
} 