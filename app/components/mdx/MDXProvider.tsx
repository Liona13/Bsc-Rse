'use client'

import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from './index'

export function MDXProviderComponent({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={MDXComponents}>
      {children}
    </MDXProvider>
  )
} 