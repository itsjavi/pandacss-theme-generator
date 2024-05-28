import { cn } from '@/lib/utils'
import { type RecipeVariantProps, cva } from '@/styled-system/css'

const hero = cva({
  base: {
    colorPalette: 'slate',
    fontSize: 'lg',
    fontWeight: '700',
    lineHeight: '1.5ch',
    paddingBottom: '0.6ch', // avoids ligature cropping
    letterSpacing: 'tighter',
    // textGradient: 'to-br',
    // gradientFrom: 'colorPalette.11',
    // gradientVia: 'colorPalette.12',
    // gradientTo: 'colorPalette.10',
    maxWidth: '600px',
    marginX: 'auto',
    textAlign: 'center',
  },
  variants: {
    size: {
      xxl: {
        fontSize: '6xl',
        smDown: {
          fontSize: '4xl',
        },
      },
      xl: {
        fontSize: '5xl',
        smDown: {
          fontSize: '3xl',
        },
      },
      lg: {
        fontSize: '4xl',
        smDown: {
          fontSize: '2xl',
        },
      },
    },
  },
  defaultVariants: {
    size: 'xxl',
  },
})

type HeroVariants = RecipeVariantProps<typeof hero>

type HeroTitleProps = {
  className?: string
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
} & React.ComponentProps<'div'> &
  HeroVariants

export default function HeroTitle({ className, children, size, as: Comp = 'div', ...props }: HeroTitleProps) {
  return (
    <Comp className={cn(hero({ size }), className)} {...props}>
      {children}
    </Comp>
  )
}
