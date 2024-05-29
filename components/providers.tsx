'use client'

import { AppStateProvider } from '@/lib/editor/state'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <AppStateProvider>{children}</AppStateProvider>
    </ThemeProvider>
  )
}
