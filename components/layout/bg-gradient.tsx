import { css } from '@/styled-system/css'
import { Overlay } from '@/styled-system/jsx'

import { cn } from '@/lib/utils'

const cls = {
  bg: css({
    bgGradient: 'to-b',
    gradientFrom: 'background.100',
    gradientVia: 'background.100',
    gradientTo: 'background.200',
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
