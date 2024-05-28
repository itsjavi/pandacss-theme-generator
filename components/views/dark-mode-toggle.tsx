'use client'
import { css } from '@/styled-system/css'
import { MoonStarIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { type ButtonProps, InlineTextButton } from '../ui/button'

type DarkModeToggleProps = {
  defaultMode?: 'dark' | 'light'
} & ButtonProps

const cls = {
  sunIcon: css({
    display: 'none',
    _light: {
      display: 'none',
    },
    _dark: {
      display: 'block',
    },
  }),
  moonIcon: css({
    _dark: {
      display: 'none',
    },
  }),
}

export default function DarkModeToggle({ defaultMode = 'dark', onClick, children, ...props }: DarkModeToggleProps) {
  const { setTheme, ...themeProps } = useTheme()
  const actualTheme = themeProps.resolvedTheme || themeProps.theme
  const isDarkMode = actualTheme === 'dark'

  return (
    <InlineTextButton
      {...props}
      onClick={() => {
        setTheme(isDarkMode ? 'light' : 'dark')
      }}
      aria-label={`Toggle ${isDarkMode ? 'light' : 'dark'} mode`}
      suppressHydrationWarning
    >
      <SunIcon className={cls.sunIcon} />
      <MoonStarIcon className={cls.moonIcon} />
      {children}
    </InlineTextButton>
  )
}
