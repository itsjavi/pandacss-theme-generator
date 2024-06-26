import type { BasicComponentProps } from '@/lib/types'
import { PandaDiv } from '@/modules/design-system/components/panda'

export default function ContentSection({ className, children }: BasicComponentProps) {
  return (
    <PandaDiv
      display="flex"
      gap="4"
      flexDir="column"
      maxW="100vw"
      p="10"
      borderBottom="1px solid"
      borderBottomColor="gray.border1"
      className={className}
      css={{
        '& a': {
          color: 'primary.fg1',
          textDecoration: 'underline',
          textDecorationStyle: 'dotted',

          '&:hover': {
            textDecorationStyle: 'solid',
          },
        },
      }}
    >
      {children}
    </PandaDiv>
  )
}
