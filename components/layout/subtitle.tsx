import { panda } from '@/styled-system/jsx'

export default function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <panda.p color="fg.muted" fontSize="xl">
      {children}
    </panda.p>
  )
}
