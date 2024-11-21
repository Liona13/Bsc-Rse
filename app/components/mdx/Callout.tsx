'use client'

import { motion } from "framer-motion"
import { Info, AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

type CalloutType = 'info' | 'warning' | 'error' | 'success'

interface CalloutProps {
  children: React.ReactNode
  type?: CalloutType
  title?: string
  className?: string
}

const variants = {
  info: {
    icon: Info,
    className: "bg-blue-500/10 border-blue-500/20",
    titleColor: "text-blue-400",
    iconColor: "text-blue-400"
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-yellow-500/10 border-yellow-500/20",
    titleColor: "text-yellow-400",
    iconColor: "text-yellow-400"
  },
  error: {
    icon: AlertCircle,
    className: "bg-red-500/10 border-red-500/20",
    titleColor: "text-red-400",
    iconColor: "text-red-400"
  },
  success: {
    icon: CheckCircle,
    className: "bg-green-500/10 border-green-500/20",
    titleColor: "text-green-400",
    iconColor: "text-green-400"
  }
}

export function Callout({ children, type = 'info', title, className = "" }: CalloutProps) {
  const variant = variants[type]
  const Icon = variant.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-4 rounded-lg border ${variant.className} ${className} my-4`}
    >
      <div className="flex gap-3">
        <Icon className={`w-5 h-5 mt-1 ${variant.iconColor}`} />
        <div className="flex-1">
          {title && (
            <h4 className={`font-medium mb-2 ${variant.titleColor}`}>
              {title}
            </h4>
          )}
          <div className="text-white/70 text-sm">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  )
} 