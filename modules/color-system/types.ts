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

export type ColorScaleConfig = {
  id?: string
  name: string
  group: ColorGroup
  aliases: string[] // aliases for the color
  scale: Partial<Record<ColorLevelKey, ColorConfigValue>>
  defaultLevel: ColorLevelKey
}

export type ColorActionPayload = {
  name: string
  newName?: string
  level: ColorLevelKey
  scheme: ColorScheme
  value: OklchColor
  valueCss: string
  alias?: string
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

export type ColorSystemConfig = {
  colors: ColorScaleConfig[]
}
