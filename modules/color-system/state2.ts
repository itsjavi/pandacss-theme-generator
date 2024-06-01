import { useAtom } from 'jotai'
import { atomWithImmer } from 'jotai-immer'
import { geistColorsConfig2 } from './config'
import type { ColorSystemConfig2 } from './types2'

// type ColorSystemState = {
//   colors: Array<StateColor>
// }

// type StateColor = {
//   name: string
//   group: ColorGroup
// }

export const colorSystemAtom = atomWithImmer<ColorSystemConfig2>(geistColorsConfig2)

export const useColorSystem = () => useAtom(colorSystemAtom)
