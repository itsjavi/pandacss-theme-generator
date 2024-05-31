import type { BasicComponentProps } from '@/lib/types'
import { panda } from '@/styled-system/jsx'

export default function ContentSection({ className, children }: BasicComponentProps) {
  return (
    <panda.div
      display="flex"
      gap="4"
      flexDir="column"
      p="10"
      borderBottom="1px solid"
      borderBottomColor="gray.border1"
      className={className}
    >
      {children}
    </panda.div>
  )
}
