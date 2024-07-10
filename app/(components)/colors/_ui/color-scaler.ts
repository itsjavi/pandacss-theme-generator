import easing from 'bezier-easing'
import { type Hsl, interpolate, interpolatorPiecewise, lerp, samples } from 'culori'
import type { ColorSystemStateColorConfig } from './client-state'

const bezierCurve = easing(1, 0.55, 0.6, 0.7)

function piecewiseEasing() {
  return interpolatorPiecewise((a, b, t) => lerp(a, b, bezierCurve(t)))
}

const interpolator = {
  mode: 'hsl',
  h: piecewiseEasing(),
  s: piecewiseEasing(),
  l: piecewiseEasing(),
  alpha: piecewiseEasing(),
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
} as any

export function generateColorScale(color: ColorSystemStateColorConfig): Required<Hsl>[] {
  const maxHueShift = color.hueShift * color.maxStops
  const maxChromaShift = color.chromaShift * color.maxStops

  const startColor: Hsl = {
    mode: 'hsl',
    h: color.hue + maxHueShift,
    s: (color.chroma + maxChromaShift) / 100,
    l: color.luminanceMin / 100,
    alpha: color.alpha / 100,
  }

  const endColor: Hsl = {
    mode: 'hsl',
    h: color.hue,
    s: color.chroma / 100,
    l: color.luminanceMax / 100,
    alpha: color.alpha / 100,
  }

  return generateColorScaleFrom(startColor, endColor, color.maxStops)
}

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

  return colors
}
