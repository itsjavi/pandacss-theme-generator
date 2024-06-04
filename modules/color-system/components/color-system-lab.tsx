'use client'

import { PandaDiv } from '@/modules/design-system/components/panda'
import { buildSpectrum } from '@effective/color'
import { colorLevelAliases, colorLevels } from '../constants'
import { useColorSystem } from '../global-state'
import { formatColorConfig, parseColor } from '../lib/color-manipulation'
import type { ColorActionPayload, ColorConfig, ColorLevelKey } from '../types'
import ColorScaleCreator from './color-scale-creator'
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

  function handleAddColor(color: ColorActionPayload) {
    setColorSystem((draft) => {
      const newColor: ColorConfig = {
        name: color.name,
        scale: {},
        defaultLevel: color.level,
        group: 'accent',
        aliases: color.alias ? [color.alias] : [],
      }
      // @see https://www.npmjs.com/package/@effective/color
      const spectrum = Object.entries(
        buildSpectrum(color.value, {
          outputSpace: 'oklch',
          outputGamut: 'p3',
          colorSteps: 5,
          colorDifference: 8,
          darkColorCompensation: 2,
        }),
      )

      const spectrumColorScaleDark = [5, 4, 3, 2, 1, 7, 6, 0, 8, 9]
      const spectrumColorScaleLight = Array.from(spectrumColorScaleDark).reverse()

      for (let i = 0; i < 10; i++) {
        const levelKey = (i < 9 ? `${(i + 1) * 100}` : '950') as ColorLevelKey
        const idx = spectrumColorScaleLight[i]
        const idxDark = spectrumColorScaleDark[i]
        const entry = spectrum[idx]
        const entryDark = spectrum[idxDark]

        if (!entry || !entryDark) {
          throw new Error('A color spectrum entry is undefined')
        }

        const [, color] = entry
        const [, colorDark] = entryDark
        const levelAlias = colorLevelAliases[i]

        newColor.scale[levelKey] = {
          light: parseColor(color),
          dark: parseColor(colorDark),
          aliases: levelAlias ? [levelAlias] : [],
        }
      }

      // const spectrumIndexDark: Record<number, ColorLevelKey> = {
      //   6: '100',
      //   5: '200',
      //   4: '300',
      //   3: '400',
      //   2: '500',
      //   7: '600',
      //   0: '700',
      //   1: '800',
      //   9: '900',
      //   11: '950',
      // }

      // const spectrumIndexLight: Record<number, ColorLevelKey> = {
      //   6: '950',
      //   5: '900',
      //   4: '800',
      //   3: '700',
      //   2: '600',
      //   7: '500',
      //   0: '400',
      //   1: '300',
      //   9: '200',
      //   11: '100',
      // }

      console.log({ spectrum })

      // console.log({ lightSpectrum, darkSpectrum })
      draft.colors.push(newColor)
    })
  }

  function handleDeleteColor(color: ColorActionPayload) {
    setColorSystem((draft) => {
      const colorIndex = draft.colors.findIndex((colorConfig) => colorConfig.name === color.name)
      if (colorIndex === -1) {
        return
      }
      draft.colors.splice(colorIndex, 1)
    })
  }

  const colorNames = colorSystem.colors.flatMap((colorConfig) => [colorConfig.name, ...colorConfig.aliases])

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
      <ColorScaleCreator currentColorNames={colorNames} onDelete={handleDeleteColor} onSave={handleAddColor} />
      <ColorScaleLegend levels={colorLevelAliases} />
    </PandaDiv>
  )
}
