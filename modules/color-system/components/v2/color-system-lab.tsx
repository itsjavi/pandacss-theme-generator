'use client'

import { formatColorConfig, parseColor } from '../../lib/create-color'
import { useColorSystem } from '../../state2'
import type { ColorActionPayload, ColorLevelKey } from '../../types2'
import ColorScaleEditor from './color-scale-editor'

export default function ColorSystemLab() {
  const [colorSystem, setColorSystem] = useColorSystem()
  const colors = Object.entries(colorSystem).map(([name, colorConfig]) => colorConfig)

  const fgColor = colors.find((colorConfig) => colorConfig.group === 'contrast')
  const bgColor = colors.find((colorConfig) => colorConfig.group === 'background')

  if (!fgColor) {
    throw new Error('colorSystem.fg color is not defined')
  }

  if (!bgColor) {
    throw new Error('colorSystem.bg color is not defined')
  }

  const convertedFgColor = formatColorConfig(fgColor)
  const convertedBgColor = formatColorConfig(bgColor)

  function handleChange(color: ColorActionPayload) {
    // console.log('color changed', { color })
    setColorSystem((draft) => {
      const colorLevels = draft[color.name].scale

      for (const [level, levelData] of Object.entries(colorLevels)) {
        levelData.light = typeof levelData.light === 'string' ? parseColor(levelData.light) : levelData.light
        levelData.dark = typeof levelData.dark === 'string' ? parseColor(levelData.dark) : levelData.dark

        // console.log('changes:', { level, h: [levelData.light.h, levelData.dark.h, color.value.h] })
        levelData.light.h = color.value.h
        levelData.dark.h = color.value.h

        draft[color.name].scale[level as ColorLevelKey] = levelData
      }
    })
  }

  return Object.entries(colorSystem).map(([name, colorConfig]) => (
    <ColorScaleEditor
      key={name}
      fg={colorConfig.group === 'contrast' ? convertedBgColor : convertedFgColor}
      config={colorConfig}
      onChange={handleChange}
    />
  ))
}
