export type ColorScheme = 'light' | 'dark'

export const colorNames = [
  'contrast',
  'gray',
  'shade',
  'blue',
  'red',
  'yellow',
  'green',
  'teal',
  'purple',
  'pink',
] as const

export const colorNameAliases = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'danger',
  'warning',
  'success',
  'info',
] as const
export const colorLevels = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const

export const colorLevelAliases = [
  'bg1',
  'bg2',
  'bg3',
  'border1',
  'border2',
  'border3',
  'solid1',
  'solid2',
  'fg1',
  'fg2',
] as const

export type ColorName = (typeof colorNames)[number]
export type ColorNameAlias = (typeof colorNameAliases)[number]
export type ColorLevel = (typeof colorLevels)[number]
export type ColorLevelAlias = (typeof colorLevelAliases)[number]

export const colorNameMap: Record<ColorNameAlias, ColorName> = {
  neutral: 'gray',
  primary: 'blue',
  secondary: 'gray',
  accent: 'blue',
  danger: 'red',
  warning: 'yellow',
  success: 'green',
  info: 'teal',
}

export const colorNameReverseMap: Partial<Record<ColorName, ColorNameAlias>> = {
  gray: 'neutral',
  blue: 'primary',
  red: 'danger',
  yellow: 'warning',
  green: 'success',
  teal: 'info',
  purple: 'secondary',
  pink: 'accent',
}

export const colorLevelMap: Record<ColorLevelAlias, ColorLevel> = {
  bg1: '100',
  bg2: '200',
  bg3: '300',
  border1: '400',
  border2: '500',
  border3: '600',
  solid1: '700',
  solid2: '800',
  fg1: '900',
  fg2: '950',
}

export const colorLevelReverseMap: Record<ColorLevel, ColorLevelAlias> = {
  100: 'bg1',
  200: 'bg2',
  300: 'bg3',
  400: 'border1',
  500: 'border2',
  600: 'border3',
  700: 'solid1',
  800: 'solid2',
  900: 'fg1',
  950: 'fg2',
}

// -- Colors
export type TailwindColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
export type GeistColorScale = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
export type RadixColorScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type RadixAccentColor = (typeof radixAccentColors)[number]
const radixAccentColors = [
  'gray',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'bronze',
  'gold',
  'brown',
  'orange',
  'amber',
  'yellow',
  'lime',
  'mint',
  'sky',
] as const

export type RadixGrayColor = (typeof radixGrayColors)[number]
const radixGrayColors = ['gray', 'mauve', 'olive', 'sage', 'sand', 'slate'] as const

const geistColors = ['gray', 'alphagray', 'blue', 'red', 'amber', 'green', 'teal', 'purple', 'pink'] as const
export type GeistColor = (typeof geistColors)[number]
