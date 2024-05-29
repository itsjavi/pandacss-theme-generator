import { cn } from '@/lib/utils'
import { type RecipeVariantProps, cva } from '@/styled-system/css'

const hero = cva({
  base: {
    fontSize: 'lg',
    fontWeight: '700',
    lineHeight: '1.5ch',
    paddingBottom: '0.2ch', // avoids ligature cropping
    letterSpacing: 'tighter',
    color: 'fg.contrast',
    // textGradient: 'to-br',
    // gradientFrom: 'fg.100',
    // gradientVia: 'fg.200',
    // gradientTo: 'fg.100',
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
      md: {
        fontSize: '2xl',
        smDown: {
          fontSize: 'xl',
        },
      },
      sm: {
        fontSize: 'xl',
        smDown: {
          fontSize: 'lg',
        },
      },
      xs: {
        fontSize: 'lg',
        smDown: {
          fontSize: 'md',
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
