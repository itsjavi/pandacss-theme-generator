import Sidebar from '@/components/layout/sidebar'
import HeroTitle from '@/components/ui/hero-title'
import { panda } from '@/styled-system/jsx'

export default async function () {
  return (
    <>
      <Sidebar.ContentSection>
        <HeroTitle size="xl">Button</HeroTitle>
        <panda.p color="gray.fg1" fontSize="xl">
          Trigger an action or event, such as submitting a form or displaying a dialog.
        </panda.p>
      </Sidebar.ContentSection>
      <Sidebar.ContentSection>(WIP)</Sidebar.ContentSection>
    </>
  )
}
