'use client'
import { type Color, converter, formatCss, formatRgb } from 'culori'

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

export function parseColor(color: string) {
  try {
    const parsed = oklchConverter(color)
    return parsed //new Color(parsed.space, parsed.values as [number, number, number], parsed.alpha)
  } catch (error) {
    throw new Error(`Color parsing failed for: ${color}, error: ${error}`)
  }
}

export function formatColor(color: Color): string {
  try {
    const parsed = formatCss(color)
    return parsed
  } catch (error) {
    throw new Error(`Color formatting failed for: ${JSON.stringify(color)}, error: ${error}`)
  }
}

export function formatColorAsRgb(color: Color): string {
  try {
    const parsed = formatRgb(color)
    return parsed
  } catch (error) {
    throw new Error(`Color formatting failed for: ${JSON.stringify(color)}, error: ${error}`)
  }
}
