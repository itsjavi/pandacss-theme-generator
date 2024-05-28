import { cva } from '@/styled-system/css'
import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { createVariantComponent } from '../create-component'

const buttonStyle = cva({
  base: {
    // cursor: 'pointer',
    // colorPalette: 'accent',
    appearance: 'none',
    borderRadius: 'sm',
    borderWidth: '1.5px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'semibold',
    minWidth: '0',
    outline: 'none',
    position: 'relative',
    transitionDuration: 'normal',
    transitionTimingFunction: 'default',
    transitionProperty: 'background, border-color, color, box-shadow, transform',
    paddingX: '4',
    paddingY: '3',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    _hidden: {
      display: 'none',
    },
    _disabled: {
      opacity: 0.8,
      filter: 'grayscale(0.5)',
      cursor: 'not-allowed',
      // pointerEvents: 'none',
    },
    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'colorPalette.8/50',
      outlineOffset: '0px',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    colorPalette: 'primary',
    shadow: 'none',
  },
  variants: {
    shadow: {
      none: {
        boxShadow: 'none',
      },
      lg: {
        boxShadow: '4px 5px 0px rgba(0, 0, 0, 0.18)',
        _active: {
          boxShadow: '1px 2px 0px rgba(0, 0, 0, 0.18)',
          transform: 'translate(3px, 4px)',
        },
      },
    },
    colorPalette: {
      neutral: {
        colorPalette: 'neutral',
      },
      gray: {
        colorPalette: 'gray',
      },
      primary: {
        colorPalette: 'primary',
      },
      accent: {
        colorPalette: 'accent',
      },
      danger: {
        colorPalette: 'danger',
      },
    },
    variant: {
      darkest: {
        background: 'colorPalette.1',
        color: 'colorPalette.fg',
        borderColor: 'colorPalette.1',
        _hover: {
          borderColor: 'colorPalette.1',
          background: 'colorPalette.1',
        },
        _light: {
          background: 'colorPalette.12',
          // color: 'white',
          borderColor: 'colorPalette.12',
          _hover: {
            borderColor: 'colorPalette.12',
            background: 'colorPalette.12',
          },
        },
      },
      solid: {
        // borderColor: 'currentColor',
        // colorPalette: 'accent',
        background: 'colorPalette.9',
        color: 'colorPalette.fg',
        borderColor: 'colorPalette.dark.3',
        _hover: {
          borderColor: 'colorPalette.dark.3',
          background: 'colorPalette.10',
        },
      },
      subtle: {
        // colorPalette: 'accent',
        borderColor: 'transparent',
        color: 'colorPalette.fg',
        background: 'colorPalette.3/50',
        _hover: {
          background: 'colorPalette.4/50',
        },
      },
      ghost: {
        // colorPalette: 'gray',
        borderColor: 'transparent',
        color: 'inherit',
        _hover: {
          color: 'colorPalette.fg',
          background: 'colorPalette.4/50',
        },
      },
      outline: {
        borderColor: 'currentColor',
        color: 'colorPalette.10',
        _hover: {
          color: 'colorPalette.fg',
          bg: 'colorPalette.3/50',
        },
      },
      link: {
        borderColor: 'transparent',
        color: 'inherit',
      },
      text: {
        borderColor: 'transparent',
        color: 'inherit',
        verticalAlign: 'baseline',
        height: 'auto!',
        px: '0!',
        minW: '0!',
      },
    },
    size: {
      sm: {
        h: '8',
        minW: '8',
        textStyle: 'sm',
        px: '2',
        gap: '2',
        '& svg': {
          fontSize: 'md',
          width: '4',
          height: '4',
        },
      },
      md: {
        h: '12',
        minW: '12',
        textStyle: 'md',
        px: '4',
        gap: '2',
        '& svg': {
          width: '5',
          height: '5',
        },
      },
      lg: {
        h: '16',
        minW: '16',
        textStyle: 'lg',
        px: '8',
        gap: '3',
        '& svg': {
          width: '6',
          height: '6',
        },
      },
    },
  },
  // compoundVariants: [
  //   {
  //     variant: 'solid',
  //     colorPalette: 'accent',
  //     css: {
  //       _dark: {
  //         color: 'colorPalette.1',
  //       },
  //     },
  //   },
  // ],
})

const Button = createVariantComponent(ark.button, buttonStyle)
export interface ButtonProps extends ComponentProps<typeof Button> {}

export const BlackButton = createVariantComponent(ark.button, buttonStyle, {
  variant: 'darkest',
  colorPalette: 'neutral',
  shadow: 'lg',
})
export const BlackButtonSm = createVariantComponent(ark.button, buttonStyle, {
  variant: 'darkest',
  colorPalette: 'neutral',
  shadow: 'lg',
  size: 'sm',
})
export const PrimaryButton = createVariantComponent(ark.button, buttonStyle, {
  variant: 'solid',
  colorPalette: 'primary',
  shadow: 'lg',
})
export const PrimaryButtonSm = createVariantComponent(ark.button, buttonStyle, {
  variant: 'solid',
  colorPalette: 'primary',
  shadow: 'lg',
  size: 'sm',
})
export const AccentButton = createVariantComponent(ark.button, buttonStyle, {
  variant: 'solid',
  colorPalette: 'accent',
  shadow: 'lg',
})
export const AccentButtonSm = createVariantComponent(ark.button, buttonStyle, {
  variant: 'solid',
  colorPalette: 'accent',
  shadow: 'lg',
  size: 'sm',
})
export const DangerButton = createVariantComponent(ark.button, buttonStyle, {
  variant: 'solid',
  colorPalette: 'danger',
  shadow: 'lg',
  size: 'sm',
})
export const DangerButtonSm = createVariantComponent(ark.button, buttonStyle, {
  variant: 'solid',
  colorPalette: 'danger',
  shadow: 'lg',
  size: 'sm',
})
export const InlineTextButton = createVariantComponent(ark.button, buttonStyle, {
  variant: 'text',
  size: 'sm',
})
