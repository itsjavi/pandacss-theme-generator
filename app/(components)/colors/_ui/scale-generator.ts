import easing from 'bezier-easing'
import { type Hsl, interpolate, interpolatorPiecewise, lerp, samples } from 'culori'
import type { ColorSystemStateColorConfig } from './client-state'

const bezierCurve = easing(1, 0.55, 0.6, 0.7)

function piecewiseEasing() {
  return interpolatorPiecewise((a, b, t) => lerp(a, b, bezierCurve(t)))
}

const interpolator = {
  mode: 'hsl',
  // h: piecewiseEasing(),
  // s: piecewiseEasing(),
  l: piecewiseEasing(),
  // alpha: piecewiseEasing(),
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
} as any

function clampHue(hue: number): number {
  return Math.max(0, Math.min(hue, 360))
}

function clamp0to1(num: number): number {
  return Math.max(0, Math.min(num, 1))
}

export function generateColorScale(color: ColorSystemStateColorConfig): Required<Hsl>[] {
  const avgLuminance = (color.luminanceMax + color.luminanceMin) / 2

  const startColor: Hsl = {
    mode: 'hsl',
    h: clampHue(color.hue + color.hueShift),
    s: clamp0to1((color.chroma + color.chromaShift) / 100),
    l: clamp0to1(color.luminanceMin / 100),
    alpha: clamp0to1(color.alpha / 100),
  }

  const midColor: Hsl = {
    mode: 'hsl',
    h: clampHue(color.hue),
    s: clamp0to1(color.chroma / 100),
    l: clamp0to1(avgLuminance / 100),
    alpha: clamp0to1(color.alpha / 100),
  }

  const endColor1: Hsl = {
    mode: 'hsl',
    h: startColor.h,
    s: startColor.s,
    l: clamp0to1(color.luminanceMax / 100),
    alpha: clamp0to1(color.alpha / 100),
  }

  // const endColor2: Hsl = {
  //   mode: 'hsl',
  //   h: clampHue(color.hue),
  //   s: clamp0to1(color.chroma / 100),
  //   l: clamp0to1(color.luminanceMax / 100),
  //   alpha: clamp0to1(color.alpha / 100),
  // }

  const endColor = endColor1

  return generateColorScaleFrom(startColor, midColor, endColor, color.maxStops)
}

function generateColorScaleFrom(startColor: Hsl, midColor: Hsl, endColor: Hsl, numStops: number): Required<Hsl>[] {
  const colors = samples(numStops)
    .map(
      interpolate(
        [
          startColor,
          midColor,
          endColor,
          //
        ],
        'hsl',
        interpolator,
      ),
    )
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
