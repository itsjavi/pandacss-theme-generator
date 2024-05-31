import type { Preset } from '@pandacss/types'
import generateColorTokens from './generate-color-tokens'
import type { ColorSystemConfig } from './types'

export default function generatePandaPreset(colorSystem: ColorSystemConfig): Preset {
  const colorTokens = generateColorTokens(colorSystem)
  const configSubset = {
    conditions: {
      extend: {
        mediaP3: '@media (color-gamut:p3)',
        supportsP3: '@supports (color: oklch(0 0 0))',
      },
    },
    theme: {
      // TODO: implement similarly to panda.preset-colors.ts
      extend: {
        tokens: {
          colors: colorTokens.colors,
        },
        semanticTokens: {
          colors: colorTokens.semanticColors,
        },
      },
    },
  }

  return configSubset
}
