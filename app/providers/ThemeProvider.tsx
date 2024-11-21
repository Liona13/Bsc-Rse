'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false}
      disableTransitionOnChange
      forcedTheme={process.env.NODE_ENV === 'development' ? undefined : 'dark'}
    >
      {children}
    </NextThemesProvider>
  )
} 