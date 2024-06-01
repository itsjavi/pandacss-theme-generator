import { PandaP } from '../panda'

export default function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <PandaP color="muted.100" fontSize="xl">
      {children}
    </PandaP>
  )
}
