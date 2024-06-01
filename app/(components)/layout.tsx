import FullLayout from '@/components/layout/full-layout'
import { PandaDiv } from '@/modules/design-system/components/panda'
import type { PropsWithChildren } from 'react'

export default async function ({ children }: PropsWithChildren) {
  return (
    <FullLayout withFooter>
      <PandaDiv borderTop="1px solid" borderTopColor="gray.border1">
        {children}
      </PandaDiv>
    </FullLayout>
  )
}
