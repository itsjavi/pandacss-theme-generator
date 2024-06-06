'use client'

import type { Draft } from 'immer'
import { useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'
import { atomWithStorage } from 'jotai/utils'
import { geistColorsConfig } from './lib/geist-colors'
import type { ColorGroup, ColorSystemConfig, OklchColor } from './types'

export const colorSystemAtom = withImmer<ColorSystemConfig>(atomWithStorage('pandaColorSystem_v2', geistColorsConfig))

export const useColorSystem = () => useAtom(colorSystemAtom)

// REDUCERS and ACTIONS:

enum ColorSystemActionType {
  add_color = 'add_color',
  remove_color = 'remove_color',
  update_color = 'update_color',
}

export type ColorPayload = {
  id: string
  name: string
  group: ColorGroup
  value: OklchColor
  formattedValue: string
}

type ColorSystemAction =
  | {
      type: `${ColorSystemActionType.add_color}` | `${ColorSystemActionType.update_color}`
      payload: ColorPayload
    }
  | {
      type: `${ColorSystemActionType.remove_color}`
      payload: string
    }

const colorSystemReducer = (state: Draft<ColorSystemConfig>, action: ColorSystemAction) => {
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
  }
}

export const useColorSystemReducer = () => {
  const [state, setState] = useColorSystem()

  const dispatch = (action: ColorSystemAction) => {
    setState((draft) => colorSystemReducer(draft, action))
  }

  return [state, dispatch] as const
}

function _addColor(draft: Draft<ColorSystemConfig>, color: ColorPayload) {}

function _removeColor(draft: Draft<ColorSystemConfig>, colorId: string) {}

function _updateColor(draft: Draft<ColorSystemConfig>, color: ColorPayload) {}
