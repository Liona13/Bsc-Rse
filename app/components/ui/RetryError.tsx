'use client'

import { RefreshCcw } from 'lucide-react'
import { useState } from 'react'

interface RetryErrorProps {
  error: Error
  onRetry: () => void
  maxRetries?: number
}

export function RetryError({ error, onRetry, maxRetries = 3 }: RetryErrorProps) {
  const [retryCount, setRetryCount] = useState(0)
  const canRetry = retryCount < maxRetries

  const handleRetry = () => {
    if (canRetry) {
      setRetryCount(prev => prev + 1)
      onRetry()
    }
  }

  return (
    <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-white">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-medium text-red-400">Error</h3>
          <p className="text-sm text-white/70 mt-1">{error.message}</p>
        </div>
        {canRetry && (
          <button
            onClick={handleRetry}
            className="flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm transition-colors"
          >
            <RefreshCcw className="w-4 h-4" />
            Retry ({maxRetries - retryCount} left)
          </button>
        )}
      </div>
    </div>
  )
} 