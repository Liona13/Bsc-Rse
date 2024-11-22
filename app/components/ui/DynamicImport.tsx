'use client'

import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

interface DynamicImportProps {
  component: () => Promise<{ default: React.ComponentType<any> }>
  fallback?: React.ReactNode
}

export function DynamicImport({ component, fallback = <LoadingSpinner /> }: DynamicImportProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const DynamicComponent = dynamic(component, {
    loading: () => <>{fallback}</>,
    ssr: true
  })

  if (!mounted) {
    return <>{fallback}</>
  }

  return (
    <div suppressHydrationWarning>
      <Suspense fallback={fallback}>
        <DynamicComponent />
      </Suspense>
    </div>
  )
} 