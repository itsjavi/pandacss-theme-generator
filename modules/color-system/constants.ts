import type { ColorLevelKey } from './types'

export const colorLevels: ColorLevelKey[] = [
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
] as const

// @see https://vercel.com/geist/colors
export const colorLevelAliases = [
  /*100*/ 'bg1', // Default UI Component background // Hover if bg is bg.100
  /*200*/ 'bg2', // Hover UI Component background // Active if bg is bg.100
  /*300*/ 'bg3', // Active UI Component background
  /*400*/ 'border1', // Default border
  /*500*/ 'border2', // Hover border
  /*600*/ 'border3', // Active border or outline
  /*700*/ 'solid1', // High contrast background
  /*800*/ 'solid2', // Hover High contrast background
  /*900*/ 'fg1', // Secondary text and icons
  /*950*/ 'fg2', // Primary text and icons
] as const
