'use client'

import { useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'
import { atomWithStorage } from 'jotai/utils'
import { geistColorsConfig2 } from './config'
import type { ColorSystemConfig2 } from './types2'

// type ColorSystemState = {
//   colors: Array<StateColor>
// }

// type StateColor = {
//   name: string
//   group: ColorGroup
// }

// export const colorSystemAtom = atomWithImmer<ColorSystemConfig2>(geistColorsConfig2)
export const colorSystemAtom = withImmer<ColorSystemConfig2>(atomWithStorage('pandaColorSystem', geistColorsConfig2))

export const useColorSystem = () => useAtom(colorSystemAtom)
const anAtom = withImmer(atomWithStorage('count', 0))
