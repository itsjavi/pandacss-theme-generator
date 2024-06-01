import type { Oklch } from 'culori'

export type OklchColor = Required<Oklch>
export type ColorValue = string | OklchColor
export type ColorScheme = 'light' | 'dark'
export type ColorGroup = 'background' | 'contrast' | 'alpha' | 'gray' | 'accent'
export type ColorLevelNum = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
export type ColorLevelKey = `${ColorLevelNum}`
export type ColorConfigValue = {
  light: ColorValue
  dark: ColorValue
  aliases: string[] // aliases for the level
}
export type ColorConfig2 = {
  name: string
  group: ColorGroup
  aliases: string[] // aliases for the color
  scale: Partial<Record<ColorLevelKey, ColorConfigValue>>
  defaultLevel: ColorLevelKey
}

export type ColorActionPayload = {
  name: string
  level: ColorLevelKey
  scheme: ColorScheme
  value: OklchColor
  valueCss: string
}

export type ColorLevelCssStrings = {
  light: {
    srgb: string
    oklch: string
  }
  dark: {
    srgb: string
    oklch: string
  }
}

export type ColorCssStrings = Record<ColorLevelKey, ColorLevelCssStrings>

export type ColorSystemConfig2 = Record<string, ColorConfig2>

export const colorAliasMap: Record<string, string[]> = {
  bg: [],
  fg: [],
  gray: [],
  alpha: [],
  blue: ['primary'],
  // states
  red: ['danger'],
  yellow: ['warning'],
  green: ['success'],
  // alternates
  teal: ['info'],
  purple: ['secondary'],
  pink: ['tertiary'],
}

export const colorLevelAliasMap: Record<ColorLevelKey, string[]> = {
  '100': ['bg1'],
  '200': ['bg2'],
  '300': ['bg3'],
  '400': ['border1'],
  '500': ['border2'],
  '600': ['border3'],
  '700': ['solid1'],
  '800': ['solid2'],
  '900': ['fg1'],
  '950': ['fg2'],
}

export const contrastColorLevelAliasMap: Record<ColorLevelKey, string[]> = {
  '100': ['base'],
  '200': ['subtle'],
  '300': [],
  '400': ['muted'],
  '500': [],
  '600': ['contrast1'],
  '700': [],
  '800': ['contrast2'],
  '900': [],
  '950': ['contrast3'],
}

export function resolveColorGroup(colorName: string): ColorGroup {
  if (colorName === 'alpha' || colorName === 'shade' || colorName === 'grayalpha') {
    return 'alpha'
  }
  if (colorName === 'fg' || colorName === 'bg' || colorName === 'contrast') {
    return 'contrast'
  }
  if (colorName === 'gray' || colorName === 'neutral') {
    return 'gray'
  }
  return 'accent'
}
