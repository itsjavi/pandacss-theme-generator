'use client'

import { Provider as JotaiProvider } from 'jotai'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <JotaiProvider>{children}</JotaiProvider>
    </ThemeProvider>
  )
}
