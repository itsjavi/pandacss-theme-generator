'use client'

import { cva } from '@/styled-system/css'
import { ark } from '@ark-ui/react/factory'
import { type ComponentProps, type ReactNode, useId } from 'react'
import { createVariantComponent } from '../lib/create-component'
import { InputLabel } from './input'
import { PandaDiv } from './panda'

const selectStyle = cva({
  base: {
    width: 'full',
    display: 'inline-flex',
    alignItems: 'center',
    borderColor: 'alpha.400',
    background: 'background.100',
    color: 'contrast.100',
    borderRadius: 'sm',
    borderWidth: '1.5px',
    outline: 'none',
    position: 'relative',
    transitionDuration: 'normal',
    transitionTimingFunction: 'default',
    transitionProperty: 'box-shadow, border-color',
    px: '4',
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    _focus: {
      borderColor: 'alpha.600',
    },
  },
  defaultVariants: {
    size: 'sm',
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

const SelectCmp = createVariantComponent(ark.select, selectStyle)
export type SelectProps = ComponentProps<typeof SelectCmp> & {
  label?: ReactNode
}

export function Select({ className, label, ...props }: SelectProps) {
  const inputId = props.id || useId()
  return (
    <PandaDiv className={className} display="flex" maxW="full" w="full" flexDir="column">
      {label && <InputLabel label={label} htmlFor={inputId} />}
      <SelectCmp autoCorrect="off" spellCheck="false" {...props} />
    </PandaDiv>
  )
}
