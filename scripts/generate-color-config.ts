import fs from 'node:fs'
import { geistColorTokens } from './geist-colors'

type OklchaColor = {
  l: number
  c: number
  h: number
  a: number
}
type ColorGroup = 'background' | 'contrast' | 'alpha' | 'gray' | 'accent'
type ColorLevel = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
type ColorLevelKey = `${ColorLevel}`
type ColorConfigValue = {
  light: string
  dark: string
  aliases: string[] // aliases for the level
}
type ColorConfig = {
  name: string
  group: ColorGroup
  aliases: string[] // aliases for the color
  scale: Partial<Record<ColorLevelKey, ColorConfigValue>>
  defaultLevel: ColorLevelKey
}

function getColorGroup(colorName: string): ColorGroup {
  if (colorName === 'alpha' || colorName === 'shade' || colorName === 'grayalpha') {
    return 'alpha'
  }
  if (colorName === 'bg' || colorName === 'background') {
    return 'background'
  }
  if (colorName === 'fg' || colorName === 'contrast') {
    return 'contrast'
  }
  if (colorName === 'gray' || colorName === 'neutral') {
    return 'gray'
  }
  return 'accent'
}

const colorAliasMap: Record<string, string[]> = {
  background: [],
  contrast: [],
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

const colorLevelAliasMap: Record<ColorLevelKey, string[]> = {
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

const contrastColorLevelAliasMap: Record<ColorLevelKey, string[]> = {
  '100': [],
  '200': [],
  '300': [],
  '400': [],
  '500': [],
  '600': [],
  '700': [],
  '800': [],
  '900': [],
  '950': [],
}

const colorSystem: Record<string, ColorConfig> = {}

function chooseBestColor(prev: string | undefined, currentValue: string): string {
  if (!prev || prev === 'transparent' || prev === '' || currentValue.match(/ok|p3/i)) {
    return currentValue
  }

  return prev
}

for (const [colorName, colorData] of Object.entries(geistColorTokens)) {
  const isP3Color = colorName.endsWith('P3')
  const nonP3ColorName = isP3Color ? colorName.slice(0, -2) : colorName
  const colorGroup = getColorGroup(nonP3ColorName)
  const isBgFg = ['contrast', 'background'].includes(colorGroup)
  colorSystem[nonP3ColorName] ??= {
    name: nonP3ColorName,
    group: colorGroup,
    aliases: colorAliasMap[nonP3ColorName] ?? [],
    scale: {},
    defaultLevel: isBgFg ? '100' : '600',
  }

  for (const [colorScheme, colorLevels] of Object.entries(
    colorData as Record<'light' | 'dark', Record<string, { value: string }>>,
  )) {
    for (const [colorLevel, colorLevelData] of Object.entries(
      colorLevels as Record<ColorLevelKey, { value: string }>,
    )) {
      if (colorLevel === 'DEFAULT') {
        continue
      }
      const typedColorLevel = colorLevel as ColorLevelKey
      if (typeof colorSystem[nonP3ColorName] === 'undefined') {
        throw new Error(`Color ${nonP3ColorName} does not have a ${colorScheme} value`)
      }
      const typedScheme = colorScheme as 'light' | 'dark'
      const levelAliasMap = isBgFg ? contrastColorLevelAliasMap : colorLevelAliasMap

      const prevColorValue = colorSystem[nonP3ColorName].scale[typedColorLevel]
      colorSystem[nonP3ColorName].scale[typedColorLevel] = {
        light: 'transparent',
        dark: 'transparent',
        aliases: levelAliasMap[typedColorLevel] ?? [],
        ...prevColorValue,
        ...{
          [typedScheme]: chooseBestColor(prevColorValue?.[typedScheme], colorLevelData.value),
        },
      }
    }
  }
}

// for (const [colorName, colorData] of Object.entries(presetColors)) {
//   const isP3Color = colorName.endsWith('P3')
//   const nonP3ColorName = isP3Color ? colorName.slice(0, -2) : colorName
//   colorPalette[nonP3ColorName] ??= {
//     name: nonP3ColorName,
//     group: getColorType(nonP3ColorName),
//     aliases: colorAliasMap[nonP3ColorName] ?? [],
//     scale: {},
//   }

//   for (const [colorScheme, colorLevels] of Object.entries(
//     colorData as Record<'light' | 'dark', Record<string, { value: string }>>,
//   )) {
//     for (const [colorLevel, colorLevelData] of Object.entries(colorLevels)) {
//       if (colorLevel === 'DEFAULT') {
//         continue
//       }
//       if (typeof colorPalette[nonP3ColorName] === 'undefined') {
//         throw new Error(`Color ${nonP3ColorName} does not have a ${colorScheme} value`)
//       }
//       const schemeColors = colorPalette[nonP3ColorName][colorScheme as 'light' | 'dark']
//       if (!schemeColors[colorLevel]) {
//         schemeColors[colorLevel] = {}
//       }

//       if (isP3Color) {
//         schemeColors[colorLevel] = {
//           ...schemeColors[colorLevel],
//           oklch: colorLevelData.value,
//         }
//       } else {
//         schemeColors[colorLevel] = {
//           ...schemeColors[colorLevel],
//           srgb: colorLevelData.value,
//         }
//       }
//     }
//   }
// }

fs.writeFileSync('./scripts/output-colorsystem.json', JSON.stringify(colorSystem, null, 2))
