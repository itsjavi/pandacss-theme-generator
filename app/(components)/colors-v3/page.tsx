import ContentSection from '@/components/layout/content-section'
import DarkModeToggle from '@/modules/design-system/views/dark-mode-toggle'
import { css } from '@/styled-system/css'
import Heading from '@/ui/components/typography/heading'
import Subtitle from '@/ui/components/typography/subtitle'
import PaletteEditor from './palette-editor'

export default async function () {
  return (
    <>
      <ContentSection>
        <Heading size="xl" as="h1">
          Color System
        </Heading>
        <Subtitle>
          A wide-spectrum and comprehensive color system for designing beautiful, accessible user interfaces with
          PandaCSS.
        </Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Settings</Heading>
        <Subtitle>
          There are 10 color scales in the system (from 100 to 950). Colors with a P3 gamut in OKLCH format are used on
          supported browsers and displays. Default color is at the 100 level for background and contrast colors, and at
          the 600 level for all the rest.
          <br />
          <br />
          You can copy the token names by clicking on a color. For accent colors, you can also edit their hue and name
          by clicking on the name. More customization options are coming soon.
        </Subtitle>

        <PaletteEditor />
      </ContentSection>

      <DarkModeToggle
        className={css({
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          zIndex: 'z1',
        })}
      />
    </>
  )
}
