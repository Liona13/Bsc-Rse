'use client'

interface ResumeCustomizerProps {
  onCustomize: (settings: ResumeSettings) => void
}

interface ResumeSettings {
  theme: 'minimal' | 'professional' | 'creative'
  sections: {
    [key: string]: boolean  // Toggle sections visibility
  }
  colors: {
    primary: string
    secondary: string
  }
}

export function ResumeCustomizer({ onCustomize }: ResumeCustomizerProps) {
  // Add UI for customizing resume layout, colors, sections
} 