import { defineConfig } from '@pandacss/dev'
import { colorSystemPandaPreset } from './modules/design-system/lib/preset-colors'
import { appCorePandaPreset } from './modules/design-system/lib/preset-core'

export default defineConfig({
  preflight: true,
  jsxFramework: 'react',
  // jsxStyleProps: 'minimal', // reduces the size of the generated code due to not having to split style props at runtime.
  outdir: 'styled-system',
  validation: 'error',
  include: [
    // Where to look for your CSS declarations
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
    './modules/**/*.{js,jsx,ts,tsx}',
  ],
  presets: ['@pandacss/preset-base', colorSystemPandaPreset, appCorePandaPreset],
  hash: {
    className: true,
    cssVar: false,
  },
  // staticCss: {
  //   css: [
  //     {
  //       properties: {
  //         color: ['*'],
  //         bg: ['*'],
  //       },
  //     },
  //   ],
  // },
})
