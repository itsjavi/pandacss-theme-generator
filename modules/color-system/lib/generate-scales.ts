import { clamp } from '@/lib/utils'
import { nanoid } from 'nanoid'
import type { AddColorScalePayload, SemanticColorScale } from '../client-state-v3'
import { colorLevelAliases, colorLevels } from '../constants'
import type { OklchColor } from '../types'
import {
  averageGeistChromaticity,
  averageGeistLuminance,
  geistBaseScaleLevel,
  geistBaseScaleLevelIndex,
} from './geist-colors'


export function generateAccentColorScale(color: AddColorScalePayload): SemanticColorScale {
  const newScale: SemanticColorScale = {
    id: nanoid(),
    name: color.name.replace(/^[^a-zA-Z]+|[^a-zA-Z0-9_]+/g, '').toLowerCase(),
    group: 'accent',
    colors: [],
    baseColorIndex: geistBaseScaleLevelIndex,
  }

  const baseColor = color.baseColor.value
  const lightLuminancePercent = (baseColor.l * 100) / averageGeistLuminance.light[geistBaseScaleLevel]
  const lightChromaPercent = (baseColor.c * 100) / averageGeistChromaticity.light[geistBaseScaleLevel]

  const darkLuminancePercent = (baseColor.l * 100) / averageGeistLuminance.dark[geistBaseScaleLevel]
  const darkChromaPercent = (baseColor.c * 100) / averageGeistChromaticity.dark[geistBaseScaleLevel]

  for (let i = 0; i < colorLevels.length; i++) {
    const level = colorLevels[i]
    const levelAlias = colorLevelAliases[i]

    const lightColor: OklchColor = {
      mode: 'oklch',
      h: clamp(baseColor.h, 0, 360),
      alpha: clamp(baseColor.alpha, 0, 1),
      c: clamp((averageGeistChromaticity.light[level] * lightChromaPercent) / 100, 0, 0.5),
      l: clamp((averageGeistLuminance.light[level] * lightLuminancePercent) / 100, 0, 1),
    }

    const darkColor: OklchColor = {
      mode: 'oklch',
      h: clamp(baseColor.h, 0, 360),
      alpha: clamp(baseColor.alpha, 0, 1),
      c: clamp((averageGeistChromaticity.dark[level] * darkChromaPercent) / 100, 0, 0.5),
      l: clamp((averageGeistLuminance.dark[level] * darkLuminancePercent) / 100, 0, 1),
    }

    newScale.colors.push({
      level,
      alias: levelAlias,
      value: {
        light: lightColor,
        dark: darkColor,
      },
    })
  }

  return newScale
}
