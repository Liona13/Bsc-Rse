'use client'

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { Line } from 'lucide-react'

interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    color?: string
  }[]
}

interface ChartProps {
  data: ChartData
  title?: string
  type?: 'line' | 'bar'
  className?: string
}

export function Chart({ data, title, type = 'line', className = "" }: ChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const padding = 40
    const width = canvas.width - padding * 2
    const height = canvas.height - padding * 2

    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
    ctx.lineWidth = 1

    // Vertical grid lines
    for (let i = 0; i <= data.labels.length; i++) {
      const x = padding + (width * i) / data.labels.length
      ctx.beginPath()
      ctx.moveTo(x, padding)
      ctx.lineTo(x, height + padding)
      ctx.stroke()
    }

    // Horizontal grid lines
    const maxValue = Math.max(...data.datasets.flatMap(d => d.data))
    for (let i = 0; i <= 5; i++) {
      const y = padding + (height * i) / 5
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width + padding, y)
      ctx.stroke()
    }

    // Draw data
    data.datasets.forEach((dataset, datasetIndex) => {
      ctx.strokeStyle = dataset.color || 'rgba(59, 130, 246, 0.8)'
      ctx.lineWidth = 2
      ctx.beginPath()

      dataset.data.forEach((value, index) => {
        const x = padding + (width * index) / (data.labels.length - 1)
        const y = padding + height - (height * value) / maxValue

        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.stroke()

      // Draw points
      ctx.fillStyle = dataset.color || 'rgba(59, 130, 246, 0.8)'
      dataset.data.forEach((value, index) => {
        const x = padding + (width * index) / (data.labels.length - 1)
        const y = padding + height - (height * value) / maxValue

        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      })
    })

    // Draw labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
    ctx.font = '12px sans-serif'
    ctx.textAlign = 'center'

    // X-axis labels
    data.labels.forEach((label, index) => {
      const x = padding + (width * index) / (data.labels.length - 1)
      ctx.fillText(label, x, height + padding + 20)
    })

    // Y-axis labels
    ctx.textAlign = 'right'
    for (let i = 0; i <= 5; i++) {
      const value = (maxValue * i) / 5
      const y = padding + height - (height * i) / 5
      ctx.fillText(value.toFixed(1), padding - 10, y + 4)
    }
  }, [data, type])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`my-6 p-4 rounded-lg glassmorphic-depth ${className}`}
    >
      {title && (
        <h4 className="text-lg font-semibold text-white/90 mb-4">{title}</h4>
      )}
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        {data.datasets.map((dataset, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: dataset.color || 'rgba(59, 130, 246, 0.8)' }}
            />
            <span className="text-sm text-white/70">{dataset.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
} 