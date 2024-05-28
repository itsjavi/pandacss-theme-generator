import { defineTokens } from '@pandacss/dev'

export const presetSpacing = defineTokens.spacing({
  prose: { value: '72ch' },
  headerPatternHeight: { value: '5px' },
  titlebarAreaTop: { value: 'env(titlebar-area-y, 0px)' },
  titlebarAreaLeft: { value: 'env(titlebar-area-x, 0px)' },
  titlebarAreaWidth: { value: 'env(titlebar-area-width, 100%)' },
  titlebarAreaHeight: { value: 'env(titlebar-area-height, auto)' },
  titlebarAreaRight: { value: 'calc(100vw - env(titlebar-area-width, 100vw) - env(titlebar-area-x, 0px))' },
  safeAreaInsetTop: { value: 'env(safe-area-inset-top, 20px)' },
  safeAreaInsetRight: { value: 'env(safe-area-inset-right, 0px)' },
  safeAreaInsetBottom: { value: 'env(safe-area-inset-bottom, 0px)' },
  safeAreaInsetLeft: { value: 'env(safe-area-inset-left, 0px)' },
  headerHeight: { value: '55px' },
  headerDecoHeight: { value: '5px' },
  full: { value: '100%' },
  min: { value: 'min-content' },
  max: { value: 'max-content' },
  fit: { value: 'fit-content' },
})
