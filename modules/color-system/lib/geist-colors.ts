import type { ColorLevelKey, ColorSystemConfig } from '../types'
import _geistColors from './geist-colors.json'

const colors = Object.values(_geistColors)
export const geistColorsConfig = { colors } as ColorSystemConfig

export const geistBaseScaleLevel: ColorLevelKey = '700'
export const geistBaseScaleLevelIndex = 6

// Averages for accent colors (not gray, gray alpha or background colors)

export const averageGeistLuminance: Record<'light' | 'dark', Record<ColorLevelKey, number>> = {
  light: {
    '100': 0.9699285714285714,
    '200': 0.9641857142857143,
    '300': 0.9471999999999999,
    '400': 0.9160714285714285,
    '500': 0.8452,
    '600': 0.7608571428571429,
    '700': 0.6436571428571429,
    '800': 0.5862,
    '900': 0.5221,
    '950': 0.27645714285714285,
  },
  dark: {
    '100': 0.2241857142857143,
    '200': 0.25802857142857144,
    '300': 0.3130571428571428,
    '400': 0.34254285714285715,
    '500': 0.40895714285714285,
    '600': 0.6102714285714285,
    '700': 0.6436571428571429,
    '800': 0.5859428571428571,
    '900': 0.7225142857142857,
    '950': 0.9630142857142857,
  },
}

export const averageGeistChromaticity: Record<'light' | 'dark', Record<ColorLevelKey, number>> = {
  light: {
    '100': 0.0278,
    '200': 0.032214285714285716,
    '300': 0.046642857142857146,
    '400': 0.07352857142857143,
    '500': 0.12678571428571428,
    '600': 0.18281428571428573,
    '700': 0.22438571428571427,
    '800': 0.2106857142857143,
    '900': 0.19365714285714283,
    '950': 0.1056,
  },
  dark: {
    '100': 0.06502857142857142,
    '200': 0.07974285714285714,
    '300': 0.09967142857142856,
    '400': 0.11237142857142857,
    '500': 0.13770000000000002,
    '600': 0.19394285714285717,
    '700': 0.2064142857142857,
    '800': 0.2038142857142857,
    '900': 0.1994,
    '950': 0.037714285714285714,
  },
}

export const averageGeistLuminanceDiffs: Record<'light' | 'dark', Record<ColorLevelKey, number>> = {
  light: {
    '100': 0.33,
    '200': 0.32,
    '300': 0.3,
    '400': 0.27,
    '500': 0.2,
    '600': 0.12,
    '700': 0,
    '800': -0.06,
    '900': -0.12,
    '950': -0.36,
  },
  dark: {
    '100': -0.41,
    '200': -0.38,
    '300': -0.32,
    '400': -0.29,
    '500': -0.23,
    '600': -0.03,
    '700': 0,
    '800': -0.06, // 0.04
    '900': 0.08, // 0.14
    '950': 0.32, // 0.24
  },
}

export const averageGeistChromaticityDiffs: Record<'light' | 'dark', Record<ColorLevelKey, number>> = {
  light: {
    '100': -0.2,
    '200': -0.19,
    '300': -0.18,
    '400': -0.15,
    '500': -0.1,
    '600': -0.04,
    '700': 0,
    '800': -0.01,
    '900': -0.03,
    '950': -0.11,
  },
  dark: {
    '100': -0.14,
    '200': -0.13,
    '300': -0.11,
    '400': -0.09,
    '500': -0.07,
    '600': -0.01,
    '700': 0,
    '800': -0.003,
    '900': -0.007,
    '950': -0.16,
  },
}

export const averageGeistLuminanceBaseLevelLightDarkDiff = 0
export const averageGeistChromaticityBaseLevelLightDarkDiff = 0.02
