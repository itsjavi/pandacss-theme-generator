import _ from 'lodash'
import { formatColor, formatColorAsRgb, parseColor } from './create-color'
import type { ColorConfig } from './types'

export default function modifyPaletteHue(newHue: number, palette: ColorConfig): ColorConfig {
  const newPalette = _.cloneDeep(palette)
  // newPalette.modifiedAt = new Date().toISOString()

  for (const scheme of ['light', 'dark'] as const) {
    const schemePalette = newPalette[scheme]

    for (const [level, value] of Object.entries(schemePalette)) {
      const srgbAsOklch = value?.srgb ? parseColor(value?.srgb) : undefined
      const oklch = value?.oklch ? parseColor(value?.oklch) : undefined

      if (srgbAsOklch) {
        srgbAsOklch.h = newHue
      }

      if (oklch) {
        oklch.h = newHue
      }

      newPalette[scheme][level] = {
        srgb: srgbAsOklch ? formatColorAsRgb(srgbAsOklch) : undefined,
        oklch: oklch ? formatColor(oklch) : undefined,
      }

      // if(level==='600') {
      //   console.log(newPalette[scheme][level])
      // }
    }
  }
  // console.log(newPalette)
  return newPalette
}
