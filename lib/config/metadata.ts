import type { Metadata, Viewport } from 'next'
import { getBaseUrl } from '../urls'
import appConfig from './app'
import { pwaBackgroundColor } from './colors'

const startupImageSizes = [
  { w: 640, h: 1136, dw: 320, dh: 568 },
  { w: 750, h: 1334, dw: 375, dh: 667 },
  { w: 828, h: 1792, dw: 414, dh: 896 },
  { w: 1125, h: 2436, dw: 375, dh: 812 },
  { w: 1170, h: 2532, dw: 390, dh: 844 },
  { w: 1179, h: 2556, dw: 393, dh: 852 },
  { w: 1242, h: 2208, dw: 414, dh: 736 },
  { w: 1242, h: 2688, dw: 414, dh: 896 },
  { w: 1284, h: 2778, dw: 428, dh: 926 },
  { w: 1290, h: 2796, dw: 430, dh: 932 },
  { w: 1488, h: 2266, dw: 744, dh: 1133 },
  { w: 1536, h: 2048, dw: 768, dh: 1024 },
  { w: 1620, h: 2160, dw: 810, dh: 1080 },
  { w: 1640, h: 2360, dw: 820, dh: 1180 },
  { w: 1668, h: 2224, dw: 834, dh: 1112 },
  { w: 1668, h: 2388, dw: 834, dh: 1194 },
  { w: 2048, h: 2732, dw: 1024, dh: 1366 },
]

/**
 * Default site metadata
 */
export const metadataConfig: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  // @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#template-object
  title: {
    // absolute: metaTitle, // ignores parent segments
    template: `%s - ${appConfig.siteName}`,
    default: appConfig.text.mainWindowTitle,
  },
  description: appConfig.text.mainMetaDescription,
  icons: [
    {
      type: 'image/png',
      sizes: '196x196',
      url: '/images/pwa/favicon-196.png',
      rel: 'icon',
    },
    {
      type: 'image/png',
      sizes: '180x180',
      url: '/images/pwa/apple-icon-180.png',
      rel: 'apple-touch-icon',
    },
  ],
  applicationName: appConfig.text.pwaName,
  appleWebApp: {
    title: appConfig.text.pwaTitle,
    capable: true,
    startupImage: startupImageSizes.flatMap((size) => [
      {
        media: `(device-width: ${size.dw}px) and (device-height: ${size.dh}px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)`,
        url: `/images/pwa/apple-splash-${size.w}-${size.h}.jpg`,
      },
      {
        media: `(device-width: ${size.dh}px) and (device-height: ${size.dw}px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)`,
        url: `/images/pwa/apple-splash-${size.h}-${size.w}.jpg`,
      },
    ]),
  },
}

export const viewportConfig: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: pwaBackgroundColor,
}
