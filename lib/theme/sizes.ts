import { defineTokens } from '@pandacss/dev'
import { presetSpacing } from './spacing'

export const presetSizes = defineTokens.sizes({
  xxs: { value: '16rem' },
  '2xs': { value: '16rem' },
  xs: { value: '20rem' },
  sm: { value: '24rem' },
  md: { value: '28rem' },
  lg: { value: '32rem' },
  xl: { value: '36rem' },
  '2xl': { value: '42rem' },
  '3xl': { value: '48rem' },
  '4xl': { value: '56rem' },
  '5xl': { value: '64rem' },
  '6xl': { value: '72rem' },
  '7xl': { value: '80rem' },
  '8xl': { value: '90rem' },
  ...presetSpacing,
})
