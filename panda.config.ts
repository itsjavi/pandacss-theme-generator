import { defineConfig } from '@pandacss/dev'
import { presetPatterns } from './lib/theme/patterns'

export default defineConfig({
  preflight: true,
  jsxFramework: 'react',
  // jsxFactory: 'panda',
  outdir: 'styled-system',
  validation: 'error',
  include: [
    // Where to look for your CSS declarations
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  exclude: [
    // File patterns to exclude
  ],
  theme: {
    extend: {},
  },
  patterns: {
    extend: presetPatterns,
  },
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
      borderColor: 'border.default',
      borderStyle: 'solid',
    },
    '[hidden]': {
      display: 'none',
    },
    '[inert]': {
      pointerEvents: 'none',
    },
  },
  // hash: {
  //   className: true,
  //   cssVar: false,
  // },
})
