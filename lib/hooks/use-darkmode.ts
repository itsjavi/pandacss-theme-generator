'use client'
import { useTheme } from 'next-themes'

export default function useDarkMode() {
  const { setTheme, ...themeProps } = useTheme()
  const actualTheme = themeProps.resolvedTheme || themeProps.theme
  const isDarkMode = actualTheme === 'dark'
  const toggleDarkMode = () => setTheme(isDarkMode ? 'light' : 'dark')

  return { isDarkMode, toggleDarkMode }
}
