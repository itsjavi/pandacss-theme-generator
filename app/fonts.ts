import { DM_Mono, DM_Sans } from 'next/font/google'

const sansFont = DM_Sans({
  subsets: ['latin', 'latin-ext'],
})
export const sansFontClass = sansFont.className

const monoFont = DM_Mono({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
})
export const monoFontClass = monoFont.className
