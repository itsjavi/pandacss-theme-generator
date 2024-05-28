import { definePattern } from '@pandacss/dev'
import type { Patterns } from '@pandacss/types'

export const presetPatterns: Patterns = {
  overlay: definePattern({
    jsx: ['Overlay'],
    jsxElement: 'div',
    blocklist: ['position', 'top', 'left', 'right', 'bottom', 'zIndex'],
    defaultValues: {
      position: 'fixed',
      inset: '0',
      zIndex: undefined,
    },
    properties: {
      position: {
        type: 'enum',
        value: ['fixed', 'absolute'],
      },
      inset: {
        type: 'token',
        value: 'spacing',
      },
      zIndex: {
        type: 'token',
        value: 'zIndex',
      },
      fillMode: {
        type: 'enum',
        value: ['viewport-height', 'full'],
      },
    },
    transform: (props) => {
      const { position, inset, zIndex, fillMode, ...rest } = props
      const height = fillMode === 'viewport-height' ? '100vh' : undefined
      const insetValues = {
        top: inset,
        left: inset,
        right: inset,
        bottom: fillMode === 'viewport-height' ? undefined : inset,
      }
      return {
        position,
        zIndex,
        height,
        ...insetValues,
        ...rest,
      }
    },
  }),
}
