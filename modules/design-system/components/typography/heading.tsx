import { cn } from '@/lib/utils'
import { type RecipeVariantProps, cva } from '@/styled-system/css'

const heading = cva({
  base: {
    fontSize: 'lg',
    fontWeight: '700',
    lineHeight: '1.5ch',
    paddingBottom: '0.2ch', // avoids ligature cropping
    letterSpacing: 'tighter',
    color: 'gray.fg2',
    // textGradient: 'to-br',
    // gradientFrom: 'contrast.100',
    // gradientVia: 'contrast.200',
    // gradientTo: 'contrast.100',
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
    size: 'xl',
  },
})

type HeadingVariants = RecipeVariantProps<typeof heading>

type HeadingTitleProps = {
  className?: string
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
} & React.ComponentProps<'div'> &
  HeadingVariants

export default function Heading({ className, children, size, as: Comp = 'div', ...props }: HeadingTitleProps) {
  return (
    <Comp className={cn(heading({ size }), className)} {...props}>
      {children}
    </Comp>
  )
}
