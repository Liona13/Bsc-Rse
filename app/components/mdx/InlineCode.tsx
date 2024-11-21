'use client'

interface InlineCodeProps {
  children: string
  className?: string
}

export function InlineCode({ children, className = "" }: InlineCodeProps) {
  return (
    <code className={`px-1.5 py-0.5 rounded bg-white/10 text-white/80 text-sm font-mono ${className}`}>
      {children}
    </code>
  )
} 