import { definePreset } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { presetTokenAnimations } from './animations'
import { presetSemanticTokenColors, presetTokenColors } from './colors'
import { presetConditions } from './conditions'
import { presetTokenDurations } from './durations'
import { presetTokenEasings } from './easings'
import { presetKeyframes } from './keyframes'
import { presetPatterns } from './patterns'
import { presetRecipes } from './recipes'
import { presetSizes } from './sizes'
import { presetSpacing } from './spacing'
import { presetTextStyles } from './text-styles'
import { presetTokenZIndex } from './z-index'

const themePreset = definePreset({
  conditions: {
    extend: presetConditions,
  },
  patterns: {
    extend: presetPatterns,
  },
  theme: {
    ...pandaPreset.theme,
    tokens: {
      ...pandaPreset.theme.tokens,
      colors: presetTokenColors, // replace all the colors from preset-panda
    },
    semanticTokens: {
      colors: presetSemanticTokenColors,
    },
    textStyles: presetTextStyles,
    extend: {
      recipes: presetRecipes,
      tokens: {
        spacing: presetSpacing,
        sizes: presetSizes,
        borders: { none: { value: 'none' } },
        animations: presetTokenAnimations,
        durations: presetTokenDurations,
        easings: presetTokenEasings,
        zIndex: presetTokenZIndex,
      },
      keyframes: presetKeyframes,
    },
  },
})

export default themePreset
