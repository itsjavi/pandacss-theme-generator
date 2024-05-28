import { css } from '@/styled-system/css'
import { Overlay } from '@/styled-system/jsx'

import { cn } from '@/lib/utils'

const cls = {
  base: css({
    overflow: 'hidden',
    perspective: '450px',
    perspectiveOrigin: '50% 50%',
    width: '100%',
    top: '50%',
    opacity: 0.5,
  }),

  gridFade: css({
    // bg: '#0e1416',
    transform: 'rotateX(0deg)',
    bg: 'radial-gradient(ellipse at 50% 50%, transparent 0%, {colors.colorPalette.7/90} 70%)',
    zIndex: 1,
  }),

  gridLines: css({
    inset: 'auto',
    top: 0,
    left: 0,
    width: '100%',
    height: '200%',

    backgroundImage:
      'linear-gradient(to right, {colors.colorPalette.11/80} 1px, transparent 0), linear-gradient(to bottom, {colors.colorPalette.11/60} 1px, transparent 0)',
    backgroundSize: '45px 30px',
    backgroundRepeat: 'repeat',
    transformOrigin: '100% 0 0',
    transform: 'rotateX(45deg)',
    // animation: 'play 15s linear infinite',
  }),

  animated: css({
    animation: 'bgRetroGrid',
    animationDirection: 'reverse',
    animationFillMode: 'both',
  }),
}

type BgProps = {
  className?: string
  children?: React.ReactNode
  position?: 'fixed' | 'absolute'
  animated?: boolean
}

export default function BgRetroGrid({ className, position = 'fixed', animated, children }: BgProps) {
  return (
    <Overlay position={position} className={cn(cls.base, className)}>
      <Overlay position={'absolute'} className={cn(cls.gridFade)} />
      <Overlay position={'absolute'} className={cn(cls.gridLines, { [cls.animated]: animated })}>
        {children}
      </Overlay>
    </Overlay>
  )
}
