import { panda } from '@/styled-system/jsx'
import type { PropsWithChildren } from 'react'

export default function Sidebar({ children }: PropsWithChildren) {
  return (
    <panda.aside
      css={{
        position: 'sticky',
        top: '60px',
        bottom: 0,
        display: 'flex',
        height: 'calc(100vh - 60px)',
        w: '220px',
        zIndex: '100',
        // pb: 4,
      }}
    >
      <panda.div
        css={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          p: 4,
          borderX: '1px solid',
          borderXColor: 'shade.border1',
          height: 'full',
          overflowY: 'auto',
          '& section': {
            color: 'fg.muted',
          },
        }}
      >
        {children}
      </panda.div>
    </panda.aside>
  )
}

Sidebar.Layout = function SidebarLayout({ children }: PropsWithChildren) {
  return (
    <panda.div
      css={{
        bg: 'bg.200',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        // gridTemplateColumns: 'auto 1fr auto',
        borderTop: '1px solid',
        borderTopColor: 'shade.border1',
        // gap: 4,
        // px: 4,
      }}
    >
      {children}
    </panda.div>
  )
}

Sidebar.Content = function SidebarContent({ children }: PropsWithChildren) {
  return <panda.div>{children}</panda.div>
}

Sidebar.ContentSection = function SidebarContentSection({ children }: PropsWithChildren) {
  return (
    <panda.div borderBottom="1px solid" borderBottomColor="gray.border1" p="10" display="flex" gap="4" flexDir="column">
      {children}
    </panda.div>
  )
}
