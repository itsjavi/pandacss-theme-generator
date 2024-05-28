// @see https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale

import { colorAliasConfig } from '@/lib/config/colors'
import type { SemanticToken, SemanticTokens, Token, Tokens } from '@pandacss/types'
import { customRadixColors } from './radix-colors-custom'
import { type RadixLightDarkColors, officialRadixColors } from './radix-colors-normalizer'
import type { RadixColorScale, ThemeColorAlias } from './types'

function _populateColors() {
  const presetSemanticTokenColors: SemanticTokens['colors'] = {
    bg: {
      canvas: { value: '{colors.gray.1}' },
      default: { value: { base: 'white', _dark: '{colors.gray.2}' } },
      subtle: { value: { base: '{colors.gray.2}', _dark: '{colors.gray.3}' } },
      muted: { value: { base: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
      emphasized: { value: { base: '{colors.gray.4}', _dark: '{colors.gray.5}' } },
      disabled: { value: { base: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
    },
    fg: {
      default: { value: '{colors.gray.12}' },
      muted: { value: '{colors.gray.11}' },
      subtle: { value: '{colors.gray.10}' },
      disabled: { value: '{colors.gray.7}' },
    },
    border: {
      default: { value: '{colors.gray.7}' },
      muted: { value: '{colors.gray.6}' },
      subtle: { value: '{colors.gray.4}' },
      disabled: { value: '{colors.gray.5}' },
      outline: { value: '{colors.gray.9/50}' },
    },
  }

  const presetTokenColors: Tokens['colors'] = {
    current: { value: 'currentColor' },
    black: {
      DEFAULT: { value: '#000000' },
      a50: { value: 'rgba(0, 0, 0, 0.05)' },
      a100: { value: 'rgba(0, 0, 0, 0.1)' },
      a150: { value: 'rgba(0, 0, 0, 0.15)' },
      a200: { value: 'rgba(0, 0, 0, 0.2)' },
      a300: { value: 'rgba(0, 0, 0, 0.3)' },
      a400: { value: 'rgba(0, 0, 0, 0.4)' },
      a500: { value: 'rgba(0, 0, 0, 0.5)' },
      a600: { value: 'rgba(0, 0, 0, 0.6)' },
      a700: { value: 'rgba(0, 0, 0, 0.7)' },
      a800: { value: 'rgba(0, 0, 0, 0.8)' },
      a900: { value: 'rgba(0, 0, 0, 0.9)' },
      a950: { value: 'rgba(0, 0, 0, 0.95)' },
    },
    white: {
      DEFAULT: { value: '#ffffff' },
      a50: { value: 'rgba(255, 255, 255, 0.05)' },
      a100: { value: 'rgba(255, 255, 255, 0.1)' },
      a150: { value: 'rgba(255, 255, 255, 0.15)' },
      a200: { value: 'rgba(255, 255, 255, 0.2)' },
      a300: { value: 'rgba(255, 255, 255, 0.3)' },
      a400: { value: 'rgba(255, 255, 255, 0.4)' },
      a500: { value: 'rgba(255, 255, 255, 0.5)' },
      a600: { value: 'rgba(255, 255, 255, 0.6)' },
      a700: { value: 'rgba(255, 255, 255, 0.7)' },
      a800: { value: 'rgba(255, 255, 255, 0.8)' },
      a900: { value: 'rgba(255, 255, 255, 0.9)' },
      a950: { value: 'rgba(255, 255, 255, 0.95)' },
    },
    transparent: { value: 'rgb(0 0 0 / 0)' },
  }

  // @see https://www.radix-ui.com/themes/docs/theme/color#alpha-colors
  const rxLevelAliases: Record<number, string[]> = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: ['DEFAULT', 'default'],
    7: ['emphasis'],
    8: [],
    9: [],
    10: ['text'],
    11: [],
    12: [],
  }

  function createColorsObj(color: RadixLightDarkColors[string], isDark: boolean) {
    const colorTokens: Record<string, Token<string>> = {}
    const entries = Object.entries(color)

    for (const [rxLevel, value] of entries) {
      const levelKey = Number.parseInt(rxLevel)
      const aliases = [rxLevel, ...rxLevelAliases[levelKey]]

      for (const alias of aliases) {
        colorTokens[alias] = {
          value: isDark ? value.dark : value.light,
        }
      }
    }

    return colorTokens
  }

  // @see https://www.radix-ui.com/colors/docs/palette-composition/composing-a-palette
  const darkFgPalettes = ['sky', 'mint', 'lime', 'yellow', 'amber']
  // @see https://park-ui.com/docs/panda/theme/semantic-tokens
  function createSemanticColorsObj(color: string) {
    const isBlackFg = darkFgPalettes.includes(color.toLowerCase())

    const colorTokens: Record<string, SemanticToken<string>> = {
      1: { value: { base: `{colors.${color}.light.1}`, _dark: `{colors.${color}.dark.1}` } },
      2: { value: { base: `{colors.${color}.light.2}`, _dark: `{colors.${color}.dark.2}` } },
      3: { value: { base: `{colors.${color}.light.3}`, _dark: `{colors.${color}.dark.3}` } },
      4: { value: { base: `{colors.${color}.light.4}`, _dark: `{colors.${color}.dark.4}` } },
      5: { value: { base: `{colors.${color}.light.5}`, _dark: `{colors.${color}.dark.5}` } },
      6: { value: { base: `{colors.${color}.light.6}`, _dark: `{colors.${color}.dark.6}` } },
      7: { value: { base: `{colors.${color}.light.7}`, _dark: `{colors.${color}.dark.7}` } },
      8: { value: { base: `{colors.${color}.light.8}`, _dark: `{colors.${color}.dark.8}` } },
      9: { value: { base: `{colors.${color}.light.9}`, _dark: `{colors.${color}.dark.9}` } },
      10: { value: { base: `{colors.${color}.light.10}`, _dark: `{colors.${color}.dark.10}` } },
      11: { value: { base: `{colors.${color}.light.11}`, _dark: `{colors.${color}.dark.11}` } },
      12: { value: { base: `{colors.${color}.light.12}`, _dark: `{colors.${color}.dark.12}` } },

      DEFAULT: { value: `{colors.${color}.9}` },
      default: { value: `{colors.${color}.9}` },
      emphasis: { value: `{colors.${color}.10}` },
      fg: { value: isBlackFg ? 'black' : 'white' },
      text: { value: `{colors.${color}.12}` },
    }

    return colorTokens
  }

  for (const rxColorEntry of Object.entries(officialRadixColors)) {
    const [colorName, rxColorShades] = rxColorEntry
    presetTokenColors[colorName] = {
      light: createColorsObj(rxColorShades, false),
      dark: createColorsObj(rxColorShades, true),
    }

    presetSemanticTokenColors[colorName] = createSemanticColorsObj(colorName)
  }

  const normalizedCustomRadixColors: RadixLightDarkColors = {}
  for (const [color, colorData] of Object.entries(customRadixColors)) {
    normalizedCustomRadixColors[color] = {}

    if (colorData.light.length !== 12 || colorData.dark.length !== 12) {
      throw new Error(`Color data for ${color} must have 12 values for each light and dark shades`)
    }

    for (let i = 0; i < 12; i++) {
      normalizedCustomRadixColors[color][(i + 1) as RadixColorScale] = {
        light: `#${colorData.light[i]}`,
        dark: `#${colorData.dark[i]}`,
      }
    }
  }

  for (const rxColorEntry of Object.entries(normalizedCustomRadixColors)) {
    const [colorName, rxColorShades] = rxColorEntry
    presetTokenColors[colorName] = {
      light: createColorsObj(rxColorShades, false),
      dark: createColorsObj(rxColorShades, true),
    }

    presetSemanticTokenColors[colorName] = createSemanticColorsObj(colorName)
  }

  for (const alias of Object.keys(colorAliasConfig) as ThemeColorAlias[]) {
    const colorName = colorAliasConfig[alias]
    presetTokenColors[alias] = structuredClone(presetTokenColors[colorName])
    presetSemanticTokenColors[alias] = structuredClone(presetSemanticTokenColors[colorName])
  }

  return { presetSemanticTokenColors, presetTokenColors }
}

const { presetSemanticTokenColors, presetTokenColors } = _populateColors()

export { presetSemanticTokenColors, presetTokenColors }
