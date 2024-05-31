import FullLayout from '@/components/layout/full-layout'
import { panda } from '@/styled-system/jsx'
import type { PropsWithChildren } from 'react'

export default async function ({ children }: PropsWithChildren) {
  return (
    <FullLayout withFooter>
      <panda.div borderTop="1px solid" borderTopColor="gray.border1">
        {children}
      </panda.div>
    </FullLayout>
  )
}
