import { cn } from '@/lib/utils'
import { css } from '@/styled-system/css'
import type { ComponentProps } from 'react'
import BgGradient from './bg-gradient'
import BgRetroGrid from './bg-retro-grid'

const styleClass = css({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  minHeight: '100dvh',
})

type LayoutRootProps = ComponentProps<'div'> & {
  bgClassName?: string
  withBgPattern?: boolean
  withBgAnimation?: boolean
}
export default function LayoutRoot({
  className,
  children,
  bgClassName,
  withBgPattern,
  withBgAnimation,
  ...props
}: LayoutRootProps) {
  return (
    <>
      <BgGradient className={bgClassName} position="fixed">
        {withBgPattern && <BgRetroGrid position="absolute" animated={withBgAnimation} />}
      </BgGradient>
      <div className={cn(styleClass, className)} {...props}>
        {children}
      </div>
    </>
  )
}
