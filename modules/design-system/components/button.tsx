import { cva } from '@/styled-system/css'
import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { createVariantComponent } from '../lib/create-component'

const buttonStyle = cva({
  base: {
    // cursor: 'pointer',
    appearance: 'none',
    colorPalette: 'gray',
    borderRadius: 'sm',
    borderWidth: '1.5px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'semibold',
    minWidth: '0',
    outline: 'none',
    transitionDuration: 'normal',
    transitionTimingFunction: 'default',
    transitionProperty: 'background, border-color, color, box-shadow, transform',
    paddingX: '4',
    paddingY: '3',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    color: 'inherit',
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
    _hover: {
      textDecoration: 'none',
      cursor: 'pointer',
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
      gray: {
        colorPalette: 'gray',
      },
      primary: {
        colorPalette: 'primary',
      },
      danger: {
        colorPalette: 'danger',
      },
      warning: {
        colorPalette: 'warning',
      },
      success: {
        colorPalette: 'success',
      },
      info: {
        colorPalette: 'info',
      },
    },
    variant: {
      solid: {
        background: 'colorPalette.solid1',
        color: 'contrast.dark',
        _hover: {
          background: 'colorPalette.solid2',
        },
      },
      subtle: {
        borderColor: 'transparent',
        color: 'colorPalette.fg1',
        background: 'colorPalette.bg3',
        _hover: {
          background: 'colorPalette.bg2',
        },
      },
      ghost: {
        borderColor: 'transparent',
        color: 'inherit',
        _hover: {
          color: 'colorPalette.fg1',
          background: 'colorPalette.bg1',
        },
      },
      outline: {
        borderColor: 'currentColor',
        color: 'colorPalette.fg1',
        _hover: {
          color: 'colorPalette.fg1',
          background: 'colorPalette.bg1',
        },
      },
      link: {
        bg: 'transparent',
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
  compoundVariants: [
    {
      variant: 'solid',
      colorPalette: 'gray',
      css: {
        color: 'gray.100',
        bg: 'gray.950',
        _hover: {
          bg: 'gray.900',
        },
      },
    },
    {
      variant: 'outline',
      colorPalette: 'gray',
      css: {
        borderColor: 'gray.900',
      },
    },
  ],
})

const Button = createVariantComponent(ark.button, buttonStyle)
export interface ButtonProps extends ComponentProps<typeof Button> {}

export const GrayButton = createVariantComponent(ark.button, buttonStyle, {
  variant: 'solid',
  colorPalette: 'gray',
  // shadow: 'lg',
})

export const PrimaryButton = createVariantComponent(ark.button, buttonStyle, {
  variant: 'solid',
  colorPalette: 'primary',
  // shadow: 'lg',
})
export const PrimaryButtonSm = createVariantComponent(ark.button, buttonStyle, {
  variant: 'solid',
  colorPalette: 'primary',
  // shadow: 'lg',
  size: 'sm',
})
export const DangerButton = createVariantComponent(ark.button, buttonStyle, {
  variant: 'solid',
  colorPalette: 'danger',
  // shadow: 'lg',
  size: 'sm',
})
export const DangerButtonSm = createVariantComponent(ark.button, buttonStyle, {
  variant: 'solid',
  colorPalette: 'danger',
  // shadow: 'lg',
  size: 'sm',
})
export const InlineTextButton = createVariantComponent(ark.button, buttonStyle, {
  variant: 'text',
  size: 'sm',
})

// black btns like geist
