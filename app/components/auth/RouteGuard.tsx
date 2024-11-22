'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface RouteGuardProps {
  children: React.ReactNode
  protectedRoutes: string[]
}

export function RouteGuard({ children, protectedRoutes }: RouteGuardProps) {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const isProtectedRoute = protectedRoutes.includes(pathname)
    const isAuthenticated = false // Replace with actual auth check

    if (isProtectedRoute && !isAuthenticated) {
      router.push('/login')
    }
  }, [pathname, protectedRoutes, router])

  return <>{children}</>
} 