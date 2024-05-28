import type { Tokens } from '@pandacss/types'

export const presetTokenAnimations = {
  fadeup: {
    value: 'fadeup',
  },
  bgScrollToBottomRight: {},
  bgScrollToUp: {},
  bgPing: {},
  bgPingDown: {},
  bgRetroGrid: {
    value: 'bgRetroGrid 12s linear 1', // infinite is CPU intensive, so we'll just repeat it once
  },
} satisfies Tokens['animations']

export type PresetAnimationNames = keyof typeof presetTokenAnimations
