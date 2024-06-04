'use client'

import { PandaDiv } from '@/modules/design-system/components/panda'
import useDarkMode from '@/modules/design-system/hooks/use-darkmode'
import { formatHex } from 'culori'
import { averageGeistChromaticity, averageGeistLuminance } from '../config'
import { colorLevelAliases, colorLevels } from '../constants'
import { useColorSystem } from '../global-state'
import { formatColorConfig, parseColor } from '../lib/color-manipulation'
import type { ColorActionPayload, ColorConfig, ColorLevelKey, OklchColor } from '../types'
import ColorScaleCreator from './color-scale-creator'
import ColorScaleEditor from './color-scale-editor'
import ColorScaleLegend from './color-scale-legend'

export default function ColorSystemLab() {
  const isDarkMode = useDarkMode()
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
      draft.colors[colorIndex].name = color.newName ?? color.name

      for (const [level, levelData] of Object.entries(colorLevels)) {
        levelData.light = typeof levelData.light === 'string' ? parseColor(levelData.light) : levelData.light
        levelData.dark = typeof levelData.dark === 'string' ? parseColor(levelData.dark) : levelData.dark

        // console.log('changes:', { level, h: [levelData.light.h, levelData.dark.h, color.value.h] })
        levelData.light.l = averageGeistLuminance.light[level as ColorLevelKey]
        levelData.light.c = (color.value.c + averageGeistChromaticity.light[level as ColorLevelKey]) / 2
        levelData.light.h = color.value.h

        levelData.dark.l = averageGeistLuminance.dark[level as ColorLevelKey]
        levelData.dark.c = (color.value.c + averageGeistChromaticity.dark[level as ColorLevelKey]) / 2
        levelData.dark.h = color.value.h

        draft.colors[colorIndex].name = color.newName ?? color.name
        draft.colors[colorIndex].scale[level as ColorLevelKey] = levelData
      }
    })
  }

  function handleAddColor(color: ColorActionPayload) {
    setColorSystem((draft) => {
      const newColor: ColorConfig = {
        name: color.newName ?? color.name,
        scale: {},
        defaultLevel: color.level,
        group: 'accent',
        aliases: color.alias ? [color.alias] : [],
      }

      let i = 0
      for (const colorLevel of colorLevels) {
        const levelAlias = colorLevelAliases[i]

        const lightColor: OklchColor = {
          ...color.value,
          l: averageGeistLuminance.light[colorLevel],
          c: color.value.c > 0 ? (color.value.c + averageGeistChromaticity.light[colorLevel]) / 2 : 0,
        }

        const darkColor: OklchColor = {
          ...color.value,
          l: averageGeistLuminance.dark[colorLevel],
          c: color.value.c > 0 ? (color.value.c + averageGeistChromaticity.dark[colorLevel]) / 2 : 0,
        }

        newColor.scale[colorLevel] = {
          light: lightColor,
          dark: darkColor,
          aliases: levelAlias ? [levelAlias] : [],
        }
        i++
      }
      draft.colors.push(newColor)
    })
  }

  function handleDeleteColor(color: ColorActionPayload) {
    setColorSystem((draft) => {
      draft.colors = draft.colors.filter((colorConfig) => colorConfig.name !== color.name)
    })
  }

  const colorNames = colorSystem.colors.flatMap((colorConfig) => [colorConfig.name, ...colorConfig.aliases])

  return (
    <PandaDiv display="flex" gap="4" flexDir="column" maxW="920px" marginX="auto">
      <ColorScaleLegend levels={colorLevels} />
      {colorSystem.colors.map((colorConfig) => {
        const baseColor = colorConfig.scale[600]?.[isDarkMode ? 'dark' : 'light']
        const baseColorPayload: ColorActionPayload | undefined = baseColor
          ? {
              name: colorConfig.name,
              level: '600',
              scheme: isDarkMode ? 'dark' : 'light',
              value: parseColor(baseColor),
              valueCss: formatHex(baseColor) ?? '#000',
              alias: colorConfig.aliases?.[0],
            }
          : undefined

        return (
          <ColorScaleEditor
            key={colorConfig.name}
            fg={colorConfig.group === 'contrast' ? convertedBgColor : convertedFgColor}
            config={colorConfig}
            onChange={handleChange}
            onDelete={handleDeleteColor}
            currentColorNames={colorNames}
            initialColor={baseColorPayload}
          />
        )
      })}
      <ColorScaleCreator currentColorNames={colorNames} onDelete={handleDeleteColor} onSave={handleAddColor} />
      <ColorScaleLegend levels={colorLevelAliases} />
    </PandaDiv>
  )
}
