import type { CSSProperties } from 'react'

export function inlineCssVars(cssVars: Record<string, string | number>): CSSProperties {
  const cssProps: Record<string, string | number> = {}

  for (const key in cssVars) {
    cssProps[`--${key}`] = cssVars[key]
  }

  return cssProps
}
