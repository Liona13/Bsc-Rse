'use client'

import { motion } from "framer-motion"
import { ArrowRight, Circle } from 'lucide-react'

interface DiagramNode {
  id: string
  label: string
  description?: string
}

interface DiagramConnection {
  from: string
  to: string
  label?: string
}

interface DiagramProps {
  nodes: DiagramNode[]
  connections: DiagramConnection[]
  title?: string
  className?: string
}

export function Diagram({ nodes, connections, title, className = "" }: DiagramProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`my-6 p-6 rounded-lg glassmorphic-depth ${className}`}
    >
      {title && (
        <h4 className="text-lg font-semibold text-white/90 mb-6">{title}</h4>
      )}
      <div className="flex flex-wrap gap-8 justify-center">
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="w-32 h-32 rounded-lg glassmorphic-frost flex items-center justify-center text-center p-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100 rounded-lg" />
              <div className="relative z-10">
                <Circle className="w-6 h-6 text-white/60 mx-auto mb-2" />
                <div className="text-sm font-medium text-white/90">{node.label}</div>
                {node.description && (
                  <div className="text-xs text-white/60 mt-1">{node.description}</div>
                )}
              </div>
            </div>

            {connections
              .filter(conn => conn.from === node.id)
              .map((conn, idx) => {
                const toNode = nodes.find(n => n.id === conn.to)
                if (!toNode) return null

                return (
                  <div
                    key={idx}
                    className="absolute top-1/2 left-full -translate-y-1/2 flex items-center"
                  >
                    <div className="w-16 h-px bg-gradient-to-r from-white/20 to-white/10 relative group">
                      <ArrowRight className="w-4 h-4 text-white/40 absolute -right-2 -top-2" />
                      {conn.label && (
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white/40 whitespace-nowrap">
                          {conn.label}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
} 