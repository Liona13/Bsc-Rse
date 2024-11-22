'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const HydrationContext = createContext<boolean>(false)

export function HydrationProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    <HydrationContext.Provider value={hydrated}>
      {children}
    </HydrationContext.Provider>
  )
}

export function useHydrated() {
  return useContext(HydrationContext)
} 