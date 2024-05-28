import type { WebManifest } from '@/lib/types'
import appConfig from './app'
import { pwaBackgroundColor } from './colors'

const faviconUrl = '/images/pwa/favicon-196.png'

/**
 * Web Manifest configuration
 */
const manifestConfig: WebManifest = {
  id: 'pandacss-theme-generator.vercel.app',
  name: appConfig.siteName,
  short_name: appConfig.text.pwaName,
  description: appConfig.text.pwaDescription,
  theme_color: pwaBackgroundColor,
  background_color: pwaBackgroundColor,
  start_url: './',
  lang: 'en-US',
  orientation: 'portrait',
  display: 'standalone',
  display_override: ['window-controls-overlay'],
  // @see https://www.w3.org/TR/manifest-app-info/#categories-member
  categories: ['entertainment', 'games', 'utilities'],
  icons: [
    {
      src: '/images/pwa/manifest-icon-192.maskable.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/images/pwa/manifest-icon-192.maskable.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'maskable',
    },
    {
      src: '/images/pwa/manifest-icon-512.maskable.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/images/pwa/manifest-icon-512.maskable.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable',
    },
  ],
  /*
  By default, screenshots created with https://progressier.com/pwa-screenshots-generator
  are 1080x1920 pixels in .jpg format. 
  
  The official specs don't require a specific size. The width and height of your screenshots 
  must be at least 370px and at most 3840px. The maximum dimension can't be more than 
  2.3 times as long as the minimum dimension. So screenshots can be landscape, square or portrait. 
  However, every screenshot in a set must have the same aspect ratio. Only JPG and PNG image 
  formats are supported.
  */
  screenshots: [],
  shortcuts: [],
}

export default manifestConfig
