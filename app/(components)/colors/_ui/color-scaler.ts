import easing from 'bezier-easing'
import { type Hsl, interpolate, samples } from 'culori'
import type { ColorSystemStateColorConfig } from './client-state'

const bezierCurve = easing(1, 0.55, 0.6, 0.7)

import { interpolatorPiecewise, lerp } from 'culori'
function piecewiseEasing() {
  return interpolatorPiecewise((a, b, t) => lerp(a, b, bezierCurve(t)))
}

export function generateColorScale(color: ColorSystemStateColorConfig): Required<Hsl>[] {
  const maxHueShift = color.hueShift * color.maxStops
  const maxChromaShift = color.chromaShift * color.maxStops
  // const luminancePerStop = (color.luminanceMax - color.luminanceMin) / color.maxStops
  // const stopsTwoThirds = Math.floor(color.maxStops * 0.56)

  const luminanceAvg = (color.luminanceMax + color.luminanceMin) / 2
  const darkColorCount = Math.ceil(color.maxStops / 2)
  const lightColorCount = color.maxStops - darkColorCount

  const darkStartColor: Hsl = {
    mode: 'hsl',
    h: color.hue + maxHueShift,
    s: (color.chroma + maxChromaShift) / 100,
    l: color.luminanceMin / 100,
    alpha: color.alpha / 100,
  }

  const darkEndColor: Hsl = {
    mode: 'hsl',
    h: color.hue,
    s: color.chroma / 100,
    l: color.luminanceMax / 2 / 100,
    alpha: color.alpha / 100,
  }

  const lightStartColor: Hsl = {
    mode: 'hsl',
    h: color.hue,
    s: color.chroma / 100,
    l: color.luminanceMax / 2 / 100,
    alpha: color.alpha / 100,
  }

  const lightEndColor: Hsl = {
    mode: 'hsl',
    h: color.hue,
    s: color.chroma / 100,
    l: color.luminanceMax / 100,
    alpha: color.alpha / 100,
  }

  return [
    ...generateColorScaleFrom(darkStartColor, lightEndColor, color.maxStops),
    // ...generateColorScaleFrom(lightStartColor, lightEndColor, lightColorCount),
  ]
}

const interpolator = {
  mode: 'hsl',
  h: piecewiseEasing(),
  s: piecewiseEasing(),
  l: piecewiseEasing(),
  alpha: piecewiseEasing(),
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
} as any

function generateColorScaleFrom(startColor: Hsl, endColor: Hsl, numStops: number): Required<Hsl>[] {
  const colors = samples(numStops)
    .map(interpolate([startColor, endColor], 'hsl', interpolator))
    .map((hsl): Required<Hsl> => {
      return {
        mode: 'hsl',
        h: hsl.h || 0,
        s: hsl.s,
        l: hsl.l,
        alpha: hsl.alpha || 1,
      }
    })

  // console.log({ initialColor, baseColor, endColor, colors })

  return colors
}
