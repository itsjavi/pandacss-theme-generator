import type { Metadata } from 'next'
import { getBaseUrl } from './utils'

const defineMetadata = <T extends Metadata>(metadata: T) => metadata

const seoConfig = defineMetadata({
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

export default seoConfig
