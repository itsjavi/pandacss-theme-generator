import ContentSection from '@/components/layout/content-section'
import { PandaDiv } from '@/modules/design-system/components/panda'
import DarkModeToggle from '@/modules/design-system/views/dark-mode-toggle'
import { css } from '@/styled-system/css'
import Heading from '@/ui/components/typography/heading'
import Subtitle from '@/ui/components/typography/subtitle'
import PaletteEditor, { PaletteEditorActions, PaletteSwatches } from './_ui/palette-editor'

export default async function () {
  return (
    <>
      <ContentSection>
        <Heading size="xl" as="h1">
          Color System
        </Heading>
        <Subtitle>
          A comprehensive color system editor for designing beautiful, accessible user interfaces with PandaCSS.
        </Subtitle>

        <PandaDiv display="flex" flexDir="column" gap="8" py="6">
          <PaletteSwatches />
          <PaletteEditorActions />
        </PandaDiv>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Palette Editor</Heading>
        <Subtitle>
          Create and manage your color palette and scales with the color editor below.
          <br />
          <br />
          You can generate very interesting color scales by changing the hue and saturation shift values. The shift
          values will sequentially alter the colors from the edges of the scale to the center (base color), creating
          harmonious and diverse color ranges.
          <br />
          <br />
          Changing the Minimum/Maximum Lightness will spread out the rest of the colors to the extremes of white and
          black.
          <br />
          <br />
          These principles are inspired by <i>tints.dev</i> and the excellent <i>Refactoring UI</i> book by Adam Wathan
          & Steve Schoger. The same book recommends the use of automated tools, just like this one!, to fast-track the
          creation of color palettes.
          <br />
          <br />
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
