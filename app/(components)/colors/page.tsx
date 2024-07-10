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
          Panda Color System Generator
        </Heading>
        <Subtitle>
          A comprehensive color palette generator and editor for designing beautiful, dark-mode ready, and accessible
          user interfaces with PandaCSS. Inspired by{' '}
          <a href="https://tints.dev" target="_blank" rel="noopener noreferrer" className={css({ color: 'inherit!' })}>
            tints.dev
          </a>
          .
        </Subtitle>

        <PandaDiv display="flex" flexDir="column" gap="8" py="6">
          <PaletteSwatches />
          <PaletteEditorActions />
        </PandaDiv>
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
