import ContentSection from '@/components/layout/content-section'
import ColorSystemLab from '@/modules/color-system/components/color-system-lab'
import PandaPresetRenderer from '@/modules/color-system/components/panda-preset-renderer'
import DarkModeToggle from '@/modules/design-system/views/dark-mode-toggle'
import { css } from '@/styled-system/css'
import Heading from '@/ui/components/typography/heading'
import Subtitle from '@/ui/components/typography/subtitle'

export default async function () {
  return (
    <>
      <ContentSection>
        <Heading size="xl" as="h1">
          Color System
        </Heading>
        <Subtitle>
          A wide-spectrum and comprehensive color system for designing beautiful, accessible user interfaces with
          PandaCSS. Inspired by Vercel's{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://vercel.com/geist/colors">
            Geist
          </a>{' '}
          color system.
        </Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Scales</Heading>
        <Subtitle>
          There are 10 color scales in the system (from 100 to 950). Colors with a P3 gamut in OKLCH format are used on
          supported browsers and displays. Default color is at the 100 level for background and contrast colors, and at
          the 600 level for all the rest.
          <br />
          <br />
          You can copy the token names by clicking on a color. For accent colors, you can also edit their hue and name
          by clicking on the name. More customization options are coming soon.
        </Subtitle>
        <br />
        <ColorSystemLab />

        <DarkModeToggle
          className={css({
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
            zIndex: 'z1',
          })}
        />
      </ContentSection>
      <ContentSection>
        <Heading size="lg">Preset</Heading>
        <Subtitle>
          Use this Panda preset to integrate this theme in your application. You can read more about{' '}
          <a
            href="https://panda-css.com/docs/customization/presets#creating-a-preset"
            target="_blank"
            rel="noopener noreferrer"
          >
            Panda presets here
          </a>
          .{' '}
        </Subtitle>
        <br />
        <PandaPresetRenderer
          buttonClassName={css({
            position: 'fixed',
            bottom: '1.2rem',
            right: '3rem',
            zIndex: 'z1',
          })}
        />
      </ContentSection>
    </>
  )
}
