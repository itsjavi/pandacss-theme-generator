import { PandaP } from '../panda'

export default function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <PandaP color="fg.muted" fontSize="xl">
      {children}
    </PandaP>
  )
}
