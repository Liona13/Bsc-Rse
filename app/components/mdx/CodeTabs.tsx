'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Code } from "./Code"

interface CodeTab {
  label: string
  language: string
  code: string
}

interface CodeTabsProps {
  tabs: CodeTab[]
  className?: string
}

export function CodeTabs({ tabs, className = "" }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={`my-6 ${className}`}>
      {/* Tab Headers */}
      <div className="flex overflow-x-auto no-scrollbar border-b border-white/10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              activeTab === index
                ? 'text-white border-blue-500'
                : 'text-white/60 border-transparent hover:text-white/80 hover:border-white/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-2"
      >
        <Code language={tabs[activeTab].language}>
          {tabs[activeTab].code}
        </Code>
      </motion.div>
    </div>
  )
} 