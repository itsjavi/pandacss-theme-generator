'use client'
import { type Color, type Oklch, converter, formatCss, formatRgb } from 'culori'
import type { ColorConfig2, ColorConfigValue, ColorCssStrings, ColorLevelCssStrings, ColorLevelKey } from '../types2'

// type ColorValues = [number, number, number]
// class ColorManipulator {
//   public space: string
//   public values: ColorValues
//   public alpha: number

//   constructor (space: string, values: ColorValues, alpha: number) {
//     this.space = space
//     this.values = values
//     this.alpha = alpha
//   }

//   public toString () {
//     switch (this.space) {
//       case 'rgb':
//         return `rgba(${this.values.join(', ')}, ${this.alpha})`
//       case 'hsl':
//         return `hsla(${this.values.join(', ')}, ${this.alpha})`
//       case 'oklch':
//         return `oklch(${this.values.join(', ')}, ${this.alpha})`
//       case 'lch':
//         return `lch(${this.values.join(', ')}, ${this.alpha})`
//       default:
//         throw new Error(`Cannot convert this color space: ${this.space}`)
//     }
//   }

//   public toOkString () {
//     return this.space === 'rgb' ? this.toRgb().toOkString() : this.toHsl().toOkString()
//   }
// }

const oklchConverter = converter('oklch')

export function formatColorConfig(config: ColorConfig2): Record<ColorLevelKey, ColorLevelCssStrings> {
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

export function formatColorAsOklch(color: string | Color): string {
  try {
    const parsed = formatCss(color)
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
