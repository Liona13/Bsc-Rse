'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Eye, Download, Loader2, AlertCircle, CheckCircle, RefreshCcw } from 'lucide-react'
import { useState } from "react"
import { generateResume } from "./PDFResume"

interface PDFPreviewProps {
  onDownload: () => void
}

export function PDFPreview({ onDownload }: PDFPreviewProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  const MAX_RETRIES = 3
  const RETRY_DELAY = 1000

  const clearMessages = () => {
    setError(null)
    setSuccess(null)
  }

  const handleRetry = async (action: 'preview' | 'download') => {
    if (retryCount >= MAX_RETRIES) {
      setError(`Maximum retry attempts (${MAX_RETRIES}) reached. Please try again later.`)
      return
    }

    setRetryCount(prev => prev + 1)
    setTimeout(() => {
      if (action === 'preview') {
        handlePreview()
      } else {
        handleDownload()
      }
    }, RETRY_DELAY)
  }

  const handlePreview = async () => {
    try {
      setIsLoading(true)
      clearMessages()
      const pdfBytes = await generateResume()
      const blob = new Blob([pdfBytes], { type: 'application/pdf' })
      const url = window.URL.createObjectURL(blob)
      window.open(url, '_blank')
      setSuccess('Resume preview opened in new tab')
      setRetryCount(0)
      setTimeout(() => {
        window.URL.revokeObjectURL(url)
        setSuccess(null)
      }, 3000)
    } catch (error) {
      console.error('Error generating PDF preview:', error)
      setError('Failed to generate preview')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = async () => {
    try {
      setIsLoading(true)
      clearMessages()
      await onDownload()
      setSuccess('Resume downloaded successfully')
      setRetryCount(0)
      setTimeout(() => setSuccess(null), 3000)
    } catch (error) {
      console.error('Error downloading PDF:', error)
      setError('Failed to download')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <motion.button
          onClick={handlePreview}
          className="px-8 py-3 rounded-lg glassmorphic-frost text-white/90 hover:text-white transition-colors relative group overflow-hidden flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
          <span>Preview Resume</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
        </motion.button>

        <motion.button
          onClick={handleDownload}
          className="px-8 py-3 rounded-lg glassmorphic-frost text-white/90 hover:text-white transition-colors relative group overflow-hidden flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Download className="w-5 h-5" />
          )}
          <span>Download Resume</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100" />
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-between gap-2 text-red-400 text-sm bg-red-500/10 px-4 py-2 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </div>
            {retryCount < MAX_RETRIES && (
              <motion.button
                onClick={() => handleRetry(error.includes('preview') ? 'preview' : 'download')}
                className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCcw className="w-3 h-3" />
                Retry
              </motion.button>
            )}
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 px-4 py-2 rounded-lg"
          >
            <CheckCircle className="w-4 h-4" />
            <span>{success}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 