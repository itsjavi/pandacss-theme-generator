import { cn } from '@/lib/utils'
import { css, cva } from '@/styled-system/css'
import { ark } from '@ark-ui/react/factory'
import type { ComponentProps } from 'react'
import { createVariantComponent } from '../create-component'
import { PrimaryButton } from './button'

const inputStyle = cva({
  base: {
    colorPalette: 'primary',
    appearance: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    borderColor: 'colorPalette.7',
    background: 'colorPalette.uiBg/50',
    color: 'colorPalette.text',
    outline: 'none',
    position: 'relative',
    transitionDuration: 'normal',
    transitionTimingFunction: 'default',
    transitionProperty: 'box-shadow, border-color',
    borderRadius: 'sm',
    borderWidth: '1.5px',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    _focus: {
      borderColor: 'colorPalette.8',
      // boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      '2xs': { px: '1.5', h: '7', minW: '7', fontSize: 'xs' },
      xs: { px: '2', h: '8', minW: '8', fontSize: 'xs' },
      sm: { px: '2.5', h: '9', minW: '9', fontSize: 'sm' },
      md: { px: '3', h: '10', minW: '1$0', fontSize: 'md' },
      lg: { px: '3.5', h: '11', minW: '1$1', fontSize: 'md' },
      xl: { px: '4', h: '12', minW: '1$2', fontSize: 'lg' },
      '2xl': { px: '2', h: '16', minW: '1$6', textStyle: '3xl' },
      hero: { px: '4', py: '3', h: '16', width: 'full', md: { maxWidth: '60vw' } },
    },
  },
})

const actionInputStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'full',
  _focusWithin: {
    '& input, & button': {
      borderColor: 'colorPalette.8',
      outline: 'none',
      // borderColor: 'transparent',
      // boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
    },
  },
  '& input, & button': {
    borderColor: 'colorPalette.dark.3',
    // boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
  },
})

const actionInputInputStyle = css({
  borderColor: 'colorPalette.dark.3',
  borderRight: 'none',
  borderRightRadius: '0',
  bg: 'gray.1/50',
  _dark: {
    borderColor: 'colorPalette.dark.3',
  },
})

const actionInputButtonStyle = css({
  height: '100%',
  borderLeft: 'none',
  borderLeftRadius: '0',
  borderColor: 'colorPalette.dark.3',
  bg: 'colorPalette.dark.3',
  _dark: {
    borderColor: 'colorPalette.dark.3',
    bg: 'colorPalette.dark.3',
  },
})

const InputCmp = createVariantComponent(ark.input, inputStyle)
export interface InputProps extends Omit<ComponentProps<typeof InputCmp>, 'size'> {
  size?: (typeof inputStyle)['variantMap']['size'][number]
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Input: React.FC<InputProps> = InputCmp as any

export interface ActionInputProps extends InputProps {
  children: React.ReactNode
  buttonProps?: ComponentProps<typeof PrimaryButton>
}

export function ActionInput({ className, children, buttonProps, ...props }: ActionInputProps) {
  const { className: buttonClassName, ...buttonPropsRest } = buttonProps || {}

  return (
    <div className={cn(actionInputStyle, className)}>
      <Input {...props} className={actionInputInputStyle} />
      <PrimaryButton shadow="none" className={cn(actionInputButtonStyle, buttonClassName)} {...buttonPropsRest}>
        {children}
      </PrimaryButton>
    </div>
  )
}
