'use client'

import { AppStateProvider } from '@/modules/color-system/lib/state'
import { Provider as JotaiProvider } from 'jotai'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <JotaiProvider>
        <AppStateProvider>{children}</AppStateProvider>
      </JotaiProvider>
    </ThemeProvider>
  )
}
