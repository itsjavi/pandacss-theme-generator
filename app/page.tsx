import FullLayout from '@/components/layout/full-layout'
import Heading from '@/components/layout/heading'
import { PrimaryButton } from '@/components/ui/button'
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
            // fontVariationSettings: '"opsz" 32',
            // textShadow: '0 2px 2px rgba(0, 0, 0, 0.5)',
            smDown: {
              fontSize: '2xl',
              // fontVariationSettings: '"opsz" 24',
            },
            paddingBottom: '0.6ch', // avoids ligature cropping
            letterSpacing: 'tighter',
            marginX: 'auto',
            fontWeight: '300',
            color: 'fg.muted',
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
    <FullLayout withBgPattern withFooter>
      <div
        className={css({
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          color: 'gray.fg2',
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
          <Heading>Panda Color System Generator</Heading>
          <HeadlineText />
          <PrimaryButton asChild>
            <Link href="/colors">
              Get started <ArrowRight />
            </Link>
          </PrimaryButton>
        </div>
      </div>
    </FullLayout>
  )
}
