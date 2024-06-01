import type { Preset } from '@pandacss/types'
import { bfgColorLevelToAlias, colorLevelToAlias } from '../constants'
import type { ColorLevel, ColorSystemConfig } from '../types'

type ExtendedTheme = Required<Required<Required<Preset>['theme']>['extend']>
export type GeneratedColorTokens = {
  colors: ExtendedTheme['tokens']['colors']
  semanticColors: ExtendedTheme['semanticTokens']['colors']
}

export default function generateColorTokens(config: ColorSystemConfig): GeneratedColorTokens {
  const tokens: GeneratedColorTokens = {
    colors: {},
    semanticColors: {},
  }

  for (const [colorName, colorConfig] of Object.entries(config)) {
    const isBgFg = ['bg', 'fg'].includes(colorConfig.type)
    const defaultLevel = isBgFg ? '100' : '600'
    const levelAliasMap: Partial<Record<ColorLevel, string>> = isBgFg ? bfgColorLevelToAlias : colorLevelToAlias

    // biome-ignore lint/suspicious/noExplicitAny: defining types here gets too complicated
    const pandaColor: any = { dark: {}, light: {} }
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const pandaColorP3: any = { dark: {}, light: {} }
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const pandaSemanticColor: any = {}

    for (const colorScheme of ['light', 'dark'] as const) {
      const colorLevels = colorConfig[colorScheme]
      for (const [colorLevel, colorValues] of Object.entries(colorLevels)) {
        if (!colorValues) {
          continue
        }
        if (colorValues.srgb) {
          pandaColor[colorScheme][colorLevel] = {
            value: colorValues.srgb,
          }
        }
        if (colorValues.oklch) {
          pandaColorP3[colorScheme][colorLevel] = {
            value: colorValues.oklch,
          }
        }

        // semantic
        const semanticP3Props = colorValues.oklch
          ? {
              _mediaP3: {
                _supportsOklch: {
                  base: `{colors.${colorName}P3.light.${colorLevel}}`,
                  _dark: `{colors.${colorName}P3.dark.${colorLevel}}`,
                },
              },
            }
          : undefined

        pandaSemanticColor[colorLevel] = {
          value: {
            base: `{colors.${colorName}.light.${colorLevel}}`,
            _dark: `{colors.${colorName}.dark.${colorLevel}}`,
            ...semanticP3Props,
          },
        }

        // apply semantic alias
        const levelAlias = levelAliasMap[colorLevel as ColorLevel]
        if (!levelAlias || !pandaSemanticColor[colorLevel]) {
          continue
        }

        pandaSemanticColor[levelAlias] = {
          value: `{colors.${colorName}.${colorLevel}}`,
        }
      }

      pandaColor.dark.DEFAULT = pandaColor.dark[defaultLevel]
      pandaColor.light.DEFAULT = pandaColor.light[defaultLevel]
      pandaColorP3.dark.DEFAULT = pandaColorP3.dark[defaultLevel]
      pandaColorP3.light.DEFAULT = pandaColorP3.light[defaultLevel]
      pandaSemanticColor.DEFAULT = {
        value: `{colors.${colorName}}`,
      }

      tokens.colors = {
        ...tokens.colors,
        ...{
          [`${colorName}`]: pandaColor,
          [`${colorName}P3`]: pandaColorP3,
        },
      }

      tokens.semanticColors = {
        ...tokens.semanticColors,
        ...{
          [`${colorName}`]: pandaSemanticColor,
        },
        // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
        ...colorConfig.aliases?.reduce((acc, alias) => ({ ...acc, [alias]: pandaSemanticColor }), {}),
      }
    }
  }

  return tokens
}
