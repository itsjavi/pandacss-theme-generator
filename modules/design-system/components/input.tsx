'use client'

import { cva } from '@/styled-system/css'
import { ark } from '@ark-ui/react/factory'
import { type ComponentProps, type ReactNode, useId } from 'react'
import { createVariantComponent } from '../lib/create-component'
import { PandaDiv, PandaLabel } from './panda'

const inputStyle = cva({
  base: {
    width: 'full',
    appearance: 'none',
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

const InputCmp = createVariantComponent(ark.input, inputStyle)
export type InputProps = Omit<ComponentProps<typeof InputCmp>, 'size'> & {
  size?: (typeof inputStyle)['variantMap']['size'][number]
  label?: ReactNode
}

function InputLabel({ label, htmlFor }: { label: ReactNode; htmlFor: string }) {
  return (
    <PandaLabel display="block" fontSize="sm" fontWeight="semibold" mb="1" color="muted.100" htmlFor={htmlFor}>
      {label}
    </PandaLabel>
  )
}

export function Input({ className, label, ...props }: InputProps) {
  const inputId = props.id || useId()
  return (
    <PandaDiv className={className} display="flex" maxW="full" w="full" flexDir="column">
      {label && <InputLabel label={label} htmlFor={inputId} />}
      {/* biome-ignore lint/suspicious/noExplicitAny: some issue with "size" */}
      <InputCmp id={inputId} autoCorrect="off" spellCheck="false" {...(props as any)} />
    </PandaDiv>
  )
}
