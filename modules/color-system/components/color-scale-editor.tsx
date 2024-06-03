'use client'

import useDarkMode from '@/modules/design-system/hooks/use-darkmode'
import type { ColorActionPayload, ColorConfig, ColorCssStrings, ColorLevelKey, ColorScheme } from '../types'
import ColorScaleGrid from './color-scale-grid'
import ColorScaleLevelEditor from './color-scale-level-editor'

type ColorScaleEditorProps = {
  fg: ColorCssStrings
  config: ColorConfig
  onChange?: (color: ColorActionPayload) => void
}

export default function ColorScaleEditor({ fg, config, onChange }: ColorScaleEditorProps) {
  const { isDarkMode } = useDarkMode()

  const colorTitle = config.name
  // const title = config.aliases.length > 0 ? config.aliases[0] : config.name
  const scheme: ColorScheme = isDarkMode ? 'dark' : 'light'
  const scaleLevels = Object.keys(config.scale) as ColorLevelKey[]

  return (
    <ColorScaleGrid title={colorTitle}>
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
    </ColorScaleGrid>
  )
}
