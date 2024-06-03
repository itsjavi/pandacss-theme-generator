'use client'

import { PandaDiv } from '@/modules/design-system/components/panda'
import { colorLevelAliases, colorLevels } from '../constants'
import { useColorSystem } from '../global-state'
import { formatColorConfig, parseColor } from '../lib/color-manipulation'
import type { ColorActionPayload, ColorLevelKey } from '../types'
import ColorScaleEditor from './color-scale-editor'
import ColorScaleLegend from './color-scale-legend'

export default function ColorSystemLab() {
  const [colorSystem, setColorSystem] = useColorSystem()
  const colors = colorSystem.colors

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

  // TODO: build scale of colors with this lib, instead of replacing hues?
  // import {buildSpectrum} from '@effective/color'
  function handleChange(color: ColorActionPayload) {
    // console.log('color changed', { color })
    setColorSystem((draft) => {
      const colorIndex = draft.colors.findIndex((colorConfig) => colorConfig.name === color.name)
      const colorLevels = draft.colors[colorIndex].scale

      for (const [level, levelData] of Object.entries(colorLevels)) {
        levelData.light = typeof levelData.light === 'string' ? parseColor(levelData.light) : levelData.light
        levelData.dark = typeof levelData.dark === 'string' ? parseColor(levelData.dark) : levelData.dark

        // console.log('changes:', { level, h: [levelData.light.h, levelData.dark.h, color.value.h] })
        levelData.light.h = color.value.h
        levelData.dark.h = color.value.h

        draft.colors[colorIndex].scale[level as ColorLevelKey] = levelData
      }
    })
  }

  return (
    <PandaDiv display="flex" gap="4" flexDir="column" maxW="920px" marginX="auto">
      <ColorScaleLegend levels={colorLevels} />
      {colorSystem.colors.map((colorConfig) => (
        <ColorScaleEditor
          key={colorConfig.name}
          fg={colorConfig.group === 'contrast' ? convertedBgColor : convertedFgColor}
          config={colorConfig}
          onChange={handleChange}
        />
      ))}
      <ColorScaleLegend levels={colorLevelAliases} />
    </PandaDiv>
  )
}
