'use client'

// import { outdent } from 'outdent'
import { type ReactNode, createContext, useContext, useState } from 'react'

export interface AppState {
  cssCode: string
  jsCode: string
}

export const initialCss = '@layer reset, base, tokens, recipes, utilities;' + '\n'

export const defaultAppState: AppState = {
  jsCode: '', //('theme: { extend: {} },'),
  cssCode: initialCss,
}

interface AppStateProviderProps {
  children: ReactNode
}

const AppStateContext = createContext<AppState | undefined>(undefined)
const AppStateUpdateContext = createContext<React.Dispatch<React.SetStateAction<AppState>> | undefined>(undefined)

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [appState, setAppState] = useState<AppState>({ ...defaultAppState })

  return (
    <AppStateContext.Provider value={appState}>
      <AppStateUpdateContext.Provider value={setAppState}>{children}</AppStateUpdateContext.Provider>
    </AppStateContext.Provider>
  )
}

export const useAppState = (): [AppState, React.Dispatch<React.SetStateAction<AppState>>] => {
  const context = useContext(AppStateContext)
  const setContext = useContext(AppStateUpdateContext)
  if (context === undefined || setContext === undefined) {
    throw new Error('useAppState must be used within a AppStateProvider')
  }

  return [context, setContext] as const
}
