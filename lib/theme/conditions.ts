import type { Conditions } from '@pandacss/types'

export const presetConditions: Conditions = {
  // (p)ark-ui conditions:
  collapsed: '&:is([aria-collapsed=true], [data-collapsed], [data-state="collapsed"])',
  current: '&:is([data-current])',
  hidden: '&:is([hidden])',
  inert: '&:is([inert])',
  hover: ['@media (hover: hover) and (pointer: fine)', '&:is(:hover, [data-hover])'],
  indeterminate: '&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])',
  off: '&:is([data-state="off"])',
  on: '&:is([data-state="on"])',
  today: '&:is([data-today])',
  underValue: '&:is([data-state="under-value"])',
  // extra conditions:
  standalone: '@media (display-mode: standalone)',
  reducedMotion: '@media (prefers-reduced-motion)',
  reducedTransparency: '@media (prefers-reduced-transparency)',
  screenOnly: '@media screen',
  printOnly: '@media print',
}
