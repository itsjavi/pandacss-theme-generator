'use client'

// import { outdent } from 'outdent'
import { type ReactNode, createContext, useContext, useState } from 'react'
import { geistColorsConfig } from './config'
import { generateColorSystemPresetCode } from './generate-panda-preset'
import type { ColorSystemConfig } from './types'

export interface AppState {
  cssCode: string
  colorSystemConfig: ColorSystemConfig
  colorSystemPresetCode: string
}

export const initialCss = '@layer reset, base, tokens, recipes, utilities;' + '\n'

export const defaultAppState: AppState = {
  cssCode: initialCss,
  colorSystemConfig: geistColorsConfig,
  colorSystemPresetCode: generateColorSystemPresetCode(geistColorsConfig),
}

interface AppStateProviderProps {
  children: ReactNode
}

const AppStateContext = createContext<AppState | undefined>(undefined)
const AppStateUpdateContext = createContext<React.Dispatch<React.SetStateAction<AppState>> | undefined>(undefined)

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [appState, setAppState] = useState<AppState>({ ...defaultAppState })

  const wrappedSetAppState: React.Dispatch<React.SetStateAction<AppState>> = (newAppState) => {
    // const colorSystemPresetCode = prevAppState.colorSystemConfig
    setAppState((prevAppState) => ({ ...prevAppState, ...newAppState }))
  }

  return (
    <AppStateContext.Provider value={appState}>
      <AppStateUpdateContext.Provider value={wrappedSetAppState}>{children}</AppStateUpdateContext.Provider>
    </AppStateContext.Provider>
  )
}

export const useAppState = (): [AppState, React.Dispatch<React.SetStateAction<AppState>>] => {
  const context = useContext(AppStateContext)
  const setContext = useContext(AppStateUpdateContext)
  if (context === undefined || setContext === undefined) {
    throw new Error('useAppState must be used within a AppStateProvider')
  }

  // const wrapperSetContext = useCallback<AppState>(
  //   (newAppState) =>
  //     setContext((prevAppState) => {
  //       const colorSystemPresetCode =
  //         prevAppState.colorSystemConfig === newAppState.colorSystemConfig
  //           ? prevAppState.colorSystemPresetCode
  //           : generateColorSystemPresetCode(newAppState.colorSystemConfig)
  //       return { ...prevAppState, ...newAppState, colorSystemPresetCode }
  //     }),
  //   [setContext],
  // )

  return [context, setContext] as const
}

// export const useColorSystem = (): [AppState, (newColorSystem: ColorSystemConfig) => void] => {
//   const [state, setState] = useAppState()

//   const setContext = (newColorSystem: ColorSystemConfig) => {
//     setState((prevState): AppState => {
//       return {
//         ...prevState,
//         colorSystemConfig: newColorSystem,
//         colorSystemPresetCode: generateColorSystemPresetCode(newColorSystem),
//       }
//     })
//   }

//   return [state, setContext] as const
// }
