'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps as NextThemeProviderProps } from "next-themes"

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: NextThemeProviderProps['attribute'];
  defaultTheme?: string;
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "dark"
}: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute={attribute} defaultTheme={defaultTheme}>
      {children}
    </NextThemesProvider>
  )
} 