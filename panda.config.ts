import { defineConfig } from '@pandacss/dev'
import { colorSystemPandaPreset } from './lib/theme/preset-colors'
import { appCorePandaPreset } from './lib/theme/preset-core'

export default defineConfig({
  preflight: true,
  jsxFramework: 'react',
  jsxFactory: 'panda', // We'll use "panda" instead of "styled". <panda.div bg="primary.100" />
  // jsxStyleProps: 'minimal', // 'minimal' will reduce the size of the generated code due to not having to check which props are style props at runtime.
  outdir: 'styled-system',
  validation: 'error',
  include: [
    // Where to look for your CSS declarations
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  presets: ['@pandacss/preset-base', colorSystemPandaPreset, appCorePandaPreset],
  globalCss: {
    html: {
      lineHeight: 1.5,
      textRendering: 'optimizeLegibility',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      WebkitTextSizeAdjust: '100%',
      height: '100%',
    },
    body: {
      fontFamily: 'var(--font-inter), sans-serif',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      height: 'fit-content',
      maxHeight: '100%',
      lineHeight: 'inherit',
      minWidth: '320px',
      _dark: {
        colorScheme: 'dark',
        bg: '#282828',
      },
    },
    '*, *::before, *::after': {
      position: 'relative',
      borderColor: 'transparent',
      borderStyle: 'solid',
    },
    '[hidden]': {
      display: 'none',
    },
    '[inert]': {
      pointerEvents: 'none',
    },
    '::selection': {
      bgColor: 'var(--colors-blue-dark-800)',
      color: 'var(--colors-contrast-white-100)',
    },
  },
  hash: {
    className: true,
    cssVar: false,
  },
  staticCss: {
    css: [
      {
        properties: {
          color: ['*'],
          bg: ['*'],
        },
      },
    ],
  },
})
