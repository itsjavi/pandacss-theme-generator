'use client'
import { type Color, type Oklch, converter, formatCss, formatRgb } from 'culori'
import type { ColorConfigValue, ColorCssStrings, ColorLevelCssStrings, ColorLevelKey, ColorScaleConfig } from '../types'

const oklchConverter = converter('oklch')

export function formatColorConfig(config: ColorScaleConfig): Record<ColorLevelKey, ColorLevelCssStrings> {
  return Object.entries(config.scale).reduce((acc, [level, color]) => {
    acc[level as ColorLevelKey] = formatColorConfigValue(color)
    return acc
  }, {} as ColorCssStrings)
}

export function formatColorConfigValue(config: ColorConfigValue): ColorLevelCssStrings {
  return {
    light: { srgb: formatColorAsRgb(config.light), oklch: formatColorAsOklch(config.light) },
    dark: { srgb: formatColorAsRgb(config.dark), oklch: formatColorAsOklch(config.dark) },
  }
}

export function parseColor(color: string | Color): Required<Oklch> {
  try {
    const parsed = oklchConverter(color)
    if (!parsed) {
      throw new Error(`Cannot parse color: ${JSON.stringify(color)}`)
    }
    return {
      h: 0,
      alpha: 1,
      ...parsed,
    }
  } catch (error) {
    throw new Error(`Color parsing failed for: ${color}, error: ${error}`)
  }
}

export function safeParseColor(color: string | Color): Required<Oklch> | undefined {
  try {
    return parseColor(color)
  } catch (error) {
    return undefined
  }
}

export function formatColorAsOklch(color: string | Color): string {
  try {
    const parsed = formatCss(parseColor(color))
    if (!parsed) {
      throw new Error(`Cannot format color: ${JSON.stringify(color)}`)
    }
    return parsed
  } catch (error) {
    throw new Error(`Color formatting failed for: ${JSON.stringify(color)}, error: ${error}`)
  }
}

export function formatColorAsRgb(color: string | Color): string {
  try {
    const parsed = formatRgb(color)
    if (!parsed) {
      throw new Error(`Cannot format color: ${JSON.stringify(color)}`)
    }
    return parsed
  } catch (error) {
    throw new Error(`Color formatting failed for: ${JSON.stringify(color)}, error: ${error}`)
  }
}
