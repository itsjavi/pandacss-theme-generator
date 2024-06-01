export const colorSchemes = ['light', 'dark'] as const
export const colorGroups = ['bg', 'fg', 'alpha', 'gray', 'accent'] as const
export const colorAliases = [
  'bg',
  'fg',
  'alpha',
  'neutral',
  'primary',
  'secondary',
  'danger',
  'warning',
  'success',
  'info',
  // 'gray',
  // 'accent',
  // 'tertiary',
  // 'complement',
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
export const bfgColorLevelAliases = ['base', 'subtle', 'muted', 'contrast1', 'contrast2', 'contrast3'] as const

export const colorLevelToAlias: Record<(typeof colorLevels)[number], (typeof colorLevelAliases)[number]> = {
  '100': 'bg1',
  '200': 'bg2',
  '300': 'bg3',
  '400': 'border1',
  '500': 'border2',
  '600': 'border3',
  '700': 'solid1',
  '800': 'solid2',
  '900': 'fg1',
  '950': 'fg2',
}

export const bfgColorLevelToAlias: Record<
  (typeof colorLevels)[number],
  (typeof bfgColorLevelAliases)[number] | undefined
> = {
  '100': 'base',
  '200': 'subtle',
  '300': undefined,
  '400': 'muted',
  '500': undefined,
  '600': 'contrast1',
  '700': undefined,
  '800': 'contrast2',
  '900': undefined,
  '950': 'contrast3',
}
