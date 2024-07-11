'use client'

import type { Color, Hsl } from 'culori'
import type { Draft } from 'immer'
import { useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'
import { atomWithStorage } from 'jotai/utils'
import { nanoid } from 'nanoid'
import { createPiecewiseEasingFromCurve, generateColorStops } from './stops-generator'

const STORAGE_KEY = 'pandaColorSystem_v5'
const DEFAULT_MAX_STOPS = 11
const DEFAULT_SATURATION = 90
const DEFAULT_SATURATION_SHIFT = 5
const DEFAULT_LUMINANCE_MIN = 5
const DEFAULT_LUMINANCE_MAX = 90
const defaultInterpolatorCurve: InterpolatorCurve = [0.85, 0.25, 0.70, 0.95] // [0.75, 0.25, 0.75, 0.75]

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
  luminanceMin: number
  luminanceMax: number
  stops: Required<Hsl>[]
  maxStops: number
}

export type ColorSystemState = {
  colors: ColorSystemStateColorConfig[]
  interpolatorCurve: InterpolatorCurve
  luminanceMin: number
  luminanceMax: number
}

export enum ColorSystemActionType {
  add_color = 'add_color',
  remove_color = 'remove_color',
  update_color = 'update_color',
  clear_colors = 'clear_colors',
  update_interpolator_curve = 'update_interpolator_curve',
  update_luminance_min = 'update_luminance_min',
  update_luminance_max = 'update_luminance_max',
}

export type AddColorPayload = {
  id?: string
  group: ColorGroup
  name: string
  hue: number
  chroma: number
  alpha?: number
  hueShift?: number
  chromaShift?: number
  luminanceMax?: number
  luminanceMin?: number
  maxStops?: number
}

export type EditColorPayload = {
  id: string
  group?: ColorGroup
  name?: string
  hue?: number
  chroma?: number
  alpha?: number
  hueShift?: number
  chromaShift?: number
  luminanceMax?: number
  luminanceMin?: number
  stops?: ColorData[]
  maxStops?: number
}

export type ColorPayload = AddColorPayload & EditColorPayload

export type InterpolatorFn = (arr: number[]) => (t: number) => number
export type InterpolatorCurve = [number, number, number, number]
export type Interpolator = {
  mode: 'hsl'
  h?: InterpolatorFn
  s?: InterpolatorFn
  l: InterpolatorFn
  alpha?: InterpolatorFn
}

export type UpdateInterpolatorCurvePayload = {
  curve: [number, number, number, number]
}

type ColorSystemAction =
  | {
      type: `${ColorSystemActionType.add_color}`
      payload: AddColorPayload
    }
  | {
      type: `${ColorSystemActionType.update_color}`
      payload: EditColorPayload
    }
  | {
      type: `${ColorSystemActionType.remove_color}`
      payload: string
    }
  | {
      type: `${ColorSystemActionType.clear_colors}`
    }
  | {
      type: `${ColorSystemActionType.update_interpolator_curve}`
      payload: UpdateInterpolatorCurvePayload
    }
  | {
      type: `${ColorSystemActionType.update_luminance_min}` | `${ColorSystemActionType.update_luminance_max}`
      payload: number
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
    case 'update_interpolator_curve':
      {
        _updateInterpolatorCurve(state, action.payload)
      }
      break
    case 'update_luminance_min':
      {
        _updateLuminanceMin(state, action.payload)
      }
      break
    case 'update_luminance_max': {
      _updateLuminanceMax(state, action.payload)
    }
  }
}

function generateColorWithStops(
  data: AddColorPayload,
  interpolatorCurve: InterpolatorCurve | undefined,
): ColorSystemStateColorConfig {
  const newColor: ColorSystemStateColorConfig = {
    id: data.id ?? nanoid(),
    name: data.name.replace(/^[^a-zA-Z]+|[^a-zA-Z0-9_]+/g, '').toLowerCase(),
    group: data.group,
    hue: data.hue,
    chroma: data.chroma,
    alpha: data.alpha ?? 100,
    hueShift: data.hueShift ?? 0,
    chromaShift: data.chromaShift ?? 0,
    luminanceMin: data.luminanceMin ?? DEFAULT_LUMINANCE_MIN,
    luminanceMax: data.luminanceMax ?? DEFAULT_LUMINANCE_MAX,
    stops: [],
    maxStops: data.maxStops ?? DEFAULT_MAX_STOPS,
  }

  const interpolatorFn = interpolatorCurve ? createPiecewiseEasingFromCurve(interpolatorCurve) : undefined

  newColor.stops = generateColorStops(newColor, interpolatorFn)

  return newColor
}

function _addColor(draft: Draft<ColorSystemState>, newColor: AddColorPayload) {
  const colorByName = draft.colors.find((color) => color.name === newColor.name)
  if (colorByName) {
    throw new Error(`Color with name '${newColor.name}' already exists`)
  }

  draft.colors.push(
    generateColorWithStops(
      { luminanceMin: draft.luminanceMin, luminanceMax: draft.luminanceMax, ...newColor },
      draft.interpolatorCurve,
    ),
  )
}

function _updateColor(draft: Draft<ColorSystemState>, changedColor: EditColorPayload) {
  const colorIndex = _findColorIndex(draft, changedColor.id)

  if (colorIndex < 0) {
    throw new Error(`Color with id '${changedColor.id}' not found`)
  }

  const prevColor = draft.colors[colorIndex]
  const newColor = generateColorWithStops(
    { ...prevColor, luminanceMin: draft.luminanceMin, luminanceMax: draft.luminanceMax, ...changedColor },
    draft.interpolatorCurve,
  )

  newColor.id = changedColor.id
  draft.colors[colorIndex] = newColor
}

function _updateLuminanceMin(draft: Draft<ColorSystemState>, luminanceMin: number) {
  draft.luminanceMin = luminanceMin
  _refreshColorStops(draft, (color) => {
    color.luminanceMin = luminanceMin
  })
}

function _updateLuminanceMax(draft: Draft<ColorSystemState>, luminanceMax: number) {
  draft.luminanceMax = luminanceMax
  _refreshColorStops(draft, (color) => {
    color.luminanceMax = luminanceMax
  })
}

function _refreshColorStops(draft: Draft<ColorSystemState>, visitorFn: (color: ColorSystemStateColorConfig) => void) {
  for (const color of draft.colors) {
    visitorFn(color)
    color.stops = generateColorStops(color, createPiecewiseEasingFromCurve(draft.interpolatorCurve))
  }
}

function _updateInterpolatorCurve(draft: Draft<ColorSystemState>, data: UpdateInterpolatorCurvePayload) {
  draft.colors = draft.colors.map((color) => {
    const newColor = generateColorWithStops(color, data.curve)
    newColor.id = color.id
    return newColor
  })

  draft.interpolatorCurve = data.curve
}

function _removeColor(draft: Draft<ColorSystemState>, colorId: string) {
  const colorIndex = _findColorIndex(draft, colorId)

  if (colorIndex < 0) {
    throw new Error(`Color with id '${colorId}' not found`)
  }

  draft.colors.splice(colorIndex, 1)
}

function _findColorIndex(draft: Draft<ColorSystemState>, colorId: string): number {
  return draft.colors.findIndex((color) => color.id === colorId)
}

// STATE & HOOKS:

export const exampleColors = [
  generateColorWithStops(
    {
      name: 'blue',
      group: 'accent',
      hue: 215,
      hueShift: 0,
      chroma: DEFAULT_SATURATION, // 45
      chromaShift: 1, // 5
      luminanceMin: DEFAULT_LUMINANCE_MIN,
      luminanceMax: DEFAULT_LUMINANCE_MAX,
      alpha: 100,
      maxStops: DEFAULT_MAX_STOPS,
    },
    defaultInterpolatorCurve,
  ),
  generateColorWithStops(
    {
      name: 'red',
      group: 'accent',
      hue: 352,
      chroma: DEFAULT_SATURATION,
      alpha: 100,
      hueShift: 0,
      chromaShift: DEFAULT_SATURATION_SHIFT,
      luminanceMin: DEFAULT_LUMINANCE_MIN,
      luminanceMax: DEFAULT_LUMINANCE_MAX,
      maxStops: DEFAULT_MAX_STOPS,
    },
    defaultInterpolatorCurve,
  ),
  generateColorWithStops(
    {
      name: 'yellow',
      group: 'accent',
      hue: 38,
      chroma: DEFAULT_SATURATION,
      alpha: 100,
      hueShift: 0,
      chromaShift: DEFAULT_SATURATION_SHIFT,
      luminanceMin: DEFAULT_LUMINANCE_MIN,
      luminanceMax: DEFAULT_LUMINANCE_MAX,
      maxStops: DEFAULT_MAX_STOPS,
    },
    defaultInterpolatorCurve,
  ),
  generateColorWithStops(
    {
      name: 'green',
      group: 'accent',
      hue: 135,
      chroma: DEFAULT_SATURATION,
      alpha: 100,
      hueShift: 0,
      chromaShift: DEFAULT_SATURATION_SHIFT,
      luminanceMin: DEFAULT_LUMINANCE_MIN,
      luminanceMax: DEFAULT_LUMINANCE_MAX,
      maxStops: DEFAULT_MAX_STOPS,
    },
    defaultInterpolatorCurve,
  ),
  generateColorWithStops(
    {
      name: 'teal',
      group: 'accent',
      hue: 172,
      chroma: DEFAULT_SATURATION,
      alpha: 100,
      hueShift: 0,
      chromaShift: DEFAULT_SATURATION_SHIFT,
      luminanceMin: DEFAULT_LUMINANCE_MIN,
      luminanceMax: DEFAULT_LUMINANCE_MAX,
      maxStops: DEFAULT_MAX_STOPS,
    },
    defaultInterpolatorCurve,
  ),
  generateColorWithStops(
    {
      name: 'purple',
      group: 'accent',
      hue: 279,
      chroma: DEFAULT_SATURATION,
      alpha: 100,
      hueShift: 0,
      chromaShift: DEFAULT_SATURATION_SHIFT,
      luminanceMin: DEFAULT_LUMINANCE_MIN,
      luminanceMax: DEFAULT_LUMINANCE_MAX,
      maxStops: DEFAULT_MAX_STOPS,
    },
    defaultInterpolatorCurve,
  ),
  generateColorWithStops(
    {
      name: 'pink',
      group: 'accent',
      hue: 335,
      chroma: DEFAULT_SATURATION,
      alpha: 100,
      hueShift: 0,
      chromaShift: DEFAULT_SATURATION_SHIFT,
      luminanceMin: DEFAULT_LUMINANCE_MIN,
      luminanceMax: DEFAULT_LUMINANCE_MAX,
      maxStops: DEFAULT_MAX_STOPS,
    },
    defaultInterpolatorCurve,
  ),
  generateColorWithStops(
    {
      name: 'gray',
      group: 'gray',
      hue: 0,
      chroma: 0,
      alpha: 100,
      hueShift: 0,
      chromaShift: 0,
      luminanceMin: 1,
      luminanceMax: DEFAULT_LUMINANCE_MAX,
      maxStops: DEFAULT_MAX_STOPS,
    },
    defaultInterpolatorCurve,
  ),
]

const initialState: ColorSystemState = {
  colors: exampleColors,
  interpolatorCurve: defaultInterpolatorCurve,
  luminanceMin: DEFAULT_LUMINANCE_MIN,
  luminanceMax: DEFAULT_LUMINANCE_MAX,
}
// const colorSystemAtom = atomWithImmer(initialState)
const colorSystemAtom = withImmer(atomWithStorage(STORAGE_KEY, initialState))

function _clearColors(draft: Draft<ColorSystemState>) {
  draft.colors = [...initialState.colors]
  draft.interpolatorCurve = initialState.interpolatorCurve
  draft.luminanceMin = initialState.luminanceMin
  draft.luminanceMax = initialState.luminanceMax
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

export function getColorStopFullId(colorName: string, index: number, maxStops: number): string {
  return `${colorName}.${getColorStopShortId(index, maxStops)}`
}

export function getColorStopShortId(index: number, maxStops: number): string {
  if (index === 0) {
    return '50'
  }

  if (index === 10) {
    return '950'
  }

  if (index > 10) {
    return `${index * 50 + 450}`
  }

  return `${index * 100}`
}
