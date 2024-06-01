import { definePreset } from '@pandacss/dev'
// import { colorSystemPreset } from './preset-colors'
// const _semanticColors = colorSystemPreset.theme?.extend?.semanticTokens?.colors
// type SemanticColors = typeof _semanticColors
// const semanticColors = _semanticColors as NonNullable<SemanticColors>

export const colorAliasesPreset = definePreset({
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          // bg: semanticColors.background,
          // fg: semanticColors.contrast,
          muted: {
            100: {
              value: '{colors.gray.fg1}',
            },
            200: {
              value: '{colors.gray.fg2}',
            },
          },
        },
      },
    },
  },
})
