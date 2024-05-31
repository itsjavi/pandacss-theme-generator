import ColorScaleViewer from '@/components/colorsystem/color-scale-viewer'
import PandaPresetRenderer from '@/components/colorsystem/panda-preset-renderer'
import ContentSection from '@/components/layout/content-section'
import Heading from '@/components/layout/heading'
import Subtitle from '@/components/layout/subtitle'
import { geistColorsConfig } from '@/lib/colorsystem/config'

export default async function () {
  const solidColors = ['shade', 'gray', 'blue', 'red', 'yellow', 'green', 'teal', 'purple', 'pink'] as const
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
        {Object.entries(geistColorsConfig).map(([name, colorConfig], i) => {
          return <ColorScaleViewer withLegend={i === 0} key={name} colorConfig={colorConfig} />
        })}
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
