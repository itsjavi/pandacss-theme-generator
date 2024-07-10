'use client'

import type { Color, Hsl } from 'culori'
import type { Draft } from 'immer'
import { useAtom } from 'jotai'
import { atomWithImmer } from 'jotai-immer'
import { nanoid } from 'nanoid'
import { generateColorScale } from './color-scaler'

const STORAGE_KEY = 'pandaColorSystem_v4'
const DEFAULT_MAX_STOPS = 10

export type ColorData = Required<Color>
export type ColorGroup = 'background' | 'foreground' | 'gray' | 'accent' | 'primary' | 'supporting'

export type ColorSystemStateColorConfig = {
  id: string
  group: ColorGroup
  name: string
  hue: number
  chroma: number
  alpha: number
  hueShift: number
  chromaShift: number
  luminanceShift: number
  luminanceMax: number
  luminanceMin: number
  stops: Required<Hsl>[]
  maxStops: number
}

export type ColorSystemState = {
  colors: ColorSystemStateColorConfig[]
}

export enum ColorSystemActionType {
  add_color = 'add_color',
  remove_color = 'remove_color',
  update_color = 'update_color',
  clear_colors = 'clear_colors',
}

export type AddColorPayload = {
  id?: string
  group: ColorGroup
  name: string
  hue: number
  chroma: number
  alpha?: number
  hueShift?: number
  /**
   * @deprecated
   */
  luminanceShift?: number
  chromaShift?: number
  luminanceMax?: number
  luminanceMin?: number
  maxStops?: number
}

export type EditColorScalePayload = {
  id: string
  group?: ColorGroup
  name?: string
  hue?: number
  chroma?: number
  alpha?: number
  hueShift?: number
  chromaShift?: number
  luminanceShift?: number
  luminanceMax?: number
  luminanceMin?: number
  stops?: ColorData[]
  maxStops?: number
}

export type ColorScalePayload = AddColorPayload & EditColorScalePayload

type ColorSystemAction =
  | {
      type: `${ColorSystemActionType.add_color}`
      payload: AddColorPayload
    }
  | {
      type: `${ColorSystemActionType.update_color}`
      payload: EditColorScalePayload
    }
  | {
      type: `${ColorSystemActionType.remove_color}`
      payload: string
    }
  | {
      type: `${ColorSystemActionType.clear_colors}`
    }

const colorSystemReducer = (state: Draft<ColorSystemState>, action: ColorSystemAction) => {
  switch (action.type) {
    case 'add_color':
      {
        _addColor(state, action.payload)
      }
      break
    case 'remove_color':
      {
        _removeColor(state, action.payload)
      }
      break
    case 'update_color':
      {
        _updateColor(state, action.payload)
      }
      break
    case 'clear_colors':
      {
        _clearColors(state)
      }
      break
  }
}

function generateColorWithStops(data: AddColorPayload): ColorSystemStateColorConfig {
  const newColor: ColorSystemStateColorConfig = {
    id: data.id ?? nanoid(),
    name: data.name.replace(/^[^a-zA-Z]+|[^a-zA-Z0-9_]+/g, '').toLowerCase(),
    group: data.group,
    hue: data.hue,
    chroma: data.chroma,
    alpha: data.alpha ?? 100,
    hueShift: data.hueShift ?? 0,
    luminanceShift: data.luminanceShift ?? 0,
    chromaShift: data.chromaShift ?? 0,
    luminanceMax: data.luminanceMax ?? 95,
    luminanceMin: data.luminanceMin ?? 5,
    stops: [],
    maxStops: data.maxStops ?? DEFAULT_MAX_STOPS,
  }

  newColor.stops = generateColorScale(newColor)

  return newColor
}

function _addColor(draft: Draft<ColorSystemState>, baseColor: AddColorPayload) {
  const colorScaleByName = draft.colors.find((colorScale) => colorScale.name === baseColor.name)
  if (colorScaleByName) {
    throw new Error(`Color scale with name '${baseColor.name}' already exists`)
  }

  draft.colors.push(generateColorWithStops(baseColor))
}

function _updateColor(draft: Draft<ColorSystemState>, baseColor: EditColorScalePayload) {
  const colorScaleIndex = _findColorScaleIndex(draft, baseColor.id)

  if (colorScaleIndex < 0) {
    throw new Error(`Color with id '${baseColor.id}' not found`)
  }

  const prevColorScale = draft.colors[colorScaleIndex]
  const newColorScale = generateColorWithStops({ ...prevColorScale, ...baseColor })

  newColorScale.id = baseColor.id
  draft.colors[colorScaleIndex] = newColorScale
}

function _removeColor(draft: Draft<ColorSystemState>, colorScaleId: string) {
  const colorScaleIndex = _findColorScaleIndex(draft, colorScaleId)

  if (colorScaleIndex < 0) {
    throw new Error(`Color scale with id '${colorScaleId}' not found`)
  }

  draft.colors.splice(colorScaleIndex, 1)
}

function _findColorScaleIndex(draft: Draft<ColorSystemState>, colorId: string): number {
  return draft.colors.findIndex((colorScale) => colorScale.id === colorId)
}

// STATE & HOOKS:

export const exampleColors = [
  generateColorWithStops({
    name: 'blue',
    group: 'accent',
    hue: 215,
    hueShift: 0,
    chroma: 85, // 45
    chromaShift: 1, // 5
    luminanceMin: 5,
    luminanceMax: 90,
    alpha: 100,
    maxStops: DEFAULT_MAX_STOPS,
  }),
  generateColorWithStops({
    name: 'red',
    group: 'accent',
    hue: 352,
    chroma: 85,
    alpha: 100,
    hueShift: 0,
    chromaShift: 1,
    luminanceMin: 10,
    luminanceMax: 90,
    maxStops: DEFAULT_MAX_STOPS,
  }),
  generateColorWithStops({
    name: 'yellow',
    group: 'accent',
    hue: 38,
    chroma: 85,
    alpha: 100,
    hueShift: 0,
    chromaShift: 1,
    luminanceMin: 10,
    luminanceMax: 90,
    maxStops: DEFAULT_MAX_STOPS,
  }),
  generateColorWithStops({
    name: 'green',
    group: 'accent',
    hue: 135,
    chroma: 85,
    alpha: 100,
    hueShift: 0,
    chromaShift: 1,
    luminanceMin: 10,
    luminanceMax: 90,
    maxStops: DEFAULT_MAX_STOPS,
  }),
  generateColorWithStops({
    name: 'teal',
    group: 'accent',
    hue: 172,
    chroma: 85,
    alpha: 100,
    hueShift: 0,
    chromaShift: 1,
    luminanceMin: 10,
    luminanceMax: 90,
    maxStops: DEFAULT_MAX_STOPS,
  }),
  generateColorWithStops({
    name: 'purple',
    group: 'accent',
    hue: 279,
    chroma: 85,
    alpha: 100,
    hueShift: 0,
    chromaShift: 1,
    luminanceMin: 10,
    luminanceMax: 90,
    maxStops: DEFAULT_MAX_STOPS,
  }),
  generateColorWithStops({
    name: 'pink',
    group: 'accent',
    hue: 335,
    chroma: 85,
    alpha: 100,
    hueShift: 0,
    chromaShift: 1,
    luminanceMin: 10,
    luminanceMax: 90,
    maxStops: DEFAULT_MAX_STOPS,
  }),
  generateColorWithStops({
    name: 'gray',
    group: 'gray',
    hue: 0,
    chroma: 0,
    alpha: 100,
    hueShift: 0,
    chromaShift: 0,
    luminanceMin: 0,
    luminanceMax: 90,
    maxStops: DEFAULT_MAX_STOPS,
  }),
]

const initialState: ColorSystemState = {
  colors: exampleColors,
}
const colorSystemAtom = atomWithImmer(initialState)
// const colorSystemAtom = withImmer(atomWithStorage(STORAGE_KEY, initialState))

function _clearColors(draft: Draft<ColorSystemState>) {
  draft.colors = [...initialState.colors]
}

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
