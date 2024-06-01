import './globals.css'

import { Providers } from '@/components/providers'
import { defineMetadata, getBaseUrl } from '@/lib/utils'
import { sansFontClass } from '@/ui/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import type { Viewport } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata = defineMetadata({
  metadataBase: new URL(getBaseUrl()),
  title: {
    template: '%s - Panda CSS Theme Generator',
    default: 'Panda CSS Theme Generator',
  },
  description: 'Generate your own Panda CSS design system and components, powered by Ark UI.',
  // openGraph: {
  //   images: '/og-image.png',
  //   url: 'https://pandacss-theme-generator.vercel.app',
  // },
  manifest: '/site.webmanifest',
  icons: [
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'mask-icon', url: '/favicon.ico' },
    { rel: 'image/x-icon', url: '/favicon.ico' },
  ],
  twitter: {
    site: '@itsjavidev',
    creator: '@itsjavidev',
  },
})

export const viewport: Viewport = {
  themeColor: '#F6E458',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={sansFontClass} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
