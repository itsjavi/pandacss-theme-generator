import './globals.css'

import { sansFontClass } from '@/app/fonts'
import { metadataConfig, viewportConfig } from '@/lib/config/metadata'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'

export const metadata = metadataConfig
export const viewport = viewportConfig

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sansFontClass}>
        <ThemeProvider themes={['dark', 'light']} attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
