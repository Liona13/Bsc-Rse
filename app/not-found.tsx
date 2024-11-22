import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-b from-black to-gray-900">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          404 - Page Not Found
        </h1>
        <p className="text-white/70">The page you're looking for doesn't exist or has been moved.</p>
        
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300"
        >
          <Home className="w-4 h-4" />
          Return Home
        </Link>
      </div>
    </div>
  )
} 