'use client'

import { PandaDiv } from '@/modules/design-system/components/panda'
import Heading from '@/modules/design-system/components/typography/heading'
import { css } from '@/styled-system/css'

type ColorScaleGridProps = {
  title?: React.ReactNode
  children?: React.ReactNode
}

export default function ColorScaleGrid({ title, children }: ColorScaleGridProps) {
  return (
    <PandaDiv
      css={{
        display: 'grid',
        gridTemplateColumns: 'minmax(120px, 1fr) repeat(10, minmax(50px, 1fr))',
        gap: '2',
      }}
    >
      <Heading
        className={css({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: '2',
          py: '2',
        })}
        size="xs"
        as="div"
      >
        {title}
      </Heading>
      {children}
    </PandaDiv>
  )
}
