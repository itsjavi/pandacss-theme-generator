import { css } from '@/styled-system/css'
import { Overlay } from '@/styled-system/jsx'

import { cn } from '@/lib/utils'

const cls = {
  base: css({}),
}

type EditorProps = {
  className?: string
  children?: React.ReactNode
  position?: 'fixed' | 'absolute'
}

export default function BgGradient({ className, position = 'fixed', children }: EditorProps) {
  return (
    <Overlay position={position} className={cn(cls.base, className)}>
      {children}
    </Overlay>
  )
}
