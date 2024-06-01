import FullLayout from '@/components/layout/full-layout'
import { PandaArticle } from '@/modules/design-system/components/panda'
import type { PropsWithChildren } from 'react'

export default async function ({ children }: PropsWithChildren) {
  return (
    <FullLayout withFooter>
      <PandaArticle borderTop="1px solid" borderTopColor="gray.border1">
        {children}
      </PandaArticle>
    </FullLayout>
  )
}
