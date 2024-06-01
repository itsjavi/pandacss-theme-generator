import FullLayout from '@/components/layout/full-layout'
import { PandaDiv, PandaP } from '@/modules/design-system/components/panda'
import { PrimaryButton } from '@/ui/components/button'
import Heading from '@/ui/components/typography/heading'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

function HeadlineText() {
  return (
    <div>
      <PandaP
        css={{
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
        }}
      >
        Create your own unique design system with <strong>Panda CSS</strong> and <strong>Ark UI</strong>.
      </PandaP>
    </div>
  )
}

export default async function () {
  return (
    <FullLayout withBgPattern withFooter>
      <PandaDiv
        css={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          color: 'gray.fg2',
        }}
      >
        <PandaDiv
          css={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start',
            textAlign: 'left',
            gap: '4',
            padding: '8',
            maxWidth: '600px',
          }}
        >
          <Heading>Panda Color System Generator</Heading>
          <HeadlineText />
          <PrimaryButton asChild>
            <Link href="/colors">
              Get started <ArrowRight />
            </Link>
          </PrimaryButton>
        </PandaDiv>
      </PandaDiv>
    </FullLayout>
  )
}
