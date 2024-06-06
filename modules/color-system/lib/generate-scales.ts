import { clamp } from '@/lib/utils'
import { nanoid } from 'nanoid'
import type { AddColorScalePayload, SemanticColorScale } from '../client-state-v3'
import { colorLevelAliases, colorLevels } from '../constants'
import type { ColorScheme, OklchColor } from '../types'
import {
  averageGeistChromaticityBaseLevelLightDarkDiff,
  averageGeistChromaticityDiffs,
  averageGeistLuminanceBaseLevelLightDarkDiff,
  averageGeistLuminanceDiffs,
  geistBaseScaleLevelIndex,
} from './geist-colors'

import { buildShades } from '@effective/color'

export function generateAccentColorScale(color: AddColorScalePayload): SemanticColorScale {
  const newScale: SemanticColorScale = {
    id: nanoid(),
    name: color.name.replace(/^[^a-zA-Z]+|[^a-zA-Z0-9_]+/g, '').toLowerCase(),
    group: 'accent',
    colors: [],
    baseColorIndex: geistBaseScaleLevelIndex,
  }

  const lightBaseColor: OklchColor =
    color.baseColor.scheme === 'light'
      ? color.baseColor.value
      : {
          ...color.baseColor.value,
          l: clamp(color.baseColor.value.l + averageGeistLuminanceBaseLevelLightDarkDiff, 0, 1),
          c: clamp(color.baseColor.value.c + averageGeistChromaticityBaseLevelLightDarkDiff, 0, 0.4),
        }

  const darkBaseColor: OklchColor =
    color.baseColor.scheme === 'dark'
      ? color.baseColor.value
      : {
          ...color.baseColor.value,
          l: clamp(color.baseColor.value.l - averageGeistLuminanceBaseLevelLightDarkDiff, 0, 1),
          c: clamp(color.baseColor.value.c - averageGeistChromaticityBaseLevelLightDarkDiff, 0, 0.4),
        }

  for (let i = 0; i < colorLevels.length; i++) {
    const level = colorLevels[i]
    const levelAlias = colorLevelAliases[i]

    const lightColor: OklchColor = {
      ...lightBaseColor,
      l: clamp(lightBaseColor.l + averageGeistLuminanceDiffs.light[level], 0, 1),
      c: clamp(lightBaseColor.c + averageGeistChromaticityDiffs.light[level], 0, 0.4),
    }

    const darkColor: OklchColor = {
      ...darkBaseColor,
      l: clamp(lightBaseColor.l + averageGeistLuminanceDiffs.dark[level], 0, 1),
      c: clamp(lightBaseColor.c + averageGeistChromaticityDiffs.dark[level], 0, 0.4),
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

export function generateAccentColorScaleV3(color: AddColorScalePayload): SemanticColorScale {
  const newScale: SemanticColorScale = {
    id: nanoid(),
    name: color.name.replace(/^[^a-zA-Z]+|[^a-zA-Z0-9_]+/g, '').toLowerCase(),
    group: 'accent',
    colors: [],
    baseColorIndex: geistBaseScaleLevelIndex,
  }

  const baseColor = color.baseColor.value
  const luminanceStep = baseColor.l / Math.abs(colorLevels.length - 1)
  const luminanceShift = 0.25 // the higher the distance from the base scale level, the higher the luminance shift
  const chromaShift = 0.01 // the higher the distance from the base scale level, the higher the chroma shift

  for (let i = 0; i < colorLevels.length; i++) {
    const level = colorLevels[i]
    const levelAlias = colorLevelAliases[i]
    const levelDistance = Math.abs(i - geistBaseScaleLevelIndex)
    const luminanceShiftAcc = luminanceShift * levelDistance
    const luminanceDiff =
      luminanceStep * levelDistance * (i < geistBaseScaleLevelIndex ? -1 - luminanceShiftAcc : 1 + luminanceShiftAcc)

    const chromaShiftAcc = chromaShift * levelDistance
    const chromaDiff = chromaShiftAcc * (i === geistBaseScaleLevelIndex ? 0 : -1)

    const lightColor: OklchColor = {
      ...baseColor,
      l: clamp(baseColor.l - luminanceDiff, 0, 1),
      c: clamp(baseColor.c - chromaDiff, 0, 0.4),
    }

    const darkColor: OklchColor = {
      ...baseColor,
      l: clamp(baseColor.l + luminanceDiff, 0, 1),
      c: clamp(baseColor.c - chromaDiff, 0, 0.4),
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

function findFirstColor(baseColor: OklchColor, scheme: ColorScheme): OklchColor {
  const divisions: number = geistBaseScaleLevelIndex
  const luminanceStep = divisions === 0 ? 0 : baseColor.l / divisions
  const luminanceTotal = luminanceStep * (divisions - 1)

  return {
    ...baseColor,
    l: scheme === 'light' ? baseColor.l + luminanceTotal : baseColor.l - luminanceTotal,
  }
}

function findLastColor(baseColor: OklchColor, scheme: ColorScheme): OklchColor {
  const divisions: number = colorLevels.length - (geistBaseScaleLevelIndex + 1)
  const luminanceStep = divisions === 0 ? 0 : baseColor.l / divisions
  const luminanceTotal = luminanceStep * (divisions - 1)

  return {
    ...baseColor,
    l: scheme === 'light' ? baseColor.l - luminanceTotal : baseColor.l + luminanceTotal,
  }
}

export function generateAccentColorScaleV4(color: AddColorScalePayload): SemanticColorScale {
  const newScale: SemanticColorScale = {
    id: nanoid(),
    name: color.name.replace(/^[^a-zA-Z]+|[^a-zA-Z0-9_]+/g, '').toLowerCase(),
    group: 'accent',
    colors: [],
    baseColorIndex: geistBaseScaleLevelIndex,
  }

  const baseColor = color.baseColor.value
  // const spectrum = spectrumToList(
  //   buildSpectrum(baseColor, {
  //     outputSpace: 'oklch',
  //     outputGamut: 'p3',
  //     colorSteps: 10,
  //     colorDifference: 10,
  //     // mixerSteps: 0.01,
  //   }),
  // )

  const firstDarkColor = findFirstColor(baseColor, 'dark')
  const lastDarkColor = findLastColor(baseColor, 'dark')
  const firstLightColor = findFirstColor(baseColor, 'light')
  const lastLightColor = findLastColor(baseColor, 'light')

  const darkShades = buildShades(
    firstDarkColor,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    baseColor as any,
    {
      outputSpace: 'oklch',
      outputGamut: 'p3',
      colorSteps: 7,
      colorDifference: 5,
    },
  ).concat(
    buildShades(
      baseColor,
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      lastDarkColor as any,
      {
        outputSpace: 'oklch',
        outputGamut: 'p3',
        colorSteps: 3,
        colorDifference: 5,
      },
    ),
  )

  // newScale.colors.push(
  //   {
  //     level: '100',
  //     alias: 'l100',
  //     value: {
  //       light: findLastColor(baseColor, 'dark'),
  //       dark: findFirstColor(baseColor, 'dark'),
  //     },
  //   }
  // )

  // newScale.colors.push(
  //   {
  //     level: '200',
  //     alias: 'l200',
  //     value: {
  //       light: findFirstColor(baseColor, 'dark'),
  //       dark: findLastColor(baseColor, 'dark'),
  //     },
  //   }
  // )

  for (let i = 0; i < darkShades.length; i++) {
    const level = colorLevels[i]
    const levelAlias = colorLevelAliases[i]

    const lightColor: OklchColor = darkShades[i] as OklchColor
    const darkColor: OklchColor = darkShades[i] as OklchColor

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
