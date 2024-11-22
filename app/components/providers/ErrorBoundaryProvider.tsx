'use client'

import { ErrorBoundary } from 'react-error-boundary'

export function ErrorBoundaryProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ErrorBoundary
      fallback={<ErrorFallback />}
      onError={(error: Error) => {
        console.error('Error caught by boundary:', error)
      }}
    >
      {children}
    </ErrorBoundary>
  )
}

function ErrorFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 