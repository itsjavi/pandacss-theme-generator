import { defineConfig } from '@pandacss/dev'
import themePreset from './lib/theme/preset'

export default defineConfig({
  // strictTokens: changes generated typescript definitions to be more strict for property having a token or utility.
  // - Enabling strictTokens may cause TypeScript performance issues, the more tokens you have (because of union types).
  strictTokens: false,
  preflight: true,
  hash: {
    className: true,
    cssVar: false,
  },
  jsxFramework: 'react',
  outdir: 'styled-system',
  validation: 'error',
  include: [
    // Where to look for your CSS declarations
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './config/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  exclude: [
    // File patterns to exclude
  ],
  presets: ['@pandacss/preset-base', themePreset],

  // hooks: {
  //   'tokens:created': ({ configure }) => {
  //     configure({
  //       // We will add a '$' prefix to the token names, to avoid conflicts with other native CSS keywords
  //       // biome-ignore lint/style/useTemplate: It's more readable this way
  //       formatTokenName: (path) => '$' + path.join('.'),
  //     })
  //   },
  // },
})
