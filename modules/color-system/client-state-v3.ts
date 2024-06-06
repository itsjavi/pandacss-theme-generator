'use client'

import type { Draft } from 'immer'
import { useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'
import { atomWithStorage } from 'jotai/utils'
import { generateAccentColorScale } from './lib/generate-scales'
import type { ColorGroup, ColorLevelKey, ColorScheme, OklchColor } from './types'

export type SemanticColorValue = {
  light: OklchColor
  dark: OklchColor
}

export type SemanticColor = {
  level: ColorLevelKey
  alias: string
  value: SemanticColorValue
}

export type SemanticColorScale = {
  id: string
  name: string
  group: ColorGroup
  colors: SemanticColor[]
  baseColorIndex: number
}

export type ColorSystemConfig = {
  palette: SemanticColorScale[]
}

export enum ColorSystemActionType {
  add_color_scale = 'add_color_scale',
  remove_color_scale = 'remove_color_scale',
  update_color_scale = 'update_color_scale',
  reset_palette = 'reset_palette',
}

export type AddColorScalePayload = {
  group: ColorGroup
  name: string
  baseColor: {
    scheme: ColorScheme
    value: OklchColor
    formattedValue: string
  }
}

export type EditColorScalePayload = {
  id: string
  name: string
  baseColor: {
    scheme: ColorScheme
    value: OklchColor
    formattedValue: string
  }
}

export type ColorScalePayload = AddColorScalePayload & EditColorScalePayload

type ColorSystemAction =
  | {
      type: `${ColorSystemActionType.add_color_scale}`
      payload: AddColorScalePayload
    }
  | {
      type: `${ColorSystemActionType.update_color_scale}`
      payload: EditColorScalePayload
    }
  | {
      type: `${ColorSystemActionType.remove_color_scale}`
      payload: string
    }
  | {
      type: `${ColorSystemActionType.reset_palette}`
    }

const colorSystemReducer = (state: Draft<ColorSystemConfig>, action: ColorSystemAction) => {
  switch (action.type) {
    case 'add_color_scale':
      {
        _addColorScale(state, action.payload)
      }
      break
    case 'remove_color_scale':
      {
        _removeColorScale(state, action.payload)
      }
      break
    case 'update_color_scale':
      {
        _updateColorScale(state, action.payload)
      }
      break
    case 'reset_palette':
      {
        state.palette = []
      }
      break
  }
}

function _addColorScale(draft: Draft<ColorSystemConfig>, baseColor: AddColorScalePayload) {
  const colorScaleByName = draft.palette.find((colorScale) => colorScale.name === baseColor.name)
  if (colorScaleByName) {
    throw new Error(`Color scale with name '${baseColor.name}' already exists`)
  }

  draft.palette.push(generateAccentColorScale(baseColor))
}

function _updateColorScale(draft: Draft<ColorSystemConfig>, baseColor: EditColorScalePayload) {
  const colorScaleIndex = _findColorScaleIndex(draft, baseColor.id)

  if (colorScaleIndex < 0) {
    throw new Error(`Color scale with id '${baseColor.id}' not found`)
  }

  const prevColorScale = draft.palette[colorScaleIndex]
  const newColorScale = generateAccentColorScale({
    ...baseColor,
    group: prevColorScale.group,
  })

  newColorScale.id = baseColor.id
  draft.palette[colorScaleIndex] = newColorScale
}

function _removeColorScale(draft: Draft<ColorSystemConfig>, colorScaleId: string) {
  const colorScaleIndex = _findColorScaleIndex(draft, colorScaleId)

  if (colorScaleIndex < 0) {
    throw new Error(`Color scale with id '${colorScaleId}' not found`)
  }

  draft.palette.splice(colorScaleIndex, 1)
}

function _findColorScaleIndex(draft: Draft<ColorSystemConfig>, colorId: string): number {
  return draft.palette.findIndex((colorScale) => colorScale.id === colorId)
}

// STATE & HOOKS:

const initialState: ColorSystemConfig = { palette: [] }
const colorSystemAtom = withImmer(atomWithStorage('pandaColorSystem_v3', initialState))

function useColorSystemAtom() {
  return useAtom(colorSystemAtom)
}

export function useColorSystem() {
  const [state, setState] = useColorSystemAtom()

  const dispatch = (action: ColorSystemAction) => {
    setState((draft) => colorSystemReducer(draft, action))
  }

  return [state, dispatch] as const
}
