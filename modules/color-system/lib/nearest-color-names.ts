import { type Color, colorsNamed, differenceCiede2000, nearest } from 'culori'

const namedColors = Object.keys(colorsNamed)
export const nearestColorNames = nearest(namedColors, differenceCiede2000())
export function safeNearestColorNames(color: string | Color, count = 1): Array<string | undefined> {
  try {
    return nearestColorNames(color, count)
  } catch (e) {
    return [undefined]
  }
}
