import { definePreset } from '@pandacss/dev'

export const colorSystemPreset = definePreset({
  conditions: {
    extend: {
      mediaP3: '@media (color-gamut:p3)',
      supportsP3: '@supports (color: oklch(0 0 0))',
    },
  },
  theme: {
    extend: {
      tokens: {
        colors: {
          bg: {
            dark: {
              '100': {
                value: '#000',
              },
              '200': {
                value: '#0A0A0A',
              },
              '300': {
                value: '#111111',
              },
              DEFAULT: {
                value: '#000',
              },
            },
            light: {
              '100': {
                value: '#fff',
              },
              '200': {
                value: '#FAFAFA',
              },
              '300': {
                value: '#EEEEEE',
              },
              DEFAULT: {
                value: '#fff',
              },
            },
          },
          bgP3: {
            dark: {},
            light: {},
          },
          fg: {
            dark: {
              '100': {
                value: '#fff',
              },
              '200': {
                value: '#DDDDDD',
              },
              '300': {
                value: '#A1A1A1',
              },
              DEFAULT: {
                value: '#fff',
              },
            },
            light: {
              '100': {
                value: '#000',
              },
              '200': {
                value: '#222222',
              },
              '300': {
                value: '#666666',
              },
              DEFAULT: {
                value: '#000',
              },
            },
          },
          fgP3: {
            dark: {},
            light: {},
          },
          gray: {
            dark: {
              '100': {
                value: 'hsl(0, 0%, 10%)',
              },
              '200': {
                value: 'hsl(0, 0%, 12%)',
              },
              '300': {
                value: 'hsl(0, 0%, 16%)',
              },
              '400': {
                value: 'hsl(0, 0%, 18%)',
              },
              '500': {
                value: 'hsl(0, 0%, 27%)',
              },
              '600': {
                value: 'hsl(0, 0%, 53%)',
              },
              '700': {
                value: 'hsl(0, 0%, 56%)',
              },
              '800': {
                value: 'hsl(0, 0%, 49%)',
              },
              '900': {
                value: 'hsl(0, 0%, 63%)',
              },
              '950': {
                value: 'hsl(0, 0%, 93%)',
              },
              DEFAULT: {
                value: 'hsl(0, 0%, 53%)',
              },
            },
            light: {
              '100': {
                value: 'hsl(0, 0%, 95%)',
              },
              '200': {
                value: 'hsl(0, 0%, 92%)',
              },
              '300': {
                value: 'hsl(0, 0%, 90%)',
              },
              '400': {
                value: 'hsl(0, 0%, 92%)',
              },
              '500': {
                value: 'hsl(0, 0%, 79%)',
              },
              '600': {
                value: 'hsl(0, 0%, 66%)',
              },
              '700': {
                value: 'hsl(0, 0%, 56%)',
              },
              '800': {
                value: 'hsl(0, 0%, 49%)',
              },
              '900': {
                value: 'hsl(0, 0%, 40%)',
              },
              '950': {
                value: 'hsl(0, 0%, 9%)',
              },
              DEFAULT: {
                value: 'hsl(0, 0%, 66%)',
              },
            },
          },
          grayP3: {
            dark: {},
            light: {},
          },
          alpha: {
            dark: {
              '100': {
                value: 'hsla(0, 0%, 100%, .06)',
              },
              '200': {
                value: 'hsla(0, 0%, 100%, .09)',
              },
              '300': {
                value: 'hsla(0, 0%, 100%, .13)',
              },
              '400': {
                value: 'hsla(0, 0%, 100%, .14)',
              },
              '500': {
                value: 'hsla(0, 0%, 100%, .24)',
              },
              '600': {
                value: 'hsla(0, 0%, 100%, .51)',
              },
              '700': {
                value: 'hsla(0, 0%, 100%, .54)',
              },
              '800': {
                value: 'hsla(0, 0%, 100%, .47)',
              },
              '900': {
                value: 'hsla(0, 0%, 100%, .61)',
              },
              '950': {
                value: 'hsla(0, 0%, 100%, .92)',
              },
              DEFAULT: {
                value: 'hsla(0, 0%, 100%, .51)',
              },
            },
            light: {
              '100': {
                value: 'rgba(0, 0, 0, .05)',
              },
              '200': {
                value: 'rgba(0, 0, 0, .08)',
              },
              '300': {
                value: 'rgba(0, 0, 0, .1)',
              },
              '400': {
                value: 'rgba(0, 0, 0, .08)',
              },
              '500': {
                value: 'rgba(0, 0, 0, .21)',
              },
              '600': {
                value: 'rgba(0, 0, 0, .34)',
              },
              '700': {
                value: 'rgba(0, 0, 0, .44)',
              },
              '800': {
                value: 'rgba(0, 0, 0, .51)',
              },
              '900': {
                value: 'rgba(0, 0, 0, .61)',
              },
              '950': {
                value: 'rgba(0, 0, 0, .91)',
              },
              DEFAULT: {
                value: 'rgba(0, 0, 0, .34)',
              },
            },
          },
          alphaP3: {
            dark: {},
            light: {},
          },
          blue: {
            dark: {
              '100': {
                value: 'hsl(216, 50%, 12%)',
              },
              '200': {
                value: 'hsl(214, 59%, 15%)',
              },
              '300': {
                value: 'hsl(213, 71%, 20%)',
              },
              '400': {
                value: 'hsl(212, 78%, 23%)',
              },
              '500': {
                value: 'hsl(211, 86%, 27%)',
              },
              '600': {
                value: 'hsl(206, 100%, 50%)',
              },
              '700': {
                value: 'hsl(212, 100%, 48%)',
              },
              '800': {
                value: 'hsl(212, 100%, 41%)',
              },
              '900': {
                value: 'hsl(210, 100%, 66%)',
              },
              '950': {
                value: 'hsl(206, 100%, 96%)',
              },
              DEFAULT: {
                value: 'hsl(206, 100%, 50%)',
              },
            },
            light: {
              '100': {
                value: 'hsl(212, 100%, 97%)',
              },
              '200': {
                value: 'hsl(210, 100%, 96%)',
              },
              '300': {
                value: 'hsl(210, 100%, 94%)',
              },
              '400': {
                value: 'hsl(209, 100%, 90%)',
              },
              '500': {
                value: 'hsl(209, 100%, 80%)',
              },
              '600': {
                value: 'hsl(208, 100%, 66%)',
              },
              '700': {
                value: 'hsl(212, 100%, 48%)',
              },
              '800': {
                value: 'hsl(212, 100%, 41%)',
              },
              '900': {
                value: 'hsl(211, 100%, 42%)',
              },
              '950': {
                value: 'hsl(211, 100%, 15%)',
              },
              DEFAULT: {
                value: 'hsl(208, 100%, 66%)',
              },
            },
          },
          blueP3: {
            dark: {
              '100': {
                value: 'oklch(22.17% 0.069 259.89)',
              },
              '200': {
                value: 'oklch(25.45% 0.0811 255.8)',
              },
              '300': {
                value: 'oklch(30.86% 0.1022 255.21)',
              },
              '400': {
                value: 'oklch(34.1% 0.121 254.74)',
              },
              '500': {
                value: 'oklch(38.5% 0.1403 254.4)',
              },
              '600': {
                value: 'oklch(64.94% 0.1982 251.8131841760864)',
              },
              '700': {
                value: 'oklch(57.61% 0.2321 258.23)',
              },
              '800': {
                value: 'oklch(51.51% 0.2307 257.85)',
              },
              '900': {
                value: 'oklch(71.7% 0.1648 250.79360374054167)',
              },
              '950': {
                value: 'oklch(96.75% 0.0179 242.4234217368056)',
              },
              DEFAULT: {
                value: 'oklch(64.94% 0.1982 251.8131841760864)',
              },
            },
            light: {
              '100': {
                value: 'oklch(97.32% 0.0141 251.56)',
              },
              '200': {
                value: 'oklch(96.29% 0.0195 250.59)',
              },
              '300': {
                value: 'oklch(94.58% 0.0293 249.84870859673202)',
              },
              '400': {
                value: 'oklch(91.58% 0.0473 245.11621922481282)',
              },
              '500': {
                value: 'oklch(82.75% 0.0979 248.48)',
              },
              '600': {
                value: 'oklch(73.08% 0.1583 248.133320980386)',
              },
              '700': {
                value: 'oklch(57.61% 0.2508 258.23)',
              },
              '800': {
                value: 'oklch(51.51% 0.2399 257.85)',
              },
              '900': {
                value: 'oklch(53.18% 0.2399 256.9900584162342)',
              },
              '950': {
                value: 'oklch(26.67% 0.1099 254.34)',
              },
              DEFAULT: {
                value: 'oklch(73.08% 0.1583 248.133320980386)',
              },
            },
          },
          red: {
            dark: {
              '100': {
                value: 'hsl(357, 37%, 12%)',
              },
              '200': {
                value: 'hsl(357, 46%, 16%)',
              },
              '300': {
                value: 'hsl(356, 54%, 22%)',
              },
              '400': {
                value: 'hsl(357, 55%, 26%)',
              },
              '500': {
                value: 'hsl(357, 60%, 32%)',
              },
              '600': {
                value: 'hsl(358, 75%, 59%)',
              },
              '700': {
                value: 'hsl(358, 75%, 59%)',
              },
              '800': {
                value: 'hsl(358, 69%, 52%)',
              },
              '900': {
                value: 'hsl(358, 100%, 69%)',
              },
              '950': {
                value: 'hsl(353, 90%, 96%)',
              },
              DEFAULT: {
                value: 'hsl(358, 75%, 59%)',
              },
            },
            light: {
              '100': {
                value: 'hsl(0, 100%, 97%)',
              },
              '200': {
                value: 'hsl(0, 100%, 96%)',
              },
              '300': {
                value: 'hsl(0, 100%, 95%)',
              },
              '400': {
                value: 'hsl(0, 90%, 92%)',
              },
              '500': {
                value: 'hsl(0, 82%, 85%)',
              },
              '600': {
                value: 'hsl(359, 90%, 71%)',
              },
              '700': {
                value: 'hsl(358, 75%, 59%)',
              },
              '800': {
                value: 'hsl(358, 70%, 52%)',
              },
              '900': {
                value: 'hsl(358, 66%, 48%)',
              },
              '950': {
                value: 'hsl(355, 49%, 15%)',
              },
              DEFAULT: {
                value: 'hsl(359, 90%, 71%)',
              },
            },
          },
          redP3: {
            dark: {
              '100': {
                value: 'oklch(22.1% 0.0657 15.11)',
              },
              '200': {
                value: 'oklch(25.93% 0.0834 19.02)',
              },
              '300': {
                value: 'oklch(31.47% 0.1105 20.96)',
              },
              '400': {
                value: 'oklch(35.27% 0.1273 21.23)',
              },
              '500': {
                value: 'oklch(40.68% 0.1479 23.16)',
              },
              '600': {
                value: 'oklch(62.56% 0.2277 23.03)',
              },
              '700': {
                value: 'oklch(62.56% 0.2234 23.03)',
              },
              '800': {
                value: 'oklch(58.01% 0.227 25.12)',
              },
              '900': {
                value: 'oklch(69.96% 0.2136 22.03)',
              },
              '950': {
                value: 'oklch(95.6% 0.0293 6.61)',
              },
              DEFAULT: {
                value: 'oklch(62.56% 0.2277 23.03)',
              },
            },
            light: {
              '100': {
                value: 'oklch(96.5% 0.0223 13.09)',
              },
              '200': {
                value: 'oklch(95.41% 0.0299 14.252646656611997)',
              },
              '300': {
                value: 'oklch(94.33% 0.0369 15.011509923860523)',
              },
              '400': {
                value: 'oklch(91.51% 0.0471 19.8)',
              },
              '500': {
                value: 'oklch(84.47% 0.1018 17.71)',
              },
              '600': {
                value: 'oklch(71.12% 0.1881 21.22)',
              },
              '700': {
                value: 'oklch(62.56% 0.2524 23.03)',
              },
              '800': {
                value: 'oklch(58.19% 0.2482 25.15)',
              },
              '900': {
                value: 'oklch(54.99% 0.232 25.29)',
              },
              '950': {
                value: 'oklch(24.8% 0.1041 18.86)',
              },
              DEFAULT: {
                value: 'oklch(71.12% 0.1881 21.22)',
              },
            },
          },
          yellow: {
            dark: {
              '100': {
                value: 'hsl(35, 100%, 8%)',
              },
              '200': {
                value: 'hsl(32, 100%, 10%)',
              },
              '300': {
                value: 'hsl(33, 100%, 15%)',
              },
              '400': {
                value: 'hsl(35, 100%, 17%)',
              },
              '500': {
                value: 'hsl(35, 91%, 22%)',
              },
              '600': {
                value: 'hsl(39, 85%, 49%)',
              },
              '700': {
                value: 'hsl(39, 100%, 57%)',
              },
              '800': {
                value: 'hsl(35, 100%, 52%)',
              },
              '900': {
                value: 'hsl(35, 100%, 52%)',
              },
              '950': {
                value: 'hsl(40, 94%, 93%)',
              },
              DEFAULT: {
                value: 'hsl(39, 85%, 49%)',
              },
            },
            light: {
              '100': {
                value: 'hsl(39, 100%, 95%)',
              },
              '200': {
                value: 'hsl(44, 100%, 92%)',
              },
              '300': {
                value: 'hsl(43, 96%, 90%)',
              },
              '400': {
                value: 'hsl(42, 100%, 78%)',
              },
              '500': {
                value: 'hsl(38, 100%, 71%)',
              },
              '600': {
                value: 'hsl(36, 90%, 62%)',
              },
              '700': {
                value: 'hsl(39, 100%, 57%)',
              },
              '800': {
                value: 'hsl(35, 100%, 52%)',
              },
              '900': {
                value: 'hsl(30, 100%, 32%)',
              },
              '950': {
                value: 'hsl(20, 79%, 17%)',
              },
              DEFAULT: {
                value: 'hsl(36, 90%, 62%)',
              },
            },
          },
          yellowP3: {
            dark: {
              '100': {
                value: 'oklch(22.46% 0.0538 76.04)',
              },
              '200': {
                value: 'oklch(24.95% 0.0642 64.78)',
              },
              '300': {
                value: 'oklch(32.34% 0.0837 63.83)',
              },
              '400': {
                value: 'oklch(35.53% 0.0903 66.29707162673735)',
              },
              '500': {
                value: 'oklch(41.55% 0.1044 67.98)',
              },
              '600': {
                value: 'oklch(75.04% 0.1737 74.49)',
              },
              '700': {
                value: 'oklch(81.87% 0.1969 76.46)',
              },
              '800': {
                value: 'oklch(77.21% 0.1991 64.28)',
              },
              '900': {
                value: 'oklch(77.21% 0.1991 64.28)',
              },
              '950': {
                value: 'oklch(96.7% 0.0418 84.59)',
              },
              DEFAULT: {
                value: 'oklch(75.04% 0.1737 74.49)',
              },
            },
            light: {
              '100': {
                value: 'oklch(97.48% 0.0331 85.79)',
              },
              '200': {
                value: 'oklch(96.81% 0.0495 90.24227879900472)',
              },
              '300': {
                value: 'oklch(95.93% 0.0636 90.52)',
              },
              '400': {
                value: 'oklch(91.02% 0.1322 88.25)',
              },
              '500': {
                value: 'oklch(86.55% 0.1583 79.63)',
              },
              '600': {
                value: 'oklch(80.25% 0.1953 73.59)',
              },
              '700': {
                value: 'oklch(81.87% 0.1969 76.46)',
              },
              '800': {
                value: 'oklch(77.21% 0.1991 64.28)',
              },
              '900': {
                value: 'oklch(52.79% 0.1496 54.65)',
              },
              '950': {
                value: 'oklch(30.83% 0.099 45.48)',
              },
              DEFAULT: {
                value: 'oklch(80.25% 0.1953 73.59)',
              },
            },
          },
          green: {
            dark: {
              '100': {
                value: 'hsl(136, 50%, 9%)',
              },
              '200': {
                value: 'hsl(137, 50%, 12%)',
              },
              '300': {
                value: 'hsl(136, 50%, 14%)',
              },
              '400': {
                value: 'hsl(135, 70%, 16%)',
              },
              '500': {
                value: 'hsl(135, 70%, 23%)',
              },
              '600': {
                value: 'hsl(135, 70%, 34%)',
              },
              '700': {
                value: 'hsl(131, 41%, 46%)',
              },
              '800': {
                value: 'hsl(132, 43%, 39%)',
              },
              '900': {
                value: 'hsl(131, 43%, 57%)',
              },
              '950': {
                value: 'hsl(136, 73%, 94%)',
              },
              DEFAULT: {
                value: 'hsl(135, 70%, 34%)',
              },
            },
            light: {
              '100': {
                value: 'hsl(120, 60%, 96%)',
              },
              '200': {
                value: 'hsl(120, 60%, 95%)',
              },
              '300': {
                value: 'hsl(120, 60%, 91%)',
              },
              '400': {
                value: 'hsl(122, 60%, 86%)',
              },
              '500': {
                value: 'hsl(124, 60%, 75%)',
              },
              '600': {
                value: 'hsl(125, 60%, 64%)',
              },
              '700': {
                value: 'hsl(131, 41%, 46%)',
              },
              '800': {
                value: 'hsl(132, 43%, 39%)',
              },
              '900': {
                value: 'hsl(133, 50%, 32%)',
              },
              '950': {
                value: 'hsl(128, 29%, 15%)',
              },
              DEFAULT: {
                value: 'hsl(125, 60%, 64%)',
              },
            },
          },
          greenP3: {
            dark: {
              '100': {
                value: 'oklch(23.09% 0.0716 149.68)',
              },
              '200': {
                value: 'oklch(27.12% 0.0895 150.09)',
              },
              '300': {
                value: 'oklch(29.84% 0.096 149.25)',
              },
              '400': {
                value: 'oklch(34.39% 0.1039 147.78)',
              },
              '500': {
                value: 'oklch(44.19% 0.1484 147.2)',
              },
              '600': {
                value: 'oklch(58.11% 0.1815 146.55)',
              },
              '700': {
                value: 'oklch(64.58% 0.199 147.27)',
              },
              '800': {
                value: 'oklch(57.81% 0.1776 147.5)',
              },
              '900': {
                value: 'oklch(73.1% 0.2158 148.29)',
              },
              '950': {
                value: 'oklch(96.76% 0.056 154.18)',
              },
              DEFAULT: {
                value: 'oklch(58.11% 0.1815 146.55)',
              },
            },
            light: {
              '100': {
                value: 'oklch(97.59% 0.0289 145.42)',
              },
              '200': {
                value: 'oklch(96.92% 0.037 147.15)',
              },
              '300': {
                value: 'oklch(94.6% 0.0674 144.23)',
              },
              '400': {
                value: 'oklch(91.49% 0.0976 146.24)',
              },
              '500': {
                value: 'oklch(85.45% 0.1627 146.3)',
              },
              '600': {
                value: 'oklch(80.25% 0.214 145.18)',
              },
              '700': {
                value: 'oklch(64.58% 0.1746 147.27)',
              },
              '800': {
                value: 'oklch(57.81% 0.1507 147.5)',
              },
              '900': {
                value: 'oklch(51.75% 0.1453 147.65)',
              },
              '950': {
                value: 'oklch(29.15% 0.1197 147.38)',
              },
              DEFAULT: {
                value: 'oklch(80.25% 0.214 145.18)',
              },
            },
          },
          teal: {
            dark: {
              '100': {
                value: 'hsl(169, 78%, 7%)',
              },
              '200': {
                value: 'hsl(170, 74%, 9%)',
              },
              '300': {
                value: 'hsl(171, 75%, 13%)',
              },
              '400': {
                value: 'hsl(171, 85%, 13%)',
              },
              '500': {
                value: 'hsl(172, 85%, 20%)',
              },
              '600': {
                value: 'hsl(172, 85%, 32%)',
              },
              '700': {
                value: 'hsl(173, 80%, 36%)',
              },
              '800': {
                value: 'hsl(173, 83%, 30%)',
              },
              '900': {
                value: 'hsl(174, 90%, 41%)',
              },
              '950': {
                value: 'hsl(166, 71%, 93%)',
              },
              DEFAULT: {
                value: 'hsl(172, 85%, 32%)',
              },
            },
            light: {
              '100': {
                value: 'hsl(169, 70%, 96%)',
              },
              '200': {
                value: 'hsl(167, 70%, 94%)',
              },
              '300': {
                value: 'hsl(168, 70%, 90%)',
              },
              '400': {
                value: 'hsl(170, 70%, 85%)',
              },
              '500': {
                value: 'hsl(170, 70%, 72%)',
              },
              '600': {
                value: 'hsl(170, 70%, 57%)',
              },
              '700': {
                value: 'hsl(173, 80%, 36%)',
              },
              '800': {
                value: 'hsl(173, 83%, 30%)',
              },
              '900': {
                value: 'hsl(174, 91%, 25%)',
              },
              '950': {
                value: 'hsl(171, 80%, 13%)',
              },
              DEFAULT: {
                value: 'hsl(170, 70%, 57%)',
              },
            },
          },
          tealP3: {
            dark: {
              '100': {
                value: 'oklch(22.1% 0.0544 178.74)',
              },
              '200': {
                value: 'oklch(25.06% 0.062 178.76)',
              },
              '300': {
                value: 'oklch(31.5% 0.0767 180.99)',
              },
              '400': {
                value: 'oklch(32.43% 0.0763 180.13)',
              },
              '500': {
                value: 'oklch(43.35% 0.1055 180.97)',
              },
              '600': {
                value: 'oklch(60.71% 0.1485 180.24)',
              },
              '700': {
                value: 'oklch(64.92% 0.1403 181.95)',
              },
              '800': {
                value: 'oklch(57.53% 0.1392 181.66)',
              },
              '900': {
                value: 'oklch(74.56% 0.1765 182.8)',
              },
              '950': {
                value: 'oklch(96.46% 0.056 180.29)',
              },
              DEFAULT: {
                value: 'oklch(60.71% 0.1485 180.24)',
              },
            },
            light: {
              '100': {
                value: 'oklch(97.72% 0.0359 186.7)',
              },
              '200': {
                value: 'oklch(97.06% 0.0347 180.66)',
              },
              '300': {
                value: 'oklch(94.92% 0.0478 182.07)',
              },
              '400': {
                value: 'oklch(92.76% 0.0718 183.78)',
              },
              '500': {
                value: 'oklch(86.88% 0.1344 182.42)',
              },
              '600': {
                value: 'oklch(81.5% 0.161 178.96)',
              },
              '700': {
                value: 'oklch(64.92% 0.1572 181.95)',
              },
              '800': {
                value: 'oklch(57.53% 0.1392 181.66)',
              },
              '900': {
                value: 'oklch(52.08% 0.1251 182.93)',
              },
              '950': {
                value: 'oklch(32.11% 0.0788 179.82)',
              },
              DEFAULT: {
                value: 'oklch(81.5% 0.161 178.96)',
              },
            },
          },
          purple: {
            dark: {
              '100': {
                value: 'hsl(283, 30%, 12%)',
              },
              '200': {
                value: 'hsl(281, 38%, 16%)',
              },
              '300': {
                value: 'hsl(279, 44%, 23%)',
              },
              '400': {
                value: 'hsl(277, 46%, 28%)',
              },
              '500': {
                value: 'hsl(274, 49%, 35%)',
              },
              '600': {
                value: 'hsl(272, 51%, 54%)',
              },
              '700': {
                value: 'hsl(272, 51%, 54%)',
              },
              '800': {
                value: 'hsl(272, 47%, 45%)',
              },
              '900': {
                value: 'hsl(275, 80%, 71%)',
              },
              '950': {
                value: 'hsl(281, 73%, 96%)',
              },
              DEFAULT: {
                value: 'hsl(272, 51%, 54%)',
              },
            },
            light: {
              '100': {
                value: 'hsl(276, 100%, 97%)',
              },
              '200': {
                value: 'hsl(277, 87%, 97%)',
              },
              '300': {
                value: 'hsl(274, 78%, 95%)',
              },
              '400': {
                value: 'hsl(276, 71%, 92%)',
              },
              '500': {
                value: 'hsl(274, 70%, 82%)',
              },
              '600': {
                value: 'hsl(273, 72%, 73%)',
              },
              '700': {
                value: 'hsl(272, 51%, 54%)',
              },
              '800': {
                value: 'hsl(272, 47%, 45%)',
              },
              '900': {
                value: 'hsl(274, 71%, 43%)',
              },
              '950': {
                value: 'hsl(276, 100%, 15%)',
              },
              DEFAULT: {
                value: 'hsl(273, 72%, 73%)',
              },
            },
          },
          purpleP3: {
            dark: {
              '100': {
                value: 'oklch(22.34% 0.0779 316.87)',
              },
              '200': {
                value: 'oklch(25.91% 0.0921 314.41)',
              },
              '300': {
                value: 'oklch(31.98% 0.1219 312.41)',
              },
              '400': {
                value: 'oklch(35.93% 0.1504 309.78)',
              },
              '500': {
                value: 'oklch(40.99% 0.1721 307.92)',
              },
              '600': {
                value: 'oklch(55.5% 0.2191 306.12)',
              },
              '700': {
                value: 'oklch(55.5% 0.2186 306.12)',
              },
              '800': {
                value: 'oklch(48.58% 0.2102 305.73)',
              },
              '900': {
                value: 'oklch(69.87% 0.2037 309.51)',
              },
              '950': {
                value: 'oklch(96.1% 0.0304 316.46)',
              },
              DEFAULT: {
                value: 'oklch(55.5% 0.2191 306.12)',
              },
            },
            light: {
              '100': {
                value: 'oklch(96.65% 0.0244 312.1890119359961)',
              },
              '200': {
                value: 'oklch(96.73% 0.0228 309.8)',
              },
              '300': {
                value: 'oklch(94.85% 0.0364 310.15)',
              },
              '400': {
                value: 'oklch(91.77% 0.0614 312.82)',
              },
              '500': {
                value: 'oklch(81.26% 0.1409 310.8)',
              },
              '600': {
                value: 'oklch(72.07% 0.2083 308.19)',
              },
              '700': {
                value: 'oklch(55.5% 0.3008 306.12)',
              },
              '800': {
                value: 'oklch(48.58% 0.2638 305.73)',
              },
              '900': {
                value: 'oklch(47.18% 0.2579 304.0)',
              },
              '950': {
                value: 'oklch(23.96% 0.13 305.66)',
              },
              DEFAULT: {
                value: 'oklch(72.07% 0.2083 308.19)',
              },
            },
          },
          pink: {
            dark: {
              '100': {
                value: 'hsl(335, 32%, 12%)',
              },
              '200': {
                value: 'hsl(335, 43%, 16%)',
              },
              '300': {
                value: 'hsl(335, 47%, 21%)',
              },
              '400': {
                value: 'hsl(335, 51%, 22%)',
              },
              '500': {
                value: 'hsl(335, 57%, 27%)',
              },
              '600': {
                value: 'hsl(336, 75%, 40%)',
              },
              '700': {
                value: 'hsl(336, 80%, 58%)',
              },
              '800': {
                value: 'hsl(336, 74%, 51%)',
              },
              '900': {
                value: 'hsl(341, 90%, 67%)',
              },
              '950': {
                value: 'hsl(333, 90%, 96%)',
              },
              DEFAULT: {
                value: 'hsl(336, 75%, 40%)',
              },
            },
            light: {
              '100': {
                value: 'hsl(330, 100%, 96%)',
              },
              '200': {
                value: 'hsl(340, 90%, 96%)',
              },
              '300': {
                value: 'hsl(340, 82%, 94%)',
              },
              '400': {
                value: 'hsl(341, 76%, 91%)',
              },
              '500': {
                value: 'hsl(340, 75%, 84%)',
              },
              '600': {
                value: 'hsl(341, 75%, 73%)',
              },
              '700': {
                value: 'hsl(336, 80%, 58%)',
              },
              '800': {
                value: 'hsl(336, 74%, 51%)',
              },
              '900': {
                value: 'hsl(336, 65%, 45%)',
              },
              '950': {
                value: 'hsl(333, 74%, 15%)',
              },
              DEFAULT: {
                value: 'hsl(341, 75%, 73%)',
              },
            },
          },
          pinkP3: {
            dark: {
              '100': {
                value: 'oklch(22.67% 0.0628 354.73)',
              },
              '200': {
                value: 'oklch(26.2% 0.0859 356.68)',
              },
              '300': {
                value: 'oklch(31.15% 0.1067 355.93)',
              },
              '400': {
                value: 'oklch(32.13% 0.1174 356.71)',
              },
              '500': {
                value: 'oklch(37.01% 0.1453 358.39)',
              },
              '600': {
                value: 'oklch(50.33% 0.2089 4.33)',
              },
              '700': {
                value: 'oklch(63.52% 0.2346 1.01)',
              },
              '800': {
                value: 'oklch(59.51% 0.2429 4.21)',
              },
              '900': {
                value: 'oklch(69.36% 0.2223 3.91)',
              },
              '950': {
                value: 'oklch(95.74% 0.0326 350.08)',
              },
              DEFAULT: {
                value: 'oklch(50.33% 0.2089 4.33)',
              },
            },
            light: {
              '100': {
                value: 'oklch(95.69% 0.0359 344.6218910697224)',
              },
              '200': {
                value: 'oklch(95.71% 0.0321 353.14)',
              },
              '300': {
                value: 'oklch(93.83% 0.0451 356.29)',
              },
              '400': {
                value: 'oklch(91.12% 0.0573 358.82)',
              },
              '500': {
                value: 'oklch(84.28% 0.0915 356.99)',
              },
              '600': {
                value: 'oklch(74.33% 0.1547 0.24)',
              },
              '700': {
                value: 'oklch(63.52% 0.238 1.01)',
              },
              '800': {
                value: 'oklch(59.51% 0.2339 4.21)',
              },
              '900': {
                value: 'oklch(53.5% 0.2058 2.84)',
              },
              '950': {
                value: 'oklch(26% 0.0977 359.0)',
              },
              DEFAULT: {
                value: 'oklch(74.33% 0.1547 0.24)',
              },
            },
          },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            '100': {
              value: {
                base: '{colors.bg.light.100}',
                _dark: '{colors.bg.dark.100}',
              },
            },
            '200': {
              value: {
                base: '{colors.bg.light.200}',
                _dark: '{colors.bg.dark.200}',
              },
            },
            '300': {
              value: {
                base: '{colors.bg.light.300}',
                _dark: '{colors.bg.dark.300}',
              },
            },
            base: {
              value: '{colors.bg.100}',
            },
            subtle: {
              value: '{colors.bg.200}',
            },
            muted: {
              value: '{colors.bg.300}',
            },
            DEFAULT: {
              value: '{colors.bg}',
            },
          },
          fg: {
            '100': {
              value: {
                base: '{colors.fg.light.100}',
                _dark: '{colors.fg.dark.100}',
              },
            },
            '200': {
              value: {
                base: '{colors.fg.light.200}',
                _dark: '{colors.fg.dark.200}',
              },
            },
            '300': {
              value: {
                base: '{colors.fg.light.300}',
                _dark: '{colors.fg.dark.300}',
              },
            },
            base: {
              value: '{colors.fg.100}',
            },
            subtle: {
              value: '{colors.fg.200}',
            },
            muted: {
              value: '{colors.fg.300}',
            },
            DEFAULT: {
              value: '{colors.fg}',
            },
          },
          gray: {
            '100': {
              value: {
                base: '{colors.gray.light.100}',
                _dark: '{colors.gray.dark.100}',
              },
            },
            '200': {
              value: {
                base: '{colors.gray.light.200}',
                _dark: '{colors.gray.dark.200}',
              },
            },
            '300': {
              value: {
                base: '{colors.gray.light.300}',
                _dark: '{colors.gray.dark.300}',
              },
            },
            '400': {
              value: {
                base: '{colors.gray.light.400}',
                _dark: '{colors.gray.dark.400}',
              },
            },
            '500': {
              value: {
                base: '{colors.gray.light.500}',
                _dark: '{colors.gray.dark.500}',
              },
            },
            '600': {
              value: {
                base: '{colors.gray.light.600}',
                _dark: '{colors.gray.dark.600}',
              },
            },
            '700': {
              value: {
                base: '{colors.gray.light.700}',
                _dark: '{colors.gray.dark.700}',
              },
            },
            '800': {
              value: {
                base: '{colors.gray.light.800}',
                _dark: '{colors.gray.dark.800}',
              },
            },
            '900': {
              value: {
                base: '{colors.gray.light.900}',
                _dark: '{colors.gray.dark.900}',
              },
            },
            '950': {
              value: {
                base: '{colors.gray.light.950}',
                _dark: '{colors.gray.dark.950}',
              },
            },
            bg1: {
              value: '{colors.gray.100}',
            },
            bg2: {
              value: '{colors.gray.200}',
            },
            bg3: {
              value: '{colors.gray.300}',
            },
            border1: {
              value: '{colors.gray.400}',
            },
            border2: {
              value: '{colors.gray.500}',
            },
            border3: {
              value: '{colors.gray.600}',
            },
            solid1: {
              value: '{colors.gray.700}',
            },
            solid2: {
              value: '{colors.gray.800}',
            },
            fg1: {
              value: '{colors.gray.900}',
            },
            fg2: {
              value: '{colors.gray.950}',
            },
            DEFAULT: {
              value: '{colors.gray}',
            },
          },
          alpha: {
            '100': {
              value: {
                base: '{colors.alpha.light.100}',
                _dark: '{colors.alpha.dark.100}',
              },
            },
            '200': {
              value: {
                base: '{colors.alpha.light.200}',
                _dark: '{colors.alpha.dark.200}',
              },
            },
            '300': {
              value: {
                base: '{colors.alpha.light.300}',
                _dark: '{colors.alpha.dark.300}',
              },
            },
            '400': {
              value: {
                base: '{colors.alpha.light.400}',
                _dark: '{colors.alpha.dark.400}',
              },
            },
            '500': {
              value: {
                base: '{colors.alpha.light.500}',
                _dark: '{colors.alpha.dark.500}',
              },
            },
            '600': {
              value: {
                base: '{colors.alpha.light.600}',
                _dark: '{colors.alpha.dark.600}',
              },
            },
            '700': {
              value: {
                base: '{colors.alpha.light.700}',
                _dark: '{colors.alpha.dark.700}',
              },
            },
            '800': {
              value: {
                base: '{colors.alpha.light.800}',
                _dark: '{colors.alpha.dark.800}',
              },
            },
            '900': {
              value: {
                base: '{colors.alpha.light.900}',
                _dark: '{colors.alpha.dark.900}',
              },
            },
            '950': {
              value: {
                base: '{colors.alpha.light.950}',
                _dark: '{colors.alpha.dark.950}',
              },
            },
            bg1: {
              value: '{colors.alpha.100}',
            },
            bg2: {
              value: '{colors.alpha.200}',
            },
            bg3: {
              value: '{colors.alpha.300}',
            },
            border1: {
              value: '{colors.alpha.400}',
            },
            border2: {
              value: '{colors.alpha.500}',
            },
            border3: {
              value: '{colors.alpha.600}',
            },
            solid1: {
              value: '{colors.alpha.700}',
            },
            solid2: {
              value: '{colors.alpha.800}',
            },
            fg1: {
              value: '{colors.alpha.900}',
            },
            fg2: {
              value: '{colors.alpha.950}',
            },
            DEFAULT: {
              value: '{colors.alpha}',
            },
          },
          blue: {
            '100': {
              value: {
                base: '{colors.blue.light.100}',
                _dark: '{colors.blue.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.100}',
                    _dark: '{colors.blueP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.blue.light.200}',
                _dark: '{colors.blue.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.200}',
                    _dark: '{colors.blueP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.blue.light.300}',
                _dark: '{colors.blue.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.300}',
                    _dark: '{colors.blueP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.blue.light.400}',
                _dark: '{colors.blue.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.400}',
                    _dark: '{colors.blueP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.blue.light.500}',
                _dark: '{colors.blue.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.500}',
                    _dark: '{colors.blueP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.blue.light.600}',
                _dark: '{colors.blue.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.600}',
                    _dark: '{colors.blueP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.blue.light.700}',
                _dark: '{colors.blue.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.700}',
                    _dark: '{colors.blueP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.blue.light.800}',
                _dark: '{colors.blue.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.800}',
                    _dark: '{colors.blueP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.blue.light.900}',
                _dark: '{colors.blue.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.900}',
                    _dark: '{colors.blueP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.blue.light.950}',
                _dark: '{colors.blue.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.950}',
                    _dark: '{colors.blueP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.blue.100}',
            },
            bg2: {
              value: '{colors.blue.200}',
            },
            bg3: {
              value: '{colors.blue.300}',
            },
            border1: {
              value: '{colors.blue.400}',
            },
            border2: {
              value: '{colors.blue.500}',
            },
            border3: {
              value: '{colors.blue.600}',
            },
            solid1: {
              value: '{colors.blue.700}',
            },
            solid2: {
              value: '{colors.blue.800}',
            },
            fg1: {
              value: '{colors.blue.900}',
            },
            fg2: {
              value: '{colors.blue.950}',
            },
            DEFAULT: {
              value: '{colors.blue}',
            },
          },
          primary: {
            '100': {
              value: {
                base: '{colors.blue.light.100}',
                _dark: '{colors.blue.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.100}',
                    _dark: '{colors.blueP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.blue.light.200}',
                _dark: '{colors.blue.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.200}',
                    _dark: '{colors.blueP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.blue.light.300}',
                _dark: '{colors.blue.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.300}',
                    _dark: '{colors.blueP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.blue.light.400}',
                _dark: '{colors.blue.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.400}',
                    _dark: '{colors.blueP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.blue.light.500}',
                _dark: '{colors.blue.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.500}',
                    _dark: '{colors.blueP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.blue.light.600}',
                _dark: '{colors.blue.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.600}',
                    _dark: '{colors.blueP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.blue.light.700}',
                _dark: '{colors.blue.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.700}',
                    _dark: '{colors.blueP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.blue.light.800}',
                _dark: '{colors.blue.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.800}',
                    _dark: '{colors.blueP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.blue.light.900}',
                _dark: '{colors.blue.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.900}',
                    _dark: '{colors.blueP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.blue.light.950}',
                _dark: '{colors.blue.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.blueP3.light.950}',
                    _dark: '{colors.blueP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.blue.100}',
            },
            bg2: {
              value: '{colors.blue.200}',
            },
            bg3: {
              value: '{colors.blue.300}',
            },
            border1: {
              value: '{colors.blue.400}',
            },
            border2: {
              value: '{colors.blue.500}',
            },
            border3: {
              value: '{colors.blue.600}',
            },
            solid1: {
              value: '{colors.blue.700}',
            },
            solid2: {
              value: '{colors.blue.800}',
            },
            fg1: {
              value: '{colors.blue.900}',
            },
            fg2: {
              value: '{colors.blue.950}',
            },
            DEFAULT: {
              value: '{colors.blue}',
            },
          },
          red: {
            '100': {
              value: {
                base: '{colors.red.light.100}',
                _dark: '{colors.red.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.100}',
                    _dark: '{colors.redP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.red.light.200}',
                _dark: '{colors.red.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.200}',
                    _dark: '{colors.redP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.red.light.300}',
                _dark: '{colors.red.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.300}',
                    _dark: '{colors.redP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.red.light.400}',
                _dark: '{colors.red.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.400}',
                    _dark: '{colors.redP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.red.light.500}',
                _dark: '{colors.red.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.500}',
                    _dark: '{colors.redP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.red.light.600}',
                _dark: '{colors.red.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.600}',
                    _dark: '{colors.redP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.red.light.700}',
                _dark: '{colors.red.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.700}',
                    _dark: '{colors.redP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.red.light.800}',
                _dark: '{colors.red.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.800}',
                    _dark: '{colors.redP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.red.light.900}',
                _dark: '{colors.red.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.900}',
                    _dark: '{colors.redP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.red.light.950}',
                _dark: '{colors.red.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.950}',
                    _dark: '{colors.redP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.red.100}',
            },
            bg2: {
              value: '{colors.red.200}',
            },
            bg3: {
              value: '{colors.red.300}',
            },
            border1: {
              value: '{colors.red.400}',
            },
            border2: {
              value: '{colors.red.500}',
            },
            border3: {
              value: '{colors.red.600}',
            },
            solid1: {
              value: '{colors.red.700}',
            },
            solid2: {
              value: '{colors.red.800}',
            },
            fg1: {
              value: '{colors.red.900}',
            },
            fg2: {
              value: '{colors.red.950}',
            },
            DEFAULT: {
              value: '{colors.red}',
            },
          },
          danger: {
            '100': {
              value: {
                base: '{colors.red.light.100}',
                _dark: '{colors.red.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.100}',
                    _dark: '{colors.redP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.red.light.200}',
                _dark: '{colors.red.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.200}',
                    _dark: '{colors.redP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.red.light.300}',
                _dark: '{colors.red.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.300}',
                    _dark: '{colors.redP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.red.light.400}',
                _dark: '{colors.red.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.400}',
                    _dark: '{colors.redP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.red.light.500}',
                _dark: '{colors.red.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.500}',
                    _dark: '{colors.redP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.red.light.600}',
                _dark: '{colors.red.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.600}',
                    _dark: '{colors.redP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.red.light.700}',
                _dark: '{colors.red.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.700}',
                    _dark: '{colors.redP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.red.light.800}',
                _dark: '{colors.red.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.800}',
                    _dark: '{colors.redP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.red.light.900}',
                _dark: '{colors.red.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.900}',
                    _dark: '{colors.redP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.red.light.950}',
                _dark: '{colors.red.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.redP3.light.950}',
                    _dark: '{colors.redP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.red.100}',
            },
            bg2: {
              value: '{colors.red.200}',
            },
            bg3: {
              value: '{colors.red.300}',
            },
            border1: {
              value: '{colors.red.400}',
            },
            border2: {
              value: '{colors.red.500}',
            },
            border3: {
              value: '{colors.red.600}',
            },
            solid1: {
              value: '{colors.red.700}',
            },
            solid2: {
              value: '{colors.red.800}',
            },
            fg1: {
              value: '{colors.red.900}',
            },
            fg2: {
              value: '{colors.red.950}',
            },
            DEFAULT: {
              value: '{colors.red}',
            },
          },
          yellow: {
            '100': {
              value: {
                base: '{colors.yellow.light.100}',
                _dark: '{colors.yellow.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.100}',
                    _dark: '{colors.yellowP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.yellow.light.200}',
                _dark: '{colors.yellow.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.200}',
                    _dark: '{colors.yellowP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.yellow.light.300}',
                _dark: '{colors.yellow.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.300}',
                    _dark: '{colors.yellowP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.yellow.light.400}',
                _dark: '{colors.yellow.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.400}',
                    _dark: '{colors.yellowP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.yellow.light.500}',
                _dark: '{colors.yellow.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.500}',
                    _dark: '{colors.yellowP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.yellow.light.600}',
                _dark: '{colors.yellow.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.600}',
                    _dark: '{colors.yellowP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.yellow.light.700}',
                _dark: '{colors.yellow.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.700}',
                    _dark: '{colors.yellowP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.yellow.light.800}',
                _dark: '{colors.yellow.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.800}',
                    _dark: '{colors.yellowP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.yellow.light.900}',
                _dark: '{colors.yellow.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.900}',
                    _dark: '{colors.yellowP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.yellow.light.950}',
                _dark: '{colors.yellow.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.950}',
                    _dark: '{colors.yellowP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.yellow.100}',
            },
            bg2: {
              value: '{colors.yellow.200}',
            },
            bg3: {
              value: '{colors.yellow.300}',
            },
            border1: {
              value: '{colors.yellow.400}',
            },
            border2: {
              value: '{colors.yellow.500}',
            },
            border3: {
              value: '{colors.yellow.600}',
            },
            solid1: {
              value: '{colors.yellow.700}',
            },
            solid2: {
              value: '{colors.yellow.800}',
            },
            fg1: {
              value: '{colors.yellow.900}',
            },
            fg2: {
              value: '{colors.yellow.950}',
            },
            DEFAULT: {
              value: '{colors.yellow}',
            },
          },
          warning: {
            '100': {
              value: {
                base: '{colors.yellow.light.100}',
                _dark: '{colors.yellow.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.100}',
                    _dark: '{colors.yellowP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.yellow.light.200}',
                _dark: '{colors.yellow.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.200}',
                    _dark: '{colors.yellowP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.yellow.light.300}',
                _dark: '{colors.yellow.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.300}',
                    _dark: '{colors.yellowP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.yellow.light.400}',
                _dark: '{colors.yellow.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.400}',
                    _dark: '{colors.yellowP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.yellow.light.500}',
                _dark: '{colors.yellow.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.500}',
                    _dark: '{colors.yellowP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.yellow.light.600}',
                _dark: '{colors.yellow.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.600}',
                    _dark: '{colors.yellowP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.yellow.light.700}',
                _dark: '{colors.yellow.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.700}',
                    _dark: '{colors.yellowP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.yellow.light.800}',
                _dark: '{colors.yellow.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.800}',
                    _dark: '{colors.yellowP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.yellow.light.900}',
                _dark: '{colors.yellow.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.900}',
                    _dark: '{colors.yellowP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.yellow.light.950}',
                _dark: '{colors.yellow.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.yellowP3.light.950}',
                    _dark: '{colors.yellowP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.yellow.100}',
            },
            bg2: {
              value: '{colors.yellow.200}',
            },
            bg3: {
              value: '{colors.yellow.300}',
            },
            border1: {
              value: '{colors.yellow.400}',
            },
            border2: {
              value: '{colors.yellow.500}',
            },
            border3: {
              value: '{colors.yellow.600}',
            },
            solid1: {
              value: '{colors.yellow.700}',
            },
            solid2: {
              value: '{colors.yellow.800}',
            },
            fg1: {
              value: '{colors.yellow.900}',
            },
            fg2: {
              value: '{colors.yellow.950}',
            },
            DEFAULT: {
              value: '{colors.yellow}',
            },
          },
          green: {
            '100': {
              value: {
                base: '{colors.green.light.100}',
                _dark: '{colors.green.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.100}',
                    _dark: '{colors.greenP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.green.light.200}',
                _dark: '{colors.green.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.200}',
                    _dark: '{colors.greenP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.green.light.300}',
                _dark: '{colors.green.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.300}',
                    _dark: '{colors.greenP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.green.light.400}',
                _dark: '{colors.green.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.400}',
                    _dark: '{colors.greenP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.green.light.500}',
                _dark: '{colors.green.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.500}',
                    _dark: '{colors.greenP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.green.light.600}',
                _dark: '{colors.green.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.600}',
                    _dark: '{colors.greenP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.green.light.700}',
                _dark: '{colors.green.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.700}',
                    _dark: '{colors.greenP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.green.light.800}',
                _dark: '{colors.green.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.800}',
                    _dark: '{colors.greenP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.green.light.900}',
                _dark: '{colors.green.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.900}',
                    _dark: '{colors.greenP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.green.light.950}',
                _dark: '{colors.green.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.950}',
                    _dark: '{colors.greenP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.green.100}',
            },
            bg2: {
              value: '{colors.green.200}',
            },
            bg3: {
              value: '{colors.green.300}',
            },
            border1: {
              value: '{colors.green.400}',
            },
            border2: {
              value: '{colors.green.500}',
            },
            border3: {
              value: '{colors.green.600}',
            },
            solid1: {
              value: '{colors.green.700}',
            },
            solid2: {
              value: '{colors.green.800}',
            },
            fg1: {
              value: '{colors.green.900}',
            },
            fg2: {
              value: '{colors.green.950}',
            },
            DEFAULT: {
              value: '{colors.green}',
            },
          },
          success: {
            '100': {
              value: {
                base: '{colors.green.light.100}',
                _dark: '{colors.green.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.100}',
                    _dark: '{colors.greenP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.green.light.200}',
                _dark: '{colors.green.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.200}',
                    _dark: '{colors.greenP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.green.light.300}',
                _dark: '{colors.green.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.300}',
                    _dark: '{colors.greenP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.green.light.400}',
                _dark: '{colors.green.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.400}',
                    _dark: '{colors.greenP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.green.light.500}',
                _dark: '{colors.green.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.500}',
                    _dark: '{colors.greenP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.green.light.600}',
                _dark: '{colors.green.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.600}',
                    _dark: '{colors.greenP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.green.light.700}',
                _dark: '{colors.green.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.700}',
                    _dark: '{colors.greenP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.green.light.800}',
                _dark: '{colors.green.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.800}',
                    _dark: '{colors.greenP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.green.light.900}',
                _dark: '{colors.green.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.900}',
                    _dark: '{colors.greenP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.green.light.950}',
                _dark: '{colors.green.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.greenP3.light.950}',
                    _dark: '{colors.greenP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.green.100}',
            },
            bg2: {
              value: '{colors.green.200}',
            },
            bg3: {
              value: '{colors.green.300}',
            },
            border1: {
              value: '{colors.green.400}',
            },
            border2: {
              value: '{colors.green.500}',
            },
            border3: {
              value: '{colors.green.600}',
            },
            solid1: {
              value: '{colors.green.700}',
            },
            solid2: {
              value: '{colors.green.800}',
            },
            fg1: {
              value: '{colors.green.900}',
            },
            fg2: {
              value: '{colors.green.950}',
            },
            DEFAULT: {
              value: '{colors.green}',
            },
          },
          teal: {
            '100': {
              value: {
                base: '{colors.teal.light.100}',
                _dark: '{colors.teal.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.100}',
                    _dark: '{colors.tealP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.teal.light.200}',
                _dark: '{colors.teal.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.200}',
                    _dark: '{colors.tealP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.teal.light.300}',
                _dark: '{colors.teal.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.300}',
                    _dark: '{colors.tealP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.teal.light.400}',
                _dark: '{colors.teal.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.400}',
                    _dark: '{colors.tealP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.teal.light.500}',
                _dark: '{colors.teal.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.500}',
                    _dark: '{colors.tealP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.teal.light.600}',
                _dark: '{colors.teal.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.600}',
                    _dark: '{colors.tealP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.teal.light.700}',
                _dark: '{colors.teal.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.700}',
                    _dark: '{colors.tealP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.teal.light.800}',
                _dark: '{colors.teal.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.800}',
                    _dark: '{colors.tealP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.teal.light.900}',
                _dark: '{colors.teal.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.900}',
                    _dark: '{colors.tealP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.teal.light.950}',
                _dark: '{colors.teal.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.950}',
                    _dark: '{colors.tealP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.teal.100}',
            },
            bg2: {
              value: '{colors.teal.200}',
            },
            bg3: {
              value: '{colors.teal.300}',
            },
            border1: {
              value: '{colors.teal.400}',
            },
            border2: {
              value: '{colors.teal.500}',
            },
            border3: {
              value: '{colors.teal.600}',
            },
            solid1: {
              value: '{colors.teal.700}',
            },
            solid2: {
              value: '{colors.teal.800}',
            },
            fg1: {
              value: '{colors.teal.900}',
            },
            fg2: {
              value: '{colors.teal.950}',
            },
            DEFAULT: {
              value: '{colors.teal}',
            },
          },
          info: {
            '100': {
              value: {
                base: '{colors.teal.light.100}',
                _dark: '{colors.teal.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.100}',
                    _dark: '{colors.tealP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.teal.light.200}',
                _dark: '{colors.teal.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.200}',
                    _dark: '{colors.tealP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.teal.light.300}',
                _dark: '{colors.teal.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.300}',
                    _dark: '{colors.tealP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.teal.light.400}',
                _dark: '{colors.teal.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.400}',
                    _dark: '{colors.tealP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.teal.light.500}',
                _dark: '{colors.teal.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.500}',
                    _dark: '{colors.tealP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.teal.light.600}',
                _dark: '{colors.teal.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.600}',
                    _dark: '{colors.tealP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.teal.light.700}',
                _dark: '{colors.teal.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.700}',
                    _dark: '{colors.tealP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.teal.light.800}',
                _dark: '{colors.teal.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.800}',
                    _dark: '{colors.tealP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.teal.light.900}',
                _dark: '{colors.teal.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.900}',
                    _dark: '{colors.tealP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.teal.light.950}',
                _dark: '{colors.teal.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.tealP3.light.950}',
                    _dark: '{colors.tealP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.teal.100}',
            },
            bg2: {
              value: '{colors.teal.200}',
            },
            bg3: {
              value: '{colors.teal.300}',
            },
            border1: {
              value: '{colors.teal.400}',
            },
            border2: {
              value: '{colors.teal.500}',
            },
            border3: {
              value: '{colors.teal.600}',
            },
            solid1: {
              value: '{colors.teal.700}',
            },
            solid2: {
              value: '{colors.teal.800}',
            },
            fg1: {
              value: '{colors.teal.900}',
            },
            fg2: {
              value: '{colors.teal.950}',
            },
            DEFAULT: {
              value: '{colors.teal}',
            },
          },
          purple: {
            '100': {
              value: {
                base: '{colors.purple.light.100}',
                _dark: '{colors.purple.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.100}',
                    _dark: '{colors.purpleP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.purple.light.200}',
                _dark: '{colors.purple.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.200}',
                    _dark: '{colors.purpleP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.purple.light.300}',
                _dark: '{colors.purple.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.300}',
                    _dark: '{colors.purpleP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.purple.light.400}',
                _dark: '{colors.purple.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.400}',
                    _dark: '{colors.purpleP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.purple.light.500}',
                _dark: '{colors.purple.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.500}',
                    _dark: '{colors.purpleP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.purple.light.600}',
                _dark: '{colors.purple.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.600}',
                    _dark: '{colors.purpleP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.purple.light.700}',
                _dark: '{colors.purple.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.700}',
                    _dark: '{colors.purpleP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.purple.light.800}',
                _dark: '{colors.purple.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.800}',
                    _dark: '{colors.purpleP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.purple.light.900}',
                _dark: '{colors.purple.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.900}',
                    _dark: '{colors.purpleP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.purple.light.950}',
                _dark: '{colors.purple.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.950}',
                    _dark: '{colors.purpleP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.purple.100}',
            },
            bg2: {
              value: '{colors.purple.200}',
            },
            bg3: {
              value: '{colors.purple.300}',
            },
            border1: {
              value: '{colors.purple.400}',
            },
            border2: {
              value: '{colors.purple.500}',
            },
            border3: {
              value: '{colors.purple.600}',
            },
            solid1: {
              value: '{colors.purple.700}',
            },
            solid2: {
              value: '{colors.purple.800}',
            },
            fg1: {
              value: '{colors.purple.900}',
            },
            fg2: {
              value: '{colors.purple.950}',
            },
            DEFAULT: {
              value: '{colors.purple}',
            },
          },
          secondary: {
            '100': {
              value: {
                base: '{colors.purple.light.100}',
                _dark: '{colors.purple.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.100}',
                    _dark: '{colors.purpleP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.purple.light.200}',
                _dark: '{colors.purple.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.200}',
                    _dark: '{colors.purpleP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.purple.light.300}',
                _dark: '{colors.purple.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.300}',
                    _dark: '{colors.purpleP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.purple.light.400}',
                _dark: '{colors.purple.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.400}',
                    _dark: '{colors.purpleP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.purple.light.500}',
                _dark: '{colors.purple.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.500}',
                    _dark: '{colors.purpleP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.purple.light.600}',
                _dark: '{colors.purple.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.600}',
                    _dark: '{colors.purpleP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.purple.light.700}',
                _dark: '{colors.purple.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.700}',
                    _dark: '{colors.purpleP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.purple.light.800}',
                _dark: '{colors.purple.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.800}',
                    _dark: '{colors.purpleP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.purple.light.900}',
                _dark: '{colors.purple.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.900}',
                    _dark: '{colors.purpleP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.purple.light.950}',
                _dark: '{colors.purple.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.purpleP3.light.950}',
                    _dark: '{colors.purpleP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.purple.100}',
            },
            bg2: {
              value: '{colors.purple.200}',
            },
            bg3: {
              value: '{colors.purple.300}',
            },
            border1: {
              value: '{colors.purple.400}',
            },
            border2: {
              value: '{colors.purple.500}',
            },
            border3: {
              value: '{colors.purple.600}',
            },
            solid1: {
              value: '{colors.purple.700}',
            },
            solid2: {
              value: '{colors.purple.800}',
            },
            fg1: {
              value: '{colors.purple.900}',
            },
            fg2: {
              value: '{colors.purple.950}',
            },
            DEFAULT: {
              value: '{colors.purple}',
            },
          },
          pink: {
            '100': {
              value: {
                base: '{colors.pink.light.100}',
                _dark: '{colors.pink.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.100}',
                    _dark: '{colors.pinkP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.pink.light.200}',
                _dark: '{colors.pink.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.200}',
                    _dark: '{colors.pinkP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.pink.light.300}',
                _dark: '{colors.pink.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.300}',
                    _dark: '{colors.pinkP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.pink.light.400}',
                _dark: '{colors.pink.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.400}',
                    _dark: '{colors.pinkP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.pink.light.500}',
                _dark: '{colors.pink.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.500}',
                    _dark: '{colors.pinkP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.pink.light.600}',
                _dark: '{colors.pink.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.600}',
                    _dark: '{colors.pinkP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.pink.light.700}',
                _dark: '{colors.pink.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.700}',
                    _dark: '{colors.pinkP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.pink.light.800}',
                _dark: '{colors.pink.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.800}',
                    _dark: '{colors.pinkP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.pink.light.900}',
                _dark: '{colors.pink.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.900}',
                    _dark: '{colors.pinkP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.pink.light.950}',
                _dark: '{colors.pink.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.950}',
                    _dark: '{colors.pinkP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.pink.100}',
            },
            bg2: {
              value: '{colors.pink.200}',
            },
            bg3: {
              value: '{colors.pink.300}',
            },
            border1: {
              value: '{colors.pink.400}',
            },
            border2: {
              value: '{colors.pink.500}',
            },
            border3: {
              value: '{colors.pink.600}',
            },
            solid1: {
              value: '{colors.pink.700}',
            },
            solid2: {
              value: '{colors.pink.800}',
            },
            fg1: {
              value: '{colors.pink.900}',
            },
            fg2: {
              value: '{colors.pink.950}',
            },
            DEFAULT: {
              value: '{colors.pink}',
            },
          },
          tertiary: {
            '100': {
              value: {
                base: '{colors.pink.light.100}',
                _dark: '{colors.pink.dark.100}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.100}',
                    _dark: '{colors.pinkP3.dark.100}',
                  },
                },
              },
            },
            '200': {
              value: {
                base: '{colors.pink.light.200}',
                _dark: '{colors.pink.dark.200}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.200}',
                    _dark: '{colors.pinkP3.dark.200}',
                  },
                },
              },
            },
            '300': {
              value: {
                base: '{colors.pink.light.300}',
                _dark: '{colors.pink.dark.300}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.300}',
                    _dark: '{colors.pinkP3.dark.300}',
                  },
                },
              },
            },
            '400': {
              value: {
                base: '{colors.pink.light.400}',
                _dark: '{colors.pink.dark.400}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.400}',
                    _dark: '{colors.pinkP3.dark.400}',
                  },
                },
              },
            },
            '500': {
              value: {
                base: '{colors.pink.light.500}',
                _dark: '{colors.pink.dark.500}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.500}',
                    _dark: '{colors.pinkP3.dark.500}',
                  },
                },
              },
            },
            '600': {
              value: {
                base: '{colors.pink.light.600}',
                _dark: '{colors.pink.dark.600}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.600}',
                    _dark: '{colors.pinkP3.dark.600}',
                  },
                },
              },
            },
            '700': {
              value: {
                base: '{colors.pink.light.700}',
                _dark: '{colors.pink.dark.700}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.700}',
                    _dark: '{colors.pinkP3.dark.700}',
                  },
                },
              },
            },
            '800': {
              value: {
                base: '{colors.pink.light.800}',
                _dark: '{colors.pink.dark.800}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.800}',
                    _dark: '{colors.pinkP3.dark.800}',
                  },
                },
              },
            },
            '900': {
              value: {
                base: '{colors.pink.light.900}',
                _dark: '{colors.pink.dark.900}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.900}',
                    _dark: '{colors.pinkP3.dark.900}',
                  },
                },
              },
            },
            '950': {
              value: {
                base: '{colors.pink.light.950}',
                _dark: '{colors.pink.dark.950}',
                _mediaP3: {
                  _supportsP3: {
                    base: '{colors.pinkP3.light.950}',
                    _dark: '{colors.pinkP3.dark.950}',
                  },
                },
              },
            },
            bg1: {
              value: '{colors.pink.100}',
            },
            bg2: {
              value: '{colors.pink.200}',
            },
            bg3: {
              value: '{colors.pink.300}',
            },
            border1: {
              value: '{colors.pink.400}',
            },
            border2: {
              value: '{colors.pink.500}',
            },
            border3: {
              value: '{colors.pink.600}',
            },
            solid1: {
              value: '{colors.pink.700}',
            },
            solid2: {
              value: '{colors.pink.800}',
            },
            fg1: {
              value: '{colors.pink.900}',
            },
            fg2: {
              value: '{colors.pink.950}',
            },
            DEFAULT: {
              value: '{colors.pink}',
            },
          },
        },
      },
    },
  },
})
