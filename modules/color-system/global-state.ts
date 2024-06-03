'use client'

import { useAtom } from 'jotai'
import { withImmer } from 'jotai-immer'
import { atomWithStorage } from 'jotai/utils'
import { geistColorsConfig } from './config'
import type { ColorSystemConfig } from './types'

export const colorSystemAtom = withImmer<ColorSystemConfig>(atomWithStorage('pandaColorSystem_v2', geistColorsConfig))

export const useColorSystem = () => useAtom(colorSystemAtom)
const anAtom = withImmer(atomWithStorage('count', 0))
