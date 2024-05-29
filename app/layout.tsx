import FullLayout from '@/components/layout/full-layout'
import './globals.css'

import { sansFontClass } from '@/app/fonts'
import { Providers } from '@/components/providers'
import seoConfig from '@/lib/seo.config'
import { panda } from '@/styled-system/jsx'
import { Analytics } from '@vercel/analytics/react'
import type { Viewport } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata = seoConfig

export const viewport: Viewport = {
  themeColor: '#F6E458',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={sansFontClass} suppressHydrationWarning>
      <body>
        <panda.div />
        <Providers>
          <FullLayout withHeaderLogo withBgPattern>
            {children}
          </FullLayout>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
