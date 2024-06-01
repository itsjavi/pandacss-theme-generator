import { definePreset, defineTokens } from '@pandacss/dev'
import { presetPatterns } from './patterns'
import { presetRecipes, presetSlotRecipes } from './recipes'

const spacing = defineTokens.spacing({
  '0': {
    value: '0rem',
  },
  '1': {
    value: '0.25rem',
  },
  '2': {
    value: '0.5rem',
  },
  '3': {
    value: '0.75rem',
  },
  '4': {
    value: '1rem',
  },
  '5': {
    value: '1.25rem',
  },
  '6': {
    value: '1.5rem',
  },
  '7': {
    value: '1.75rem',
  },
  '8': {
    value: '2rem',
  },
  '9': {
    value: '2.25rem',
  },
  '10': {
    value: '2.5rem',
  },
  '11': {
    value: '2.75rem',
  },
  '12': {
    value: '3rem',
  },
  '14': {
    value: '3.5rem',
  },
  '16': {
    value: '4rem',
  },
  '20': {
    value: '5rem',
  },
  '24': {
    value: '6rem',
  },
  '28': {
    value: '7rem',
  },
  '32': {
    value: '8rem',
  },
  '36': {
    value: '9rem',
  },
  '40': {
    value: '10rem',
  },
  '44': {
    value: '11rem',
  },
  '48': {
    value: '12rem',
  },
  '52': {
    value: '13rem',
  },
  '56': {
    value: '14rem',
  },
  '60': {
    value: '15rem',
  },
  '64': {
    value: '16rem',
  },
  '72': {
    value: '18rem',
  },
  '80': {
    value: '20rem',
  },
  '96': {
    value: '24rem',
  },
  '0.5': {
    value: '0.125rem',
  },
  '1.5': {
    value: '0.375rem',
  },
  '2.5': {
    value: '0.625rem',
  },
  '3.5': {
    value: '0.875rem',
  },
  prose: {
    value: '70ch',
  },
  // titlebarAreaTop: {
  //   value: 'env(titlebar-area-y, 0px)',
  // },
  // titlebarAreaLeft: {
  //   value: 'env(titlebar-area-x, 0px)',
  // },
  // titlebarAreaWidth: {
  //   value: 'env(titlebar-area-width, 100%)',
  // },
  // titlebarAreaHeight: {
  //   value: 'env(titlebar-area-height, auto)',
  // },
  // titlebarAreaRight: {
  //   value: 'calc(100vw - env(titlebar-area-width, 100vw) - env(titlebar-area-x, 0px))',
  // },
  // safeAreaInsetTop: {
  //   value: 'env(safe-area-inset-top, 20px)',
  // },
  // safeAreaInsetRight: {
  //   value: 'env(safe-area-inset-right, 0px)',
  // },
  // safeAreaInsetBottom: {
  //   value: 'env(safe-area-inset-bottom, 0px)',
  // },
  // safeAreaInsetLeft: {
  //   value: 'env(safe-area-inset-left, 0px)',
  // },
})

export const appCorePandaPreset = definePreset({
  conditions: {
    extend: {
      collapsed: '&:is([aria-collapsed=true], [data-collapsed], [data-state="collapsed"])',
      current: '&:is([data-current])',
      hidden: '&:is([hidden])',
      hover: ['@media (hover: hover) and (pointer: fine)', '&:is(:hover, [data-hover])'],
      indeterminate: '&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])',
      off: '&:is([data-state="off"])',
      on: '&:is([data-state="on"])',
      today: '&:is([data-today])',
      underValue: '&:is([data-state="under-value"])',
      // inert: '&:is([inert])',
      // standalone: '@media (display-mode: standalone)',
      // reducedMotion: '@media (prefers-reduced-motion)',
      // reducedTransparency: '@media (prefers-reduced-transparency)',
      // screenOnly: '@media screen',
      // printOnly: '@media print',
    },
  },
  theme: {
    extend: {
      breakpoints: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1512px',
        fullhd: '1920px',
      },
      textStyles: {
        xs: {
          value: {
            fontSize: 'xs',
            lineHeight: '1.125rem',
          },
        },
        sm: {
          value: {
            fontSize: 'sm',
            lineHeight: '1.25rem',
          },
        },
        md: {
          value: {
            fontSize: 'md',
            lineHeight: '1.5rem',
          },
        },
        lg: {
          value: {
            fontSize: 'lg',
            lineHeight: '1.75rem',
          },
        },
        xl: {
          value: {
            fontSize: 'xl',
            lineHeight: '1.875rem',
          },
        },
        '2xl': {
          value: {
            fontSize: '2xl',
            lineHeight: '2rem',
          },
        },
        '3xl': {
          value: {
            fontSize: '3xl',
            lineHeight: '2.375rem',
          },
        },
        '4xl': {
          value: {
            fontSize: '4xl',
            lineHeight: '2.75rem',
            letterSpacing: '-0.02em',
          },
        },
        '5xl': {
          value: {
            fontSize: '5xl',
            lineHeight: '3.75rem',
            letterSpacing: '-0.02em',
          },
        },
        '6xl': {
          value: {
            fontSize: '6xl',
            lineHeight: '4.5rem',
            letterSpacing: '-0.02em',
          },
        },
        '7xl': {
          value: {
            fontSize: '7xl',
            lineHeight: '5.75rem',
            letterSpacing: '-0.02em',
          },
        },
      },
      tokens: {
        // ---- COLORS ----
        gradients: {
          transparent: {
            value: 'transparent',
          },
          black: {
            value: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))',
          },
          white: {
            value: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))',
          },
          checkerboard: {
            value: 'repeating-conic-gradient(rgba(255, 255, 255, 0.15) 0% 25%, rgba(0, 0, 0, 0.15) 0% 50%)',
          },
        },
        // ---- BORDERS ----
        borders: { none: { value: 'none' } },
        borderWidths: {
          none: { value: '0' },
          xs: { value: '1px' },
          sm: { value: '2px' },
          md: { value: '4px' },
          lg: { value: '6px' },
          xl: { value: '8px' },
        },
        // ---- TYPOGRAPHY ----
        fonts: {
          sans: {
            value: [
              'ui-sans-serif',
              'system-ui',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              '"Noto Sans"',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"',
            ],
          },
          serif: {
            value: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
          },
          mono: {
            value: [
              'ui-monospace',
              'SFMono-Regular',
              'Menlo',
              'Monaco',
              'Consolas',
              '"Liberation Mono"',
              '"Courier New"',
              'monospace',
            ],
          },
        },
        fontSizes: {
          '2xs': {
            value: '0.5rem',
          },
          xs: {
            value: '0.75rem',
          },
          sm: {
            value: '0.875rem',
          },
          md: {
            value: '1rem',
          },
          lg: {
            value: '1.125rem',
          },
          xl: {
            value: '1.25rem',
          },
          '2xl': {
            value: '1.5rem',
          },
          '3xl': {
            value: '1.875rem',
          },
          '4xl': {
            value: '2.25rem',
          },
          '5xl': {
            value: '2.5rem',
          },
          '6xl': {
            value: '3rem',
          },
          '7xl': {
            value: '3.5rem',
          },
          '8xl': {
            value: '4.5rem',
          },
          '9xl': {
            value: '6rem',
          },
        },
        fontWeights: {
          extralight: {
            value: '100',
          },
          light: {
            value: '200',
          },
          semilight: {
            value: '300',
          },
          normal: {
            value: '400',
          },
          medium: {
            value: '500',
          },
          semibold: {
            value: '600',
          },
          bold: {
            value: '700',
          },
          extrabold: {
            value: '800',
          },
          black: {
            value: '900',
          },
        },
        lineHeights: {
          none: {
            value: '1',
          },
          tighter: {
            value: '1.25',
          },
          tight: {
            value: '1.375',
          },
          normal: {
            value: '1.5',
          },
          loose: {
            value: '1.625',
          },
          looser: {
            value: '2',
          },
        },
        letterSpacings: {
          tighter: {
            value: '-0.05em',
          },
          tight: {
            value: '-0.025em',
          },
          normal: {
            value: '0em',
          },
          wide: {
            value: '0.025em',
          },
          wider: {
            value: '0.05em',
          },
          widest: {
            value: '0.1em',
          },
        },
        // ---- UNITS ----
        spacing: spacing,
        sizes: {
          ...spacing,
          xxs: {
            value: '12rem',
          },
          '2xs': {
            value: '16rem',
          },
          xs: {
            value: '20rem',
          },
          sm: {
            value: '24rem',
          },
          md: {
            value: '28rem',
          },
          lg: {
            value: '32rem',
          },
          xl: {
            value: '36rem',
          },
          '2xl': {
            value: '42rem',
          },
          '3xl': {
            value: '48rem',
          },
          '4xl': {
            value: '56rem',
          },
          '5xl': {
            value: '64rem',
          },
          '6xl': {
            value: '72rem',
          },
          '7xl': {
            value: '80rem',
          },
          '8xl': {
            value: '90rem',
          },
          full: {
            value: '100%',
          },
          fullvw: {
            value: '100vw',
          },
          fullvh: {
            value: '100vh',
          },
          min: {
            value: 'min-content',
          },
          max: {
            value: 'max-content',
          },
          fit: {
            value: 'fit-content',
          },
        },
        zIndex: {
          hide: {
            value: -1,
          },
          base: {
            value: 0,
          },
          z1: {
            value: 1,
          },
          docked: {
            value: 10,
          },
          dropdown: {
            value: 1000,
          },
          sticky: {
            value: 1100,
          },
          banner: {
            value: 1200,
          },
          overlay: {
            value: 1300,
          },
          modal: {
            value: 1400,
          },
          popover: {
            value: 1500,
          },
          skipLink: {
            value: 1600,
          },
          toast: {
            value: 1700,
          },
          tooltip: {
            value: 1800,
          },
        },
        radii: {
          none: { value: '0' },
          xs: { value: '0.125rem' },
          sm: { value: '0.25rem' },
          md: { value: '0.5rem' },
          lg: { value: '0.75rem' },
          xl: { value: '1.5rem' },
          full: { value: '9999px' },
        },
        aspectRatios: {
          square: {
            value: '1 / 1',
          },
          landscape: {
            value: '4 / 3',
          },
          portrait: {
            value: '3 / 4',
          },
          wide: {
            value: '16 / 9',
          },
          ultrawide: {
            value: '18 / 5',
          },
          golden: {
            value: '1.618 / 1',
          },
        },
        // ---- TRANSPARENCIES ----
        opacity: {
          none: { value: 0 },
          subtle: { value: 0.125 },
          semisolid: { value: 0.5 },
          full: { value: 1 },
        },
        shadows: {
          xs: {
            value: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          },
          sm: {
            value: ['0 1px 3px 0 rgb(0 0 0 / 0.1)', '0 1px 2px -1px rgb(0 0 0 / 0.1)'],
          },
          md: {
            value: ['0 4px 6px -1px rgb(0 0 0 / 0.1)', '0 2px 4px -2px rgb(0 0 0 / 0.1)'],
          },
          lg: {
            value: ['0 10px 15px -3px rgb(0 0 0 / 0.1)', '0 4px 6px -4px rgb(0 0 0 / 0.1)'],
          },
          xl: {
            value: ['0 20px 25px -5px rgb(0 0 0 / 0.1)', '0 8px 10px -6px rgb(0 0 0 / 0.1)'],
          },
          '2xl': {
            value: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
          },
          inner: {
            value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
          },
          borderInset1: {
            value: 'inset 0 0 0 1px hsla(0, 0%, 100%, .1)',
          },
        },
        blurs: {
          sm: {
            value: '4px',
          },
          base: {
            value: '8px',
          },
          md: {
            value: '12px',
          },
          lg: {
            value: '16px',
          },
          xl: {
            value: '24px',
          },
          '2xl': {
            value: '40px',
          },
          '3xl': {
            value: '64px',
          },
        },
        // ---- ANIMATION ----
        animations: {
          spin: {
            value: 'spin 1s linear infinite',
          },
          ping: {
            value: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
          },
          pulse: {
            value: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          },
          bounce: {
            value: 'bounce 1s infinite',
          },
        },
        durations: {
          fastest: {
            value: '50ms',
          },
          faster: {
            value: '100ms',
          },
          fast: {
            value: '150ms',
          },
          normal: {
            value: '200ms',
          },
          slow: {
            value: '300ms',
          },
          slower: {
            value: '400ms',
          },
          slowest: {
            value: '500ms',
          },
        },
        // OTHER
        // assets: {},
        // containerNames: {},
      },
      semanticTokens: {
        shadows: {
          borderInset: {
            value: {
              base: 'inset 0 0 0 1px hsla(0, 0%, 0%, .1)',
              _dark: 'inset 0 0 0 1px hsla(0, 0%, 100%, .1)',
            },
          },
        },
      },
      // textStyles: {},
      // keyframes: {},
      // breakpoints: {},
      // containerSizes: {},
      // layerStyles: {},
      recipes: presetRecipes,
      slotRecipes: presetSlotRecipes,
    },
  },
  // globalCss: { extend: {} },
  patterns: { extend: presetPatterns },
  // utilities: { extend: {} },
  globalCss: {
    html: {
      lineHeight: 1.5,
      textRendering: 'optimizeLegibility',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      WebkitTextSizeAdjust: '100%',
      height: '100%',
    },
    body: {
      fontFamily: 'var(--font-inter), sans-serif',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      height: 'fit-content',
      maxHeight: '100%',
      lineHeight: 'inherit',
      minWidth: '320px',
      _dark: {
        colorScheme: 'dark',
        bg: '#282828',
      },
    },
    '*, *::before, *::after': {
      position: 'relative',
      borderColor: 'transparent',
      borderStyle: 'solid',
    },
    '[hidden]': {
      display: 'none',
    },
    '[inert]': {
      pointerEvents: 'none',
    },
    '::selection': {
      bgColor: 'var(--colors-primary-800)',
      color: 'var(--colors-contrast-dark-800)',
    },
  },
})
