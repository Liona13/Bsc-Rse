'use client'

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import mermaid from "mermaid"

interface MermaidDiagramProps {
  definition: string
  className?: string
}

export function MermaidDiagram({ definition, className = "" }: MermaidDiagramProps) {
  const [svg, setSvg] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const uniqueId = useRef(`mermaid-${Math.random().toString(36).substr(2, 9)}`)

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#3b82f6',
        primaryTextColor: '#fff',
        primaryBorderColor: '#60a5fa',
        lineColor: '#94a3b8',
        secondaryColor: '#9333ea',
        tertiaryColor: '#1e293b'
      }
    })

    const renderDiagram = async () => {
      try {
        const { svg } = await mermaid.render(uniqueId.current, definition)
        setSvg(svg)
        setError(null)
      } catch (err) {
        console.error('Error rendering Mermaid diagram:', err)
        setError('Failed to render diagram')
      }
    }

    renderDiagram()
  }, [definition])

  if (error) {
    return (
      <div className="p-4 rounded-lg bg-red-500/10 text-red-400 text-sm">
        {error}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`my-6 p-4 rounded-lg glassmorphic-depth ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
} 