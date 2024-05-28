import { css } from '@/styled-system/css'
import { Overlay } from '@/styled-system/jsx'

import { cn } from '@/lib/utils'

const cls = {
  bg: css({
    colorPalette: 'primary',
    bgGradient: 'to-b',
    gradientFrom: 'colorPalette.8',
    gradientVia: 'colorPalette.7',
    gradientTo: 'colorPalette.1',
    // gradientVia: 'colorPalette.5',
    // bg: 'colorPalette.6',
    _dark: {
      gradientFrom: 'colorPalette.1',
      gradientVia: 'colorPalette.7',
      gradientTo: 'colorPalette.10',
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
