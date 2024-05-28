import { defineTokens } from '@pandacss/dev'

export const presetTokenEasings = defineTokens.easings({
  pulse: { value: 'cubic-bezier(0.4, 0.0, 0.6, 1.0)' },
  default: { value: 'cubic-bezier(0.2, 0.0, 0, 1.0)' },
  emphasizedIn: { value: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)' },
  emphasizedOut: { value: 'cubic-bezier(0.3, 0.0, 0.8, 0.15)' },
  slowStart: { value: 'cubic-bezier(0.4, 0.0, 1, 1)' },
  slowEnd: { value: 'cubic-bezier(0, 0, 0.2, 1)' },
  slowMid: { value: 'cubic-bezier(0.8, 0.4, 1, 0.5)' },
})
