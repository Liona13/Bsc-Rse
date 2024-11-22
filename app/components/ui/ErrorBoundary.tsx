'use client'

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import ErrorPage from './ErrorPage'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorPage}
      onReset={() => window.location.reload()}
      onError={(error) => {
        console.error('Error caught by boundary:', error)
        // Add your error reporting service here
      }}
    >
      {children}
    </ReactErrorBoundary>
  )
} 