'use client'

interface ParagraphProps {
  children: React.ReactNode
  className?: string
}

export function Paragraph({ children, className = "" }: ParagraphProps) {
  return (
    <p className={`text-white/70 leading-relaxed mb-4 ${className}`}>
      {children}
    </p>
  )
} 