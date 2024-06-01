import ContentSection from '@/components/layout/content-section'
import ColorSystemEditor from '@/modules/color-system/components/color-system-editor'
import PandaPresetRenderer from '@/modules/color-system/components/panda-preset-renderer'
import Heading from '@/ui/components/typography/heading'
import Subtitle from '@/ui/components/typography/subtitle'

export default async function () {
  return (
    <>
      <ContentSection>
        <Heading size="xl">Color System</Heading>
        <Subtitle>
          A wide-spectrum and comprehensive color system for designing beautiful, accessible user interfaces with
          PandaCSS.
        </Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Scales</Heading>
        <Subtitle>
          There are 10 color scales in the system (from 100 to 950). Colors with a P3 gamut in OKLCH format are used on
          supported browsers and displays. Default color is at the 600 level.
        </Subtitle>
        <br />
        <ColorSystemEditor />
      </ContentSection>
      <ContentSection>
        <Heading size="lg">Preset</Heading>
        <Subtitle>Use this Panda preset to integrate this theme in your application.</Subtitle>
        <br />
        <PandaPresetRenderer />
      </ContentSection>
    </>
  )
}
