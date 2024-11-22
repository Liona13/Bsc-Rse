type EventType = 'page_view' | 'scroll' | 'click' | 'error' | 'performance'

interface AnalyticsEvent {
    type: EventType
    path: string
    timestamp: number
    data?: Record<string, any>
}

class Analytics {
    private static instance: Analytics
    private events: AnalyticsEvent[] = []

    private constructor() { }

    static getInstance(): Analytics {
        if (!Analytics.instance) {
            Analytics.instance = new Analytics()
        }
        return Analytics.instance
    }

    trackEvent(type: EventType, data?: Record<string, any>) {
        const event: AnalyticsEvent = {
            type,
            path: window.location.pathname,
            timestamp: Date.now(),
            data
        }

        this.events.push(event)
        this.sendToAnalytics(event)
    }

    private async sendToAnalytics(event: AnalyticsEvent) {
        if (process.env.NODE_ENV === 'production') {
            try {
                await fetch('/api/analytics', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(event)
                })
            } catch (error) {
                console.error('Failed to send analytics:', error)
            }
        } else {
            console.debug('[Analytics]', event)
        }
    }
}

export const analytics = Analytics.getInstance() 