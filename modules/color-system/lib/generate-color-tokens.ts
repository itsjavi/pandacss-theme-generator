import type { Preset } from '@pandacss/types'
import type { ColorSystemConfig } from '../types'
import { formatColorConfigValue } from './color-manipulation'

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

  for (const colorConfig of config.colors) {
    const colorName = colorConfig.name
    const defaultLevel = colorConfig.defaultLevel
    const hasOklch = colorConfig.group !== 'gray'

    // biome-ignore lint/suspicious/noExplicitAny: defining types here gets too complicated
    const pandaColor: any = { dark: {}, light: {} }
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const pandaColorP3: any = { dark: {}, light: {} }
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const pandaSemanticColor: any = {}

    // for (const colorScheme of ['light', 'dark'] as const) {
    const colorLevels = colorConfig.scale
    for (const [colorLevel, colorValue] of Object.entries(colorLevels)) {
      const _values = formatColorConfigValue(colorValue)

      pandaColor.light[colorLevel] = {
        value: _values.light.srgb,
      }
      pandaColorP3.light[colorLevel] = {
        value: _values.light.oklch,
      }
      pandaColor.dark[colorLevel] = {
        value: _values.dark.srgb,
      }
      pandaColorP3.dark[colorLevel] = {
        value: _values.dark.oklch,
      }

      // semantic
      const semanticP3Props = hasOklch
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
      const levelAliases = colorValue.aliases
      if (!levelAliases || !pandaSemanticColor[colorLevel]) {
        continue
      }

      for (const levelAlias of levelAliases) {
        pandaSemanticColor[levelAlias] = {
          value: `{colors.${colorName}.${colorLevel}}`,
        }
      }
    }

    pandaColor.dark.DEFAULT = pandaColor.dark[defaultLevel]
    pandaColor.light.DEFAULT = pandaColor.light[defaultLevel]
    pandaColorP3.dark.DEFAULT = pandaColorP3.dark[defaultLevel]
    pandaColorP3.light.DEFAULT = pandaColorP3.light[defaultLevel]
    pandaSemanticColor.DEFAULT = {
      value: `{colors.${colorName}}`,
    }

    const currentTokens = hasOklch
      ? {
          [colorName]: pandaColor,
          [`${colorName}P3`]: pandaColorP3,
        }
      : {
          [colorName]: pandaColor,
        }

    tokens.colors = {
      ...tokens.colors,
      ...currentTokens,
    }

    tokens.semanticColors = {
      ...tokens.semanticColors,
      ...{
        [`${colorName}`]: pandaSemanticColor,
      },
      // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
      ...colorConfig.aliases?.reduce((acc, alias) => ({ ...acc, [alias]: pandaSemanticColor }), {}),
    }
    // }
  }

  return tokens
}
