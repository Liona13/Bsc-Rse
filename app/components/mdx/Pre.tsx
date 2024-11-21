'use client'

interface PreProps {
  children: React.ReactNode
  className?: string
}

export function Pre({ children, className = "" }: PreProps) {
  return (
    <pre className={`${className} my-4 rounded-lg overflow-hidden`}>
      {children}
    </pre>
  )
} 