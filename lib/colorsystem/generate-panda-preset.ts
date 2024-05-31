import type { Preset } from '@pandacss/types'
import { outdent } from 'outdent'
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

export function generateColorSystemPresetCode(colorSystem: ColorSystemConfig): string {
  const configSubset = generatePandaPreset(colorSystem)

  const jsCode = outdent`
    import { definePreset } from "@pandacss/dev";

    export const colorSystemPreset = definePreset(
      ${JSON.stringify(configSubset, null, 2)}
    );
  `

  return jsCode
}
