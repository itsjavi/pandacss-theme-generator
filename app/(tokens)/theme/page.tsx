import Sidebar from '@/components/layout/sidebar'
import HeroTitle from '@/components/ui/hero-title'
import { panda } from '@/styled-system/jsx'

export default async function () {
  return (
    <>
      <Sidebar.ContentSection>
        <HeroTitle size="xl">Colors</HeroTitle>
        <panda.p color="gray.fg1" fontSize="xl">
          Learn how to work with our color system. Right click to copy raw values.
        </panda.p>
      </Sidebar.ContentSection>
      <Sidebar.ContentSection>(WIP)</Sidebar.ContentSection>
    </>
  )
}
