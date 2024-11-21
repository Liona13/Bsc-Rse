'use client'

interface ListProps {
  children: React.ReactNode
  ordered?: boolean
  className?: string
}

export function List({ children, ordered = false, className = "" }: ListProps) {
  const Component = ordered ? 'ol' : 'ul'
  const baseStyles = ordered 
    ? "list-decimal pl-6 space-y-2 text-white/70"
    : "list-disc pl-6 space-y-2 text-white/70"

  return (
    <Component className={`${baseStyles} ${className} my-4`}>
      {children}
    </Component>
  )
} 