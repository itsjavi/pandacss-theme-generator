'use client'

import type { Draft } from 'immer'
import { useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'
import { atomWithStorage } from 'jotai/utils'
import { geistColorsConfig } from './config'
import type { ColorConfig, ColorSystemConfig } from './types'

export const colorSystemAtom = withImmer<ColorSystemConfig>(atomWithStorage('pandaColorSystem_v2', geistColorsConfig))

export const useColorSystem = () => useAtom(colorSystemAtom)

type ColorSystemAction = 'add_color' | 'remove_color' | 'update_color'

const colorSystemReducer = (
  state: Draft<ColorSystemConfig>,
  action: { type: ColorSystemAction; payload: ColorConfig },
) => {
  switch (action.type) {
    case 'add_color':
      {
        state.colors.push(action.payload)
      }
      break
    case 'remove_color':
      {
        state.colors = state.colors.filter((color) => color.name !== action.payload.name)
      }
      break
    case 'update_color':
      {
        const index = state.colors.findIndex((color) => color.name === action.payload.name)
        if (index !== -1) {
          state.colors[index] = action.payload
        }
      }
      break
  }
}

export const useColorSystemReducer = () => {
  const [state, setState] = useColorSystem()

  const dispatch = (action: { type: ColorSystemAction; payload: ColorConfig }) => {
    setState((draft) => colorSystemReducer(draft, action))
  }

  return [state, dispatch] as const
}
