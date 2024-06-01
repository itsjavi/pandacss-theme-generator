'use client'
import { css } from '@/styled-system/css'
import { MoonStarIcon, SunIcon } from 'lucide-react'
import { type ButtonProps, InlineTextButton } from '../components/button'
import useDarkMode from '../hooks/use-darkmode'

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
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <InlineTextButton
      {...props}
      onClick={() => {
        toggleDarkMode()
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
