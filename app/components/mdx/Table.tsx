'use client'

interface TableProps {
  children: React.ReactNode
  className?: string
}

export function Table({ children, className = "" }: TableProps) {
  return (
    <div className="w-full overflow-x-auto my-6">
      <table className={`w-full border-collapse ${className}`}>
        {children}
      </table>
    </div>
  )
}

export function TableHead({ children, className = "" }: TableProps) {
  return (
    <thead className={`border-b border-white/10 ${className}`}>
      {children}
    </thead>
  )
}

export function TableBody({ children, className = "" }: TableProps) {
  return <tbody className={className}>{children}</tbody>
}

export function TableRow({ children, className = "" }: TableProps) {
  return (
    <tr className={`border-b border-white/5 ${className}`}>
      {children}
    </tr>
  )
}

export function TableCell({ children, className = "", header = false }: TableProps & { header?: boolean }) {
  const Component = header ? 'th' : 'td'
  return (
    <Component className={`p-3 text-sm text-white/70 ${header ? 'font-semibold text-white/90' : ''} ${className}`}>
      {children}
    </Component>
  )
} 