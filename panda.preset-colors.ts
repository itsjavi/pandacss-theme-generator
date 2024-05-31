import { defineSemanticTokens, defineTokens } from '@pandacss/dev'
import type { Recursive, SemanticToken } from '@pandacss/types'

// Colors based on Vercel's Geist UI

export const presetColors = defineTokens.colors({
  bg: {
    dark: {
      DEFAULT: { value: '#000' },
      100: { value: '#000' },
      200: { value: '#0A0A0A' },
      300: { value: '#111111' },
      // 950: { value: '#282828' },
    },
    light: {
      DEFAULT: { value: '#fff' },
      100: { value: '#fff' },
      200: { value: '#FAFAFA' },
      300: { value: '#EEEEEE' },
      // 950: { value: '#e5e5e5' },
    },
  },
  fg: {
    dark: {
      DEFAULT: { value: '#fff' },
      100: { value: '#fff' },
      200: { value: '#DDDDDD' },
      300: { value: '#A1A1A1' },
      // 950: { value: '#e5e5e5' },
    },
    light: {
      DEFAULT: { value: '#000' },
      100: { value: '#000' },
      200: { value: '#222222' },
      300: { value: '#666666' },
      // 950: { value: '#282828' },
    },
  },
  gray: {
    dark: {
      DEFAULT: { value: 'var(--colors-gray-dark-600)' },
      100: { value: 'hsl(0, 0%, 10%)' },
      200: { value: 'hsl(0, 0%, 12%)' },
      300: { value: 'hsl(0, 0%, 16%)' },
      400: { value: 'hsl(0, 0%, 18%)' },
      500: { value: 'hsl(0, 0%, 27%)' },
      600: { value: 'hsl(0, 0%, 53%)' },
      700: { value: 'hsl(0, 0%, 56%)' },
      800: { value: 'hsl(0, 0%, 49%)' },
      900: { value: 'hsl(0, 0%, 63%)' },
      950: { value: 'hsl(0, 0%, 93%)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-gray-light-600)' },
      100: { value: 'hsl(0, 0%, 95%)' },
      200: { value: 'hsl(0, 0%, 92%)' },
      300: { value: 'hsl(0, 0%, 90%)' },
      400: { value: 'hsl(0, 0%, 92%)' },
      500: { value: 'hsl(0, 0%, 79%)' },
      600: { value: 'hsl(0, 0%, 66%)' },
      700: { value: 'hsl(0, 0%, 56%)' },
      800: { value: 'hsl(0, 0%, 49%)' },
      900: { value: 'hsl(0, 0%, 40%)' },
      950: { value: 'hsl(0, 0%, 9%)' },
    },
  },
  shade: {
    dark: {
      DEFAULT: { value: 'var(--colors-shade-dark-600)' },
      100: { value: 'hsla(0, 0%, 100%, .06)' },
      200: { value: 'hsla(0, 0%, 100%, .09)' },
      300: { value: 'hsla(0, 0%, 100%, .13)' },
      400: { value: 'hsla(0, 0%, 100%, .14)' },
      500: { value: 'hsla(0, 0%, 100%, .24)' },
      600: { value: 'hsla(0, 0%, 100%, .51)' },
      700: { value: 'hsla(0, 0%, 100%, .54)' },
      800: { value: 'hsla(0, 0%, 100%, .47)' },
      900: { value: 'hsla(0, 0%, 100%, .61)' },
      950: { value: 'hsla(0, 0%, 100%, .92)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-shade-light-600)' },
      100: { value: 'rgba(0, 0, 0, .05)' },
      200: { value: 'rgba(0, 0, 0, .08)' },
      300: { value: 'rgba(0, 0, 0, .1)' },
      400: { value: 'rgba(0, 0, 0, .08)' },
      500: { value: 'rgba(0, 0, 0, .21)' },
      600: { value: 'rgba(0, 0, 0, .34)' },
      700: { value: 'rgba(0, 0, 0, .44)' },
      800: { value: 'rgba(0, 0, 0, .51)' },
      900: { value: 'rgba(0, 0, 0, .61)' },
      950: { value: 'rgba(0, 0, 0, .91)' },
    },
  },
  blue: {
    dark: {
      DEFAULT: { value: 'var(--colors-blue-dark-600)' },
      100: { value: 'hsl(216, 50%, 12%)' },
      200: { value: 'hsl(214, 59%, 15%)' },
      300: { value: 'hsl(213, 71%, 20%)' },
      400: { value: 'hsl(212, 78%, 23%)' },
      500: { value: 'hsl(211, 86%, 27%)' },
      600: { value: 'hsl(206, 100%, 50%)' },
      700: { value: 'hsl(212, 100%, 48%)' },
      800: { value: 'hsl(212, 100%, 41%)' },
      900: { value: 'hsl(210, 100%, 66%)' },
      950: { value: 'hsl(206, 100%, 96%)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-blue-light-600)' },
      100: { value: 'hsl(212, 100%, 97%)' },
      200: { value: 'hsl(210, 100%, 96%)' },
      300: { value: 'hsl(210, 100%, 94%)' },
      400: { value: 'hsl(209, 100%, 90%)' },
      500: { value: 'hsl(209, 100%, 80%)' },
      600: { value: 'hsl(208, 100%, 66%)' },
      700: { value: 'hsl(212, 100%, 48%)' },
      800: { value: 'hsl(212, 100%, 41%)' },
      900: { value: 'hsl(211, 100%, 42%)' },
      950: { value: 'hsl(211, 100%, 15%)' },
    },
  },
  blueP3: {
    dark: {
      DEFAULT: { value: 'var(--colors-blue-p3-dark-600)' },
      100: { value: 'oklch(22.17% 0.069 259.89)' },
      200: { value: 'oklch(25.45% 0.0811 255.8)' },
      300: { value: 'oklch(30.86% 0.1022 255.21)' },
      400: { value: 'oklch(34.1% 0.121 254.74)' },
      500: { value: 'oklch(38.5% 0.1403 254.4)' },
      600: { value: 'oklch(64.94% 0.1982 251.8131841760864)' },
      700: { value: 'oklch(57.61% 0.2321 258.23)' },
      800: { value: 'oklch(51.51% 0.2307 257.85)' },
      900: { value: 'oklch(71.7% 0.1648 250.79360374054167)' },
      950: { value: 'oklch(96.75% 0.0179 242.4234217368056)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-blue-p3-light-600)' },
      100: { value: 'oklch(97.32% 0.0141 251.56)' },
      200: { value: 'oklch(96.29% 0.0195 250.59)' },
      300: { value: 'oklch(94.58% 0.0293 249.84870859673202)' },
      400: { value: 'oklch(91.58% 0.0473 245.11621922481282)' },
      500: { value: 'oklch(82.75% 0.0979 248.48)' },
      600: { value: 'oklch(73.08% 0.1583 248.133320980386)' },
      700: { value: 'oklch(57.61% 0.2508 258.23)' },
      800: { value: 'oklch(51.51% 0.2399 257.85)' },
      900: { value: 'oklch(53.18% 0.2399 256.9900584162342)' },
      950: { value: 'oklch(26.67% 0.1099 254.34)' },
    },
  },
  red: {
    dark: {
      DEFAULT: { value: 'var(--colors-red-dark-600)' },
      100: { value: 'hsl(357, 37%, 12%)' },
      200: { value: 'hsl(357, 46%, 16%)' },
      300: { value: 'hsl(356, 54%, 22%)' },
      400: { value: 'hsl(357, 55%, 26%)' },
      500: { value: 'hsl(357, 60%, 32%)' },
      600: { value: 'hsl(358, 75%, 59%)' },
      700: { value: 'hsl(358, 75%, 59%)' },
      800: { value: 'hsl(358, 69%, 52%)' },
      900: { value: 'hsl(358, 100%, 69%)' },
      950: { value: 'hsl(353, 90%, 96%)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-red-light-600)' },
      100: { value: 'hsl(0, 100%, 97%)' },
      200: { value: 'hsl(0, 100%, 96%)' },
      300: { value: 'hsl(0, 100%, 95%)' },
      400: { value: 'hsl(0, 90%, 92%)' },
      500: { value: 'hsl(0, 82%, 85%)' },
      600: { value: 'hsl(359, 90%, 71%)' },
      700: { value: 'hsl(358, 75%, 59%)' },
      800: { value: 'hsl(358, 70%, 52%)' },
      900: { value: 'hsl(358, 66%, 48%)' },
      950: { value: 'hsl(355, 49%, 15%)' },
    },
  },
  redP3: {
    dark: {
      DEFAULT: { value: 'var(--colors-red-p3-dark-600)' },
      100: { value: 'oklch(22.1% 0.0657 15.11)' },
      200: { value: 'oklch(25.93% 0.0834 19.02)' },
      300: { value: 'oklch(31.47% 0.1105 20.96)' },
      400: { value: 'oklch(35.27% 0.1273 21.23)' },
      500: { value: 'oklch(40.68% 0.1479 23.16)' },
      600: { value: 'oklch(62.56% 0.2277 23.03)' },
      700: { value: 'oklch(62.56% 0.2234 23.03)' },
      800: { value: 'oklch(58.01% 0.227 25.12)' },
      900: { value: 'oklch(69.96% 0.2136 22.03)' },
      950: { value: 'oklch(95.6% 0.0293 6.61)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-red-p3-light-600)' },
      100: { value: 'oklch(96.5% 0.0223 13.09)' },
      200: { value: 'oklch(95.41% 0.0299 14.252646656611997)' },
      300: { value: 'oklch(94.33% 0.0369 15.011509923860523)' },
      400: { value: 'oklch(91.51% 0.0471 19.8)' },
      500: { value: 'oklch(84.47% 0.1018 17.71)' },
      600: { value: 'oklch(71.12% 0.1881 21.22)' },
      700: { value: 'oklch(62.56% 0.2524 23.03)' },
      800: { value: 'oklch(58.19% 0.2482 25.15)' },
      900: { value: 'oklch(54.99% 0.232 25.29)' },
      950: { value: 'oklch(24.8% 0.1041 18.86)' },
    },
  },
  yellow: {
    dark: {
      DEFAULT: { value: 'var(--colors-yellow-dark-600)' },
      100: { value: 'hsl(35, 100%, 8%)' },
      200: { value: 'hsl(32, 100%, 10%)' },
      300: { value: 'hsl(33, 100%, 15%)' },
      400: { value: 'hsl(35, 100%, 17%)' },
      500: { value: 'hsl(35, 91%, 22%)' },
      600: { value: 'hsl(39, 85%, 49%)' },
      700: { value: 'hsl(39, 100%, 57%)' },
      800: { value: 'hsl(35, 100%, 52%)' },
      900: { value: 'hsl(35, 100%, 52%)' },
      950: { value: 'hsl(40, 94%, 93%)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-yellow-light-600)' },
      100: { value: 'hsl(39, 100%, 95%)' },
      200: { value: 'hsl(44, 100%, 92%)' },
      300: { value: 'hsl(43, 96%, 90%)' },
      400: { value: 'hsl(42, 100%, 78%)' },
      500: { value: 'hsl(38, 100%, 71%)' },
      600: { value: 'hsl(36, 90%, 62%)' },
      700: { value: 'hsl(39, 100%, 57%)' },
      800: { value: 'hsl(35, 100%, 52%)' },
      900: { value: 'hsl(30, 100%, 32%)' },
      950: { value: 'hsl(20, 79%, 17%)' },
    },
  },
  yellowP3: {
    dark: {
      DEFAULT: { value: 'var(--colors-yellow-p3-dark-600)' },
      100: { value: 'oklch(22.46% 0.0538 76.04)' },
      200: { value: 'oklch(24.95% 0.0642 64.78)' },
      300: { value: 'oklch(32.34% 0.0837 63.83)' },
      400: { value: 'oklch(35.53% 0.0903 66.29707162673735)' },
      500: { value: 'oklch(41.55% 0.1044 67.98)' },
      600: { value: 'oklch(75.04% 0.1737 74.49)' },
      700: { value: 'oklch(81.87% 0.1969 76.46)' },
      800: { value: 'oklch(77.21% 0.1991 64.28)' },
      900: { value: 'oklch(77.21% 0.1991 64.28)' },
      950: { value: 'oklch(96.7% 0.0418 84.59)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-yellow-p3-light-600)' },
      100: { value: 'oklch(97.48% 0.0331 85.79)' },
      200: { value: 'oklch(96.81% 0.0495 90.24227879900472)' },
      300: { value: 'oklch(95.93% 0.0636 90.52)' },
      400: { value: 'oklch(91.02% 0.1322 88.25)' },
      500: { value: 'oklch(86.55% 0.1583 79.63)' },
      600: { value: 'oklch(80.25% 0.1953 73.59)' },
      700: { value: 'oklch(81.87% 0.1969 76.46)' },
      800: { value: 'oklch(77.21% 0.1991 64.28)' },
      900: { value: 'oklch(52.79% 0.1496 54.65)' },
      950: { value: 'oklch(30.83% 0.099 45.48)' },
    },
  },
  green: {
    dark: {
      DEFAULT: { value: 'var(--colors-green-dark-600)' },
      100: { value: 'hsl(136, 50%, 9%)' },
      200: { value: 'hsl(137, 50%, 12%)' },
      300: { value: 'hsl(136, 50%, 14%)' },
      400: { value: 'hsl(135, 70%, 16%)' },
      500: { value: 'hsl(135, 70%, 23%)' },
      600: { value: 'hsl(135, 70%, 34%)' },
      700: { value: 'hsl(131, 41%, 46%)' },
      800: { value: 'hsl(132, 43%, 39%)' },
      900: { value: 'hsl(131, 43%, 57%)' },
      950: { value: 'hsl(136, 73%, 94%)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-green-light-600)' },
      100: { value: 'hsl(120, 60%, 96%)' },
      200: { value: 'hsl(120, 60%, 95%)' },
      300: { value: 'hsl(120, 60%, 91%)' },
      400: { value: 'hsl(122, 60%, 86%)' },
      500: { value: 'hsl(124, 60%, 75%)' },
      600: { value: 'hsl(125, 60%, 64%)' },
      700: { value: 'hsl(131, 41%, 46%)' },
      800: { value: 'hsl(132, 43%, 39%)' },
      900: { value: 'hsl(133, 50%, 32%)' },
      950: { value: 'hsl(128, 29%, 15%)' },
    },
  },
  greenP3: {
    dark: {
      DEFAULT: { value: 'var(--colors-green-p3-dark-600)' },
      100: { value: 'oklch(23.09% 0.0716 149.68)' },
      200: { value: 'oklch(27.12% 0.0895 150.09)' },
      300: { value: 'oklch(29.84% 0.096 149.25)' },
      400: { value: 'oklch(34.39% 0.1039 147.78)' },
      500: { value: 'oklch(44.19% 0.1484 147.2)' },
      600: { value: 'oklch(58.11% 0.1815 146.55)' },
      700: { value: 'oklch(64.58% 0.199 147.27)' },
      800: { value: 'oklch(57.81% 0.1776 147.5)' },
      900: { value: 'oklch(73.1% 0.2158 148.29)' },
      950: { value: 'oklch(96.76% 0.056 154.18)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-green-p3-light-600)' },
      100: { value: 'oklch(97.59% 0.0289 145.42)' },
      200: { value: 'oklch(96.92% 0.037 147.15)' },
      300: { value: 'oklch(94.6% 0.0674 144.23)' },
      400: { value: 'oklch(91.49% 0.0976 146.24)' },
      500: { value: 'oklch(85.45% 0.1627 146.3)' },
      600: { value: 'oklch(80.25% 0.214 145.18)' },
      700: { value: 'oklch(64.58% 0.1746 147.27)' },
      800: { value: 'oklch(57.81% 0.1507 147.5)' },
      900: { value: 'oklch(51.75% 0.1453 147.65)' },
      950: { value: 'oklch(29.15% 0.1197 147.38)' },
    },
  },
  teal: {
    dark: {
      DEFAULT: { value: 'var(--colors-teal-dark-600)' },
      100: { value: 'hsl(169, 78%, 7%)' },
      200: { value: 'hsl(170, 74%, 9%)' },
      300: { value: 'hsl(171, 75%, 13%)' },
      400: { value: 'hsl(171, 85%, 13%)' },
      500: { value: 'hsl(172, 85%, 20%)' },
      600: { value: 'hsl(172, 85%, 32%)' },
      700: { value: 'hsl(173, 80%, 36%)' },
      800: { value: 'hsl(173, 83%, 30%)' },
      900: { value: 'hsl(174, 90%, 41%)' },
      950: { value: 'hsl(166, 71%, 93%)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-teal-light-600)' },
      100: { value: 'hsl(169, 70%, 96%)' },
      200: { value: 'hsl(167, 70%, 94%)' },
      300: { value: 'hsl(168, 70%, 90%)' },
      400: { value: 'hsl(170, 70%, 85%)' },
      500: { value: 'hsl(170, 70%, 72%)' },
      600: { value: 'hsl(170, 70%, 57%)' },
      700: { value: 'hsl(173, 80%, 36%)' },
      800: { value: 'hsl(173, 83%, 30%)' },
      900: { value: 'hsl(174, 91%, 25%)' },
      950: { value: 'hsl(171, 80%, 13%)' },
    },
  },
  tealP3: {
    dark: {
      DEFAULT: { value: 'var(--colors-teal-p3-dark-600)' },
      100: { value: 'oklch(22.1% 0.0544 178.74)' },
      200: { value: 'oklch(25.06% 0.062 178.76)' },
      300: { value: 'oklch(31.5% 0.0767 180.99)' },
      400: { value: 'oklch(32.43% 0.0763 180.13)' },
      500: { value: 'oklch(43.35% 0.1055 180.97)' },
      600: { value: 'oklch(60.71% 0.1485 180.24)' },
      700: { value: 'oklch(64.92% 0.1403 181.95)' },
      800: { value: 'oklch(57.53% 0.1392 181.66)' },
      900: { value: 'oklch(74.56% 0.1765 182.8)' },
      950: { value: 'oklch(96.46% 0.056 180.29)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-teal-p3-light-600)' },
      100: { value: 'oklch(97.72% 0.0359 186.7)' },
      200: { value: 'oklch(97.06% 0.0347 180.66)' },
      300: { value: 'oklch(94.92% 0.0478 182.07)' },
      400: { value: 'oklch(92.76% 0.0718 183.78)' },
      500: { value: 'oklch(86.88% 0.1344 182.42)' },
      600: { value: 'oklch(81.5% 0.161 178.96)' },
      700: { value: 'oklch(64.92% 0.1572 181.95)' },
      800: { value: 'oklch(57.53% 0.1392 181.66)' },
      900: { value: 'oklch(52.08% 0.1251 182.93)' },
      950: { value: 'oklch(32.11% 0.0788 179.82)' },
    },
  },
  purple: {
    dark: {
      DEFAULT: { value: 'var(--colors-purple-dark-600)' },
      100: { value: 'hsl(283, 30%, 12%)' },
      200: { value: 'hsl(281, 38%, 16%)' },
      300: { value: 'hsl(279, 44%, 23%)' },
      400: { value: 'hsl(277, 46%, 28%)' },
      500: { value: 'hsl(274, 49%, 35%)' },
      600: { value: 'hsl(272, 51%, 54%)' },
      700: { value: 'hsl(272, 51%, 54%)' },
      800: { value: 'hsl(272, 47%, 45%)' },
      900: { value: 'hsl(275, 80%, 71%)' },
      950: { value: 'hsl(281, 73%, 96%)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-purple-light-600)' },
      100: { value: 'hsl(276, 100%, 97%)' },
      200: { value: 'hsl(277, 87%, 97%)' },
      300: { value: 'hsl(274, 78%, 95%)' },
      400: { value: 'hsl(276, 71%, 92%)' },
      500: { value: 'hsl(274, 70%, 82%)' },
      600: { value: 'hsl(273, 72%, 73%)' },
      700: { value: 'hsl(272, 51%, 54%)' },
      800: { value: 'hsl(272, 47%, 45%)' },
      900: { value: 'hsl(274, 71%, 43%)' },
      950: { value: 'hsl(276, 100%, 15%)' },
    },
  },
  purpleP3: {
    dark: {
      DEFAULT: { value: 'var(--colors-purple-p3-dark-600)' },
      100: { value: 'oklch(22.34% 0.0779 316.87)' },
      200: { value: 'oklch(25.91% 0.0921 314.41)' },
      300: { value: 'oklch(31.98% 0.1219 312.41)' },
      400: { value: 'oklch(35.93% 0.1504 309.78)' },
      500: { value: 'oklch(40.99% 0.1721 307.92)' },
      600: { value: 'oklch(55.5% 0.2191 306.12)' },
      700: { value: 'oklch(55.5% 0.2186 306.12)' },
      800: { value: 'oklch(48.58% 0.2102 305.73)' },
      900: { value: 'oklch(69.87% 0.2037 309.51)' },
      950: { value: 'oklch(96.1% 0.0304 316.46)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-purple-p3-light-600)' },
      100: { value: 'oklch(96.65% 0.0244 312.1890119359961)' },
      200: { value: 'oklch(96.73% 0.0228 309.8)' },
      300: { value: 'oklch(94.85% 0.0364 310.15)' },
      400: { value: 'oklch(91.77% 0.0614 312.82)' },
      500: { value: 'oklch(81.26% 0.1409 310.8)' },
      600: { value: 'oklch(72.07% 0.2083 308.19)' },
      700: { value: 'oklch(55.5% 0.3008 306.12)' },
      800: { value: 'oklch(48.58% 0.2638 305.73)' },
      900: { value: 'oklch(47.18% 0.2579 304.0)' },
      950: { value: 'oklch(23.96% 0.13 305.66)' },
    },
  },
  pink: {
    dark: {
      DEFAULT: { value: 'var(--colors-pink-dark-600)' },
      100: { value: 'hsl(335, 32%, 12%)' },
      200: { value: 'hsl(335, 43%, 16%)' },
      300: { value: 'hsl(335, 47%, 21%)' },
      400: { value: 'hsl(335, 51%, 22%)' },
      500: { value: 'hsl(335, 57%, 27%)' },
      600: { value: 'hsl(336, 75%, 40%)' },
      700: { value: 'hsl(336, 80%, 58%)' },
      800: { value: 'hsl(336, 74%, 51%)' },
      900: { value: 'hsl(341, 90%, 67%)' },
      950: { value: 'hsl(333, 90%, 96%)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-pink-light-600)' },
      100: { value: 'hsl(330, 100%, 96%)' },
      200: { value: 'hsl(340, 90%, 96%)' },
      300: { value: 'hsl(340, 82%, 94%)' },
      400: { value: 'hsl(341, 76%, 91%)' },
      500: { value: 'hsl(340, 75%, 84%)' },
      600: { value: 'hsl(341, 75%, 73%)' },
      700: { value: 'hsl(336, 80%, 58%)' },
      800: { value: 'hsl(336, 74%, 51%)' },
      900: { value: 'hsl(336, 65%, 45%)' },
      950: { value: 'hsl(333, 74%, 15%)' },
    },
  },
  pinkP3: {
    dark: {
      DEFAULT: { value: 'var(--colors-pink-p3-dark-600)' },
      100: { value: 'oklch(22.67% 0.0628 354.73)' },
      200: { value: 'oklch(26.2% 0.0859 356.68)' },
      300: { value: 'oklch(31.15% 0.1067 355.93)' },
      400: { value: 'oklch(32.13% 0.1174 356.71)' },
      500: { value: 'oklch(37.01% 0.1453 358.39)' },
      600: { value: 'oklch(50.33% 0.2089 4.33)' },
      700: { value: 'oklch(63.52% 0.2346 1.01)' },
      800: { value: 'oklch(59.51% 0.2429 4.21)' },
      900: { value: 'oklch(69.36% 0.2223 3.91)' },
      950: { value: 'oklch(95.74% 0.0326 350.08)' },
    },
    light: {
      DEFAULT: { value: 'var(--colors-pink-p3-light-600)' },
      100: { value: 'oklch(95.69% 0.0359 344.6218910697224)' },
      200: { value: 'oklch(95.71% 0.0321 353.14)' },
      300: { value: 'oklch(93.83% 0.0451 356.29)' },
      400: { value: 'oklch(91.12% 0.0573 358.82)' },
      500: { value: 'oklch(84.28% 0.0915 356.99)' },
      600: { value: 'oklch(74.33% 0.1547 0.24)' },
      700: { value: 'oklch(63.52% 0.238 1.01)' },
      800: { value: 'oklch(59.51% 0.2339 4.21)' },
      900: { value: 'oklch(53.5% 0.2058 2.84)' },
      950: { value: 'oklch(26% 0.0977 359.0)' },
    },
  },
})

// type ColorLevel = 'DEFAULT' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950'
type ColorName = keyof typeof presetColors
type SemanticColorToken = Recursive<SemanticToken<string>>

// type ColorTheme = 'dark' | 'light'
// type ColorDef = {
//   [theme in ColorTheme]: {
//     [level in ColorLevel]: {
//       value: string
//     }
//   }
// }

function semanticizeColor(color: ColorName, withP3: boolean): SemanticColorToken {
  const semanticColorData: SemanticColorToken = {}
  for (const level of ['DEFAULT', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const) {
    const levelSuffix = level === 'DEFAULT' ? '' : `-${level}`
    const withP3Props = withP3
      ? {
          _colorGamutP3: {
            _supportsP3: {
              base: `var(--colors-${color}-p3-light${levelSuffix})`,
              _dark: `var(--colors-${color}-p3-dark${levelSuffix})`,
            },
          },
        }
      : undefined

    semanticColorData[level] = {
      value: {
        base: `var(--colors-${color}-light${levelSuffix})`,
        _dark: `var(--colors-${color}-dark${levelSuffix})`,
        ...withP3Props,
      },
    }
  }

  semanticColorData.bg1 = semanticColorData[100]
  semanticColorData.bg2 = semanticColorData[200]
  semanticColorData.bg3 = semanticColorData[300]
  semanticColorData.border1 = semanticColorData[400]
  semanticColorData.border2 = semanticColorData[500]
  semanticColorData.border3 = semanticColorData[600]
  semanticColorData.solid1 = semanticColorData[700]
  semanticColorData.solid2 = semanticColorData[800]
  semanticColorData.fg1 = semanticColorData[900]
  semanticColorData.fg2 = semanticColorData[950]

  return semanticColorData
}

function semanticizeBgColor(color: ColorName, isFg: boolean): SemanticColorToken {
  const semanticColorData: SemanticColorToken = {}
  for (const level of ['DEFAULT', '100', '200', '300'] as const) {
    const levelSuffix = level === 'DEFAULT' ? '' : `-${level}`

    semanticColorData[level] = {
      value: {
        base: `var(--colors-${color}-light${levelSuffix})`,
        _dark: `var(--colors-${color}-dark${levelSuffix})`,
      },
    }
  }

  semanticColorData.subtle = semanticColorData[200]
  semanticColorData.muted = semanticColorData[300]

  return semanticColorData
}

const basePresetSemanticColors = defineSemanticTokens.colors({
  bg: semanticizeBgColor('bg', false),
  fg: semanticizeBgColor('fg', true),
  gray: semanticizeColor('gray', false),
  shade: semanticizeColor('shade', false),
  blue: semanticizeColor('blue', true),
  red: semanticizeColor('red', true),
  yellow: semanticizeColor('yellow', true),
  green: semanticizeColor('green', true),
  teal: semanticizeColor('teal', true),
  purple: semanticizeColor('purple', true),
  pink: semanticizeColor('pink', true),
  // aliases:
  neutral: semanticizeColor('gray', true),
  primary: semanticizeColor('blue', true),
  secondary: semanticizeColor('gray', true),
  accent: semanticizeColor('blue', true),
  success: semanticizeColor('green', true),
  warning: semanticizeColor('yellow', true),
  danger: semanticizeColor('red', true),
  info: semanticizeColor('teal', true),
})

// export const presetSemanticColorMap: Record<keyof typeof presetSemanticColors, keyof typeof presetColors> = {
//   bg: 'contrast',
//   fg: 'contrast',
//   gray: 'gray',
//   shade: 'shade',
//   // aliases:
//   neutral: 'gray',
//   primary: 'blue',
//   secondary: 'gray',
//   accent: 'blue',
//   danger: 'red',
//   warning: 'yellow',
//   success: 'green',
//   info: 'teal',
// }

export const presetSemanticColors = defineSemanticTokens.colors({
  ...basePresetSemanticColors,
})
