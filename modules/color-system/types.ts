import type { colorAliases, colorGroups, colorLevelAliases, colorLevels, colorSchemes } from './constants'

export type ColorScheme = (typeof colorSchemes)[number]
export type ColorGroup = (typeof colorGroups)[number]
export type ColorLevel = (typeof colorLevels)[number]
export type ColorAlias = (typeof colorAliases)[number]
export type ColorLevelAlias = (typeof colorLevelAliases)[number]
export type ColorConfig = {
  name: string
  type: ColorGroup
  aliases: Array<ColorAlias | string>
} & {
  [key in ColorScheme]: Partial<
    Record<
      ColorLevel | string,
      {
        srgb?: string
        oklch?: string
      }
    >
  >
}
export type ColorSystemConfig = Record<string, ColorConfig>
