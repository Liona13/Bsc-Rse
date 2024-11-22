'use client'

import { useEffect } from 'react'
import { measurePerformance } from '@/lib/utils/performance'
import { analytics } from '@/lib/analytics'

export function PerformanceMonitor() {
  useEffect(() => {
    // Report initial page load metrics
    const metrics = measurePerformance('initial-load')
    analytics.trackEvent('page_view', { metrics })

    // Setup performance observer for LCP
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          analytics.trackEvent('performance', {
            metric: 'LCP',
            value: entry.startTime
          })
        }
      })
    })

    observer.observe({ entryTypes: ['largest-contentful-paint'] })
    return () => observer.disconnect()
  }, [])

  return null
} 