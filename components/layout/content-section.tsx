import type { BasicComponentProps } from '@/lib/types'
import { PandaDiv } from '@/modules/design-system/components/panda'

export default function ContentSection({ className, children }: BasicComponentProps) {
  return (
    <PandaDiv
      display="flex"
      gap="4"
      flexDir="column"
      p="10"
      borderBottom="1px solid"
      borderBottomColor="gray.border1"
      className={className}
    >
      {children}
    </PandaDiv>
  )
}
