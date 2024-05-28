import { cn } from '@/lib/utils'
import { css } from '@/styled-system/css'
import type { ComponentProps } from 'react'

const baseClassName = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2',
  paddingX: '6',
  paddingY: '6',
  // bgColor: 'colorPalette.2',
  maxWidth: 'full',
  // animation: 'fadeUp',
  // animationDuration: '500ms',
})

export default function LayoutMain({ className, children, ...props }: ComponentProps<'main'>) {
  return (
    <main className={cn(baseClassName, className)} {...props}>
      {children}
    </main>
  )
}
