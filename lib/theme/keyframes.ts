import type { CssKeyframes } from '@pandacss/types'
import type { PresetAnimationNames } from './animations'

export const presetKeyframes: Record<PresetAnimationNames, CssKeyframes['string']> = {
  fadeup: {
    '0%': {
      opacity: 0,
      transform: 'translateY(16px)',
    },
    // '80%': {
    //   opacity: 0.6,
    // },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  bgScrollToBottomRight: {
    '0%': {
      backgroundPosition: '0% 0%',
    },
    '100%': {
      backgroundPosition: '100% 100%',
    },
  },
  bgScrollToUp: {
    '0%': {
      // opacity: 1,
      backgroundPosition: '50% 0%',
    },
    '100%': {
      // opacity: 0.2,
      backgroundPosition: '50% -100vh',
    },
  },
  bgPing: {
    '0%': {
      transform: 'scale(1)',
      opacity: 0.5,
    },
    '50%': {
      transform: 'scale(1.3)',
      opacity: 0.25,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0.5,
    },
  },
  bgPingDown: {
    to: {
      transform: 'scale(1)',
      opacity: 0.5,
    },
  },
  bgRetroGrid: {
    '0%': {
      transform: 'rotateX(45deg) translateY(-50%)',
    },
    '100%': {
      transform: 'rotateX(45deg) translateY(0)',
    },
  },
}
