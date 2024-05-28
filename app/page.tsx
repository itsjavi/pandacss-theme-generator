import FullLayout from '@/components/layout/full-layout'
import Link from '@/components/primitives/link'
import { AccentButton, BlackButton } from '@/components/ui/button'
import { ActionInput } from '@/components/ui/input'
import LogoSvg from '@/lib/icons/logo-text.svg'
import { css } from '@/styled-system/css'
import { Flex } from '@/styled-system/jsx'
import { herotext } from '@/styled-system/recipes'

import { cn } from '@/lib/utils'
import { LayoutGridIcon, SearchIcon } from 'lucide-react'

function Logo() {
  return (
    <div
      className={css({
        display: 'inline-block',
        width: '200px',
        maxWidth: '100%',
        animationName: 'tada, rubberBand, zoomIn',
        animationDuration: '1s, 1s, 500ms',
        animationDelay: '1s, 0ms, 0s',
        animationTimingFunction: 'ease-in-out',
        animationFillMode: 'both',
      })}
    >
      <span className="sr-only">PandaCSS Theme Generator</span>
      <LogoSvg />
    </div>
  )
}

function HeadlineText() {
  return (
    <div>
      <p
        className={cn(
          css({
            fontSize: '4xl',
            maxWidth: '600px',
            lineHeight: 'tight',
            fontVariationSettings: '"opsz" 32',
            // textShadow: '0 2px 2px rgba(0, 0, 0, 0.5)',
            smDown: {
              fontSize: '3xl',
              fontVariationSettings: '"opsz" 24',
            },
          }),
          herotext(),
        )}
      >
        Create your own design system with <b>Panda CSS</b> and <b>Ark UI</b>.
      </p>
    </div>
  )
}

function Headline() {
  return (
    <h1
      className={css({
        maxWidth: 'prose',
      })}
    >
      <Logo />
      <HeadlineText />
    </h1>
  )
}

function HeroSection() {
  return (
    <div
      className={css({
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '4',
        padding: '8',
      })}
    >
      <Headline />
      <form
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: 'full',
          mb: '8',
        })}
      >
        <ActionInput size="hero" id="search_input" placeholder="Search Components (⌘+K)" type="search">
          <SearchIcon width={18} height={18} />
        </ActionInput>
      </form>
      <Flex gap="4" smDown={{ flexDirection: 'column', alignItems: 'center' }}>
        <BlackButton asChild>
          <Link href="/docs">
            <LayoutGridIcon /> Components
          </Link>
        </BlackButton>
        {/* <PlayerIcon direction="down" spriteSet="walk" animationSpeed={200} /> */}

        <AccentButton asChild>
          <Link href="/docs">Create your own</Link>
        </AccentButton>
      </Flex>
    </div>
  )
}

export default async function () {
  return (
    <FullLayout withBgPattern withBgAnimation>
      <HeroSection />
    </FullLayout>
  )
}
