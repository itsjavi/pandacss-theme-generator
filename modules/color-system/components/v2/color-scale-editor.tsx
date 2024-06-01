'use client'

import { PandaDiv } from '@/modules/design-system/components/panda'
import Heading from '@/modules/design-system/components/typography/heading'
import useDarkMode from '@/modules/design-system/hooks/use-darkmode'
import type { ColorActionPayload, ColorConfig2, ColorCssStrings, ColorLevelKey, ColorScheme } from '../../types2'
import ColorScaleLevelEditor from './color-scale-level-editor'

type ColorScaleEditorProps = {
  fg: ColorCssStrings
  config: ColorConfig2
  onChange?: (color: ColorActionPayload) => void
}

export default function ColorScaleEditor({ fg, config, onChange }: ColorScaleEditorProps) {
  const { isDarkMode } = useDarkMode()

  const colorTitle = config.name
  // const title = config.aliases.length > 0 ? config.aliases[0] : config.name
  const scheme: ColorScheme = isDarkMode ? 'dark' : 'light'
  const scaleLevels = Object.keys(config.scale) as ColorLevelKey[]

  return (
    <PandaDiv
      css={{
        display: 'grid',
        gridTemplateColumns: 'minmax(120px, 1fr) repeat(11, minmax(60px, 1fr))',
        gap: '2',
        maxWidth: '900px',
        '& .label': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: '2',
          py: '2',
        },
        '& .subtitle': {
          fontWeight: 'normal',
          color: 'fg.muted',
        },
        '& .label:not(:first-child)': {
          justifyContent: 'center',
        },
        '&.legend': {
          fontSize: 'xxs',
          textAlign: 'center',
        },
        // '& [data-is-default], & [data-level="600"], & [data-level="border3"]': {
        //   fontWeight: 'black',
        //   fontSize: 'lg',
        //   borderRadius: 'sm',
        //   borderWidth: '1.5px',
        //   borderColor: 'fg.200',
        // },
      }}
    >
      <Heading className="label" size="xs" as="div">
        {colorTitle}
      </Heading>
      {scaleLevels.map((level) => (
        <ColorScaleLevelEditor
          fg={fg[level]}
          key={level}
          onChange={onChange}
          config={config}
          level={level}
          scheme={scheme}
        />
      ))}
    </PandaDiv>
  )
}
