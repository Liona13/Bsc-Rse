import Link from 'next/link'
import { Home, RefreshCcw } from 'lucide-react'

export default function ErrorPage({ error, resetErrorBoundary }: { error?: Error; resetErrorBoundary?: () => void }) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-white">Something went wrong</h1>
        <p className="text-white/70">{error?.message || 'An unexpected error occurred'}</p>
        
        <div className="flex gap-4 justify-center">
          <button 
            onClick={resetErrorBoundary}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <RefreshCcw className="w-4 h-4" />
            Try Again
          </button>
          <Link 
            href="/"
            className="px-4 py-2 rounded-lg border border-white/10 text-white hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
} 