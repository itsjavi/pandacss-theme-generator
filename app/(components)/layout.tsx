import FullLayout from '@/components/layout/full-layout'
import Sidebar from '@/components/layout/sidebar'
import HeroTitle from '@/components/ui/hero-title'
import type { PropsWithChildren } from 'react'

export default async function ({ children }: PropsWithChildren) {
  return (
    <FullLayout withHeaderLogo>
      <Sidebar.Layout>
        <Sidebar>
          <HeroTitle as="div" size="md">
            Components
          </HeroTitle>
          <section>
            <ul>
              <li>Avatar</li>
              <li>Badge</li>
              <li>Button</li>
              <li>Combobox</li>
              <li>Checkbox</li>
              <li>Input</li>
              <li>RadioGroup</li>
              <li>Select</li>
            </ul>
          </section>
        </Sidebar>
        <Sidebar.Content>{children}</Sidebar.Content>
      </Sidebar.Layout>
    </FullLayout>
  )
}
