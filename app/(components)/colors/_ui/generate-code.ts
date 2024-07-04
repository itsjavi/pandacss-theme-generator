import type { Preset, Recursive, SemanticToken, Token } from '@pandacss/types'
import { outdent } from 'outdent'
import type { ColorSystemState } from './client-state'

export function generatePandaPresetSnippet(preset: Preset, presetName = 'colorSystemPreset'): string {
  const jsCode = outdent`
    import { definePreset } from "@pandacss/dev";

    export const ${presetName} = definePreset(
      ${JSON.stringify(preset, null, 2)}
    );
  `

  return jsCode
}

export function generatePandaColorsPreset(state: ColorSystemState): Preset {
  const colorTokens: Recursive<Token<string>> = {}
  const semanticColorTokens: Recursive<SemanticToken<string>> = {}

  for (const colorConfig of state.colors) {
    const currentSemanticTokens: Recursive<SemanticToken<string>> = {}
    const lightTokens: Recursive<Token<string>> = {}
    const darkTokens: Recursive<Token<string>> = {}
    const darkStops = colorConfig.stops
    const lightStops = [...colorConfig.stops].reverse()

    for (let i = 0; i < lightStops.length; i++) {
      const stopId = i + 1
      const lightStop = lightStops[i]
      const darkStop = darkStops[i]
      lightTokens[stopId] = {
        value: `hsla(${lightStop.h} ${lightStop.c}% ${lightStop.l}% / ${lightStop.alpha}%)`,
      }
      darkTokens[stopId] = {
        value: `hsla(${darkStop.h} ${darkStop.c}% ${darkStop.l}% / ${darkStop.alpha}%)`,
      }
      currentSemanticTokens[stopId] = {
        value: {
          base: `{colors.${colorConfig.name}.light.${stopId}}`,
          _dark: `{colors.${colorConfig.name}.dark.${stopId}}`,
        },
      }
    }

    const midPoint = Math.floor(colorConfig.stops.length / 2)
    const lastStop = colorConfig.stops.length

    currentSemanticTokens.default = {
      value: `{colors.${colorConfig.name}.${midPoint}}`,
    }

    currentSemanticTokens.text = {
      value: `{colors.${colorConfig.name}.${lastStop}}`,
    }

    colorTokens[colorConfig.name] = {
      light: lightTokens,
      dark: darkTokens,
    }

    semanticColorTokens[colorConfig.name] = currentSemanticTokens
  }

  const colorsPreset = {
    theme: {
      extend: {
        tokens: {
          colors: colorTokens,
          semanticTokens: {
            colors: semanticColorTokens,
          },
        },
      },
    },
  }

  return colorsPreset
}
