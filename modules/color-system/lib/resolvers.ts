import type { ColorGroup } from '../types'

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
