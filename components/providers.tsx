'use client'

import { ThemeProvider } from 'next-themes'
import { type PropsWithChildren, useEffect, useState } from 'react'

export function Providers({ children }: PropsWithChildren) {
  const [hasWasm, setHasWasm] = useState(false)
  useEffect(() => {
    const initWasm = async () => {
      const lightningcssWasm = await import('lightningcss-wasm')
      await lightningcssWasm.default()
      setHasWasm(true)
    }
    initWasm()
  }, [])

  // if (typeof window !== 'undefined' && !hasWasm) {
  //// client-side + lightningcss-wasm isn't loaded yet
  //// BUG: This is disabled because it opts-out server-side rendering and duplicates the layout
  //   return null
  // }

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  )
}
