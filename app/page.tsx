import { PrimaryButton } from '@/components/ui/button'
import HeroTitle from '@/components/ui/hero-title'
import { cn } from '@/lib/utils'
import { css } from '@/styled-system/css'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

function HeadlineText() {
  return (
    <div>
      <p
        className={cn(
          css({
            fontSize: '3xl',
            maxWidth: '85ch',
            lineHeight: '1.5ch',
            fontVariationSettings: '"opsz" 32',
            // textShadow: '0 2px 2px rgba(0, 0, 0, 0.5)',
            smDown: {
              fontSize: '2xl',
              fontVariationSettings: '"opsz" 24',
            },
            paddingBottom: '0.6ch', // avoids ligature cropping
            letterSpacing: 'tighter',
            marginX: 'auto',
            colorPalette: 'neutral',
            color: 'colorPalette.600',
            _dark: {
              color: 'colorPalette.500',
            },
            // '&, & p, & b, & strong, & i, & span': {
            //   textGradient: 'to-br',
            //   gradientFrom: 'colorPalette.950',
            //   gradientVia: 'colorPalette.700',
            //   gradientTo: 'colorPalette.500',
            //   _dark: {
            //     gradientFrom: 'colorPalette.50',
            //     gradientVia: 'colorPalette.200',
            //     gradientTo: 'colorPalette.400',
            //   },
            // },
          }),
        )}
      >
        Create your own unique design system with <strong>Panda CSS</strong> and <strong>Ark UI</strong>.
      </p>
    </div>
  )
}

export default async function () {
  return (
    <div
      className={css({
        display: 'flex',
        flex: 1,
        alignItems: 'center',
      })}
    >
      <div
        className={css({
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'start',
          textAlign: 'left',
          gap: '4',
          padding: '8',
          maxWidth: '600px',
        })}
      >
        <HeroTitle>Panda Theme Generator</HeroTitle>
        <HeadlineText />
        <PrimaryButton asChild>
          <Link href="/components">
            Get started <ArrowRight />
          </Link>
        </PrimaryButton>
      </div>
    </div>
  )
}
