import * as allRadixColors from '@radix-ui/colors'

type RadixDefs = Record<string, Record<string, string>>
export type RadixLightDarkColors<Lvl extends string = string> = Record<
  string,
  Record<
    Lvl,
    {
      light: string
      dark: string
    }
  >
>

const paletteNames = Object.keys(allRadixColors)
const officialRadixColors: RadixLightDarkColors = {}

for (const paletteName of paletteNames) {
  if (paletteName.match(/(A|P3|P3A)$/) && !paletteName.match(/^(whiteA|blackA)$/)) {
    continue
  }
  const isDark = paletteName.match(/Dark$/)
  const schemeProp = isDark ? 'dark' : 'light'
  let colorName = paletteName.replace(/(Dark)$/, '').toLowerCase()
  if (colorName === 'gray') {
    colorName = 'neutral'
  }
  const colorPalette = (allRadixColors as RadixDefs)[paletteName]

  if (!officialRadixColors[colorName]) {
    officialRadixColors[colorName] = {}
  }

  for (const [level, colorHex] of Object.entries(colorPalette)) {
    const numericLevel = level.replace(/^[^\d]+/, '')
    if (officialRadixColors[colorName][numericLevel]) {
      officialRadixColors[colorName][numericLevel][schemeProp] = colorHex
    } else {
      officialRadixColors[colorName][numericLevel] = {
        light: colorHex,
        dark: colorHex,
        ...{ [schemeProp]: colorHex },
      }
    }
  }
}

export { officialRadixColors }
