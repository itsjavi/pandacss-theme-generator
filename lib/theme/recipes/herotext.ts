import { defineRecipe } from '@pandacss/dev'

export const herotextRecipe = defineRecipe({
  className: 'herotext',
  base: {
    maxWidth: 'prose',
    // colorPalette: 'gray',
    lineHeight: '1.5ch',
    paddingBottom: '0.6ch', // avoids ligature cropping
    letterSpacing: 'tighter',
    marginX: 'auto',
    textAlign: 'center',
    '&, & p, & b, & strong, & i, & span': {
      textGradient: 'to-br',
      gradientFrom: 'slate.11',
      gradientVia: 'slate.12',
      gradientTo: 'slate.11',
    },
  },
  // defaultVariants: {
  //   fontSize: 'lg',
  //   fontWeight: '700',
  // },
  // variants: {
  //   fontSize: {
  //     lg: {
  //       fontSize: '6xl',
  //     },
  //   },
  //   fontWeight: {
  //     '700': {
  //       fontWeight: '700',
  //     },
  //   },
  // },
})
