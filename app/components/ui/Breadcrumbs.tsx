'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

export function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  if (pathname === '/') return null

  return (
    <nav className="flex items-center space-x-2 text-sm text-white/60 py-4">
      <Link href="/" className="hover:text-white transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      {segments.map((segment, index) => {
        const path = `/${segments.slice(0, index + 1).join('/')}`
        const isLast = index === segments.length - 1
        
        return (
          <div key={path} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2" />
            {isLast ? (
              <span className="text-white capitalize">
                {segment.replace(/-/g, ' ')}
              </span>
            ) : (
              <Link
                href={path}
                className="hover:text-white transition-colors capitalize"
              >
                {segment.replace(/-/g, ' ')}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
} 