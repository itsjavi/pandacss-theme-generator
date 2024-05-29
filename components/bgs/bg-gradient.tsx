import { css } from '@/styled-system/css'
import { Overlay } from '@/styled-system/jsx'

import { cn } from '@/lib/utils'

const cls = {
  bg: css({
    colorPalette: 'neutral',
    bgGradient: 'to-b',
    gradientFrom: 'colorPalette.100',
    gradientVia: 'colorPalette.100',
    gradientTo: 'colorPalette.200',
    // gradientVia: 'colorPalette.5',
    // bg: 'colorPalette.6',
    _dark: {
      gradientFrom: 'colorPalette.900',
      gradientVia: 'colorPalette.900',
      gradientTo: 'colorPalette.800',
      // gradientFrom: 'colorPalette.1',
      // gradientTo: 'colorPalette.7',
      // bg: 'colorPalette.7',
    },
  }),
}

type BgProps = {
  className?: string
  children?: React.ReactNode
  position?: 'fixed' | 'absolute'
}

export default function BgGradient({ className, position = 'fixed', children }: BgProps) {
  return (
    <Overlay position={position} className={cn(cls.bg, className)}>
      {children}
    </Overlay>
  )
}
