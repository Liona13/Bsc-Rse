export function measurePerformance(metricName: string) {
    if (typeof window === 'undefined' || !window.performance) return

    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    const paintTiming = performance.getEntriesByType('paint')

    const metrics = {
        DNS: navigationTiming.domainLookupEnd - navigationTiming.domainLookupStart,
        TLS: navigationTiming.connectEnd - navigationTiming.connectStart,
        TTFB: navigationTiming.responseStart - navigationTiming.requestStart,
        FCP: paintTiming.find(({ name }) => name === 'first-contentful-paint')?.startTime,
        LCP: undefined as number | undefined,
    }

    // Report to analytics or console
    console.debug(`[Performance] ${metricName}:`, metrics)
} 