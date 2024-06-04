import { type Lch, type Oklch, converter, formatCss } from 'culori'
import { useState } from 'react'
import { PrimaryButton } from './button'
import { PandaDiv, PandaInput } from './panda'

const colorToLch = converter('lch')

type OklchColor = Required<Oklch>
type LchColor = Required<Lch>
export type OklchEditorSlider = Exclude<keyof OklchColor, 'mode'>
export type OklchEditorProps = {
  color: OklchColor
  preview?: boolean
  sliders?: OklchEditorSlider[]
  onApply?: (color: OklchColor, parsedColor: string) => void
  onCancel?: (color: OklchColor, parsedColor: string) => void
}

type SliderProps = {
  value: number
  min: number
  max: number
  step: number
  param: OklchEditorSlider
  gradientOklch: string
  gradientLch: string
  onChange?: (value: number) => void
}

function createGradients(
  oklchColor: OklchColor,
  lchColor: LchColor,
  param: OklchEditorSlider,
): {
  gradientOklch: string
  gradientLch: string
} {
  let cssStops: string[] = []
  let cssStopsOk: string[] = []

  // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch
  // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch
  // https://css.land/lch/
  // l = 0 to 1 (or 0% to 100%) - in lch = 0 to 100
  // c = 0 to 0.4 - in lch = 0 to 150
  // h = 0 to 360, same as lch
  // a = 0 to 1 (or 0% to 100%) 0% to 100% - in lch = 0 to 1

  switch (param) {
    case 'l':
      {
        cssStops = [
          // 'lch(0 0 0)',
          ...[0, 50, 100].map((stopValue) =>
            formatCss({
              ...lchColor,
              c: 70,
              [param]: stopValue,
            }),
          ),
          // 'lch(100 0 0)',
        ]
        cssStopsOk = [
          // 'oklch(0 0 0)',
          ...[0, 0.5, 1].map((stopValue) =>
            formatCss({
              ...oklchColor,
              c: 0.2,
              [param]: stopValue,
            }),
          ),
          // 'oklch(1 0 0)',
        ]
      }
      break
    case 'c':
      {
        cssStops = [0, 75, 150].map((stopValue) =>
          formatCss({
            ...lchColor,
            [param]: stopValue,
          }),
        )
        cssStopsOk = [0, 0.2, 0.4].map((stopValue) =>
          formatCss({
            ...oklchColor,
            [param]: stopValue,
          }),
        )
      }
      break

    case 'h':
      {
        const stopCount = 14
        const stopIncr = 360 / (stopCount - 1)
        const paramStops = Array.from({ length: stopCount }, (_, i) => {
          if (i === 0) {
            return 360
          }
          return i * stopIncr
        })

        cssStops = paramStops.map((stopValue) => {
          return formatCss({
            ...lchColor,
            // c: 145, // or 132?
            // l: 85,
            [param]: stopValue,
          })
        })

        cssStopsOk = paramStops.map((stopValue) => {
          return formatCss({
            ...oklchColor,
            c: 0.25,
            l: 0.75,
            [param]: stopValue,
          })
        })
      }
      break
    case 'alpha':
      {
        cssStops = [
          ...[0, 0.5, 1].map((stopValue) =>
            formatCss({
              ...lchColor,
              [param]: stopValue,
            }),
          ),
        ]
        cssStopsOk = [
          ...[0, 0.5, 1].map((stopValue) =>
            formatCss({
              ...oklchColor,
              [param]: stopValue,
            }),
          ),
        ]
      }
      break
  }

  const gradientLch = `linear-gradient(to right, ${cssStops.join(', ')})`
  const gradientOklch = `linear-gradient(to right, ${cssStopsOk.join(', ')})`

  return {
    gradientOklch,
    gradientLch,
  }
}

function Slider({ value, gradientOklch, gradientLch, min, max, step, param, onChange }: SliderProps) {
  // const debouncedMs = 10
  // const debouncedOnChange = useDebounceCallback((value: number) => onChange?.(value), debouncedMs)
  const bgImage = param === 'alpha' ? 'var(--bgi), var(--gradients-checkerboard)' : 'var(--bgi)'
  const bgImageP3 = param === 'alpha' ? 'var(--bgi-p3), var(--gradients-checkerboard)' : 'var(--bgi-p3)'
  const bgSize = param === 'alpha' ? '100% 100%, 20px 20px' : undefined

  return (
    <PandaDiv css={{ display: 'flex', flexDir: 'column', justifyContent: 'end', height: '2.47rem', gap: '2' }}>
      <PandaDiv
        style={
          {
            '--bgi': gradientLch,
            '--bgi-p3': gradientOklch,
          } as React.CSSProperties
        }
        css={{
          position: 'absolute',
          inset: '0',
          display: 'block',
          height: '8',
          width: 'full',
          borderRadius: 'sm',
          borderWidth: '1px',
          borderColor: 'gray.border3',
          bgImage,
          bgSize,
          _mediaP3: {
            _supportsOklch: {
              bgImage: bgImageP3,
            },
          },
        }}
      />
      <PandaInput
        css={{
          display: 'block',
          width: '100%',
          zIndex: '2',
          // appearance: 'none',
          // bg:'#dd00cc/50',
        }}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
      />
      {/* <br />
      {param} = {value} */}
    </PandaDiv>
  )
}

type SliderInstanceProps = {
  oklchColor: OklchColor
  lchColor: LchColor
  onChange?: (value: number) => void
}

function LuminanceSlider({ oklchColor, lchColor, onChange }: SliderInstanceProps) {
  const gradients = createGradients(oklchColor, lchColor, 'l')

  return <Slider param="l" value={oklchColor.l} min={0} max={1} step={0.01} onChange={onChange} {...gradients} />
}

function HueSlider({ oklchColor, lchColor, onChange }: SliderInstanceProps) {
  const gradients = createGradients(oklchColor, lchColor, 'h')

  return <Slider param="h" value={oklchColor.h} min={0} max={360} step={1} onChange={onChange} {...gradients} />
}

function ChromaSlider({ oklchColor, lchColor, onChange }: SliderInstanceProps) {
  const gradients = createGradients(oklchColor, lchColor, 'c')

  return <Slider param="c" value={oklchColor.c} min={0} max={0.4} step={0.01} onChange={onChange} {...gradients} />
}

function AlphaSlider({ oklchColor, lchColor, onChange }: SliderInstanceProps) {
  const gradients = createGradients(oklchColor, lchColor, 'alpha')

  return (
    <Slider param="alpha" value={oklchColor.alpha} min={0} max={1} step={0.01} onChange={onChange} {...gradients} />
  )
}

function ColorSplitPreview({ currentColor, originalColor }: { currentColor: OklchColor; originalColor: OklchColor }) {
  const curentColorCssVars = {
    '--bg': formatCss(currentColor),
    '--bg-p3': formatCss(currentColor),
  }
  const originalColorCssVars = {
    '--bg': formatCss(originalColor),
    '--bg-p3': formatCss(originalColor),
  }

  return (
    <PandaDiv
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2',
        width: 'full',
        color: 'gray.fg1',
        userSelect: 'none',
        pb: '4',
        mb: '3',

        '& [data-preview]': {
          display: 'flex',
          width: '100%',
          height: '16',
          borderRadius: 'sm',
          borderWidth: '1px',
          borderColor: 'gray.border3',
          bgGradient: 'checkerboard',
          bgSize: '20px 20px',

          '& div': {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            textAlign: 'center',
            transition: 'background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            bgColor: 'var(--bg)',
            _mediaP3: {
              _supportsOklch: {
                bgColor: 'var(--bg-p3)',
              },
            },
          },

          '& span': {
            position: 'absolute',
            display: 'block',
            bottom: '-22px',
            left: '0',
            width: '100%',
            textAlign: 'left',
          },

          '& p': {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 'sm',
            gap: '2',
            textAlign: 'center',
          },

          '& strong:first-child': {
            fontSize: '3xl',
            color: 'contrast.dark',
          },

          '& strong:last-child': {
            fontSize: '3xl',
            color: 'contrast.light',
          },
        },
      }}
    >
      <PandaDiv data-preview style={originalColorCssVars as React.CSSProperties}>
        <div>
          <span>Original</span>
          <p>
            <strong>A</strong>
            <strong>A</strong>
          </p>
        </div>
      </PandaDiv>
      <PandaDiv data-preview style={curentColorCssVars as React.CSSProperties}>
        <div>
          <span>Current</span>
          <p>
            <strong>A</strong>
            <strong>A</strong>
          </p>
        </div>
      </PandaDiv>
    </PandaDiv>
  )
}

export default function OklchEditor({
  color,
  onApply,
  onCancel,
  preview,
  sliders = ['l', 'c', 'h', 'alpha'],
}: OklchEditorProps) {
  const [oklchColor, setOklchColor] = useState(color)
  const [inputHue, setInputHue] = useState(color.h)

  const handleChange = (value: number, slider: OklchEditorSlider) => {
    const newColor: OklchColor = {
      ...oklchColor,
      [slider]: value,
    }
    setOklchColor(newColor)
    setInputHue(newColor.h)
  }

  const lchColor: LchColor = {
    h: 0,
    alpha: 1,
    ...colorToLch(oklchColor),
  }

  const showLuminance = sliders.includes('l')
  const showChroma = sliders.includes('c')
  const showHue = sliders.includes('h')
  const showAlpha = sliders.includes('alpha')

  return (
    <PandaDiv w="full" display="flex" flexDir="column" gap="3" mt="2">
      {preview && <ColorSplitPreview currentColor={oklchColor} originalColor={color} />}
      {showLuminance && (
        <LuminanceSlider oklchColor={oklchColor} lchColor={lchColor} onChange={(value) => handleChange(value, 'l')} />
      )}
      {showChroma && (
        <ChromaSlider oklchColor={oklchColor} lchColor={lchColor} onChange={(value) => handleChange(value, 'c')} />
      )}
      {showHue && (
        <HueSlider oklchColor={oklchColor} lchColor={lchColor} onChange={(value) => handleChange(value, 'h')} />
      )}
      {showAlpha && (
        <AlphaSlider oklchColor={oklchColor} lchColor={lchColor} onChange={(value) => handleChange(value, 'alpha')} />
      )}
      <span />
      <PandaDiv
        userSelect="none"
        display="flex"
        flexDir="row"
        gap="3"
        alignItems="center"
        justifyContent="end"
        textAlign="right"
      >
        <span>Hue</span>
        <PandaDiv flex="1">
          <PandaInput
            css={{
              width: 'full',
              height: '100%',
              borderRadius: 'sm',
              borderWidth: '1px',
              borderColor: 'gray.border3',
              outline: 'none',
              position: 'relative',
              transitionDuration: 'normal',
              transitionTimingFunction: 'default',
              transitionProperty: 'box-shadow, border-color',
              px: '2',
              py: '1',
              _disabled: {
                opacity: 0.4,
                cursor: 'not-allowed',
              },
              _focusVisible: {
                outline: '2px solid',
                outlineOffset: '0px',
              },
            }}
            type="number"
            min="0"
            max="360"
            step="1"
            value={inputHue}
            onChange={(e) => {
              // TODO: create helper function to parse numeric ranges
              let hue = Number.parseInt((e.target.value ?? '0').replace(',', '.'))
              hue = hue ? Math.min(360, Math.max(0, hue)) : 0
              try {
                setOklchColor({
                  ...oklchColor,
                  h: hue,
                })
              } catch (error) {
                console.error(error)
              }
              setInputHue(hue)
            }}
          />
        </PandaDiv>
        <PrimaryButton size="sm" onClick={() => onCancel?.(oklchColor, formatCss(oklchColor))}>
          Cancel
        </PrimaryButton>
        <PrimaryButton size="sm" onClick={() => onApply?.(oklchColor, formatCss(oklchColor))}>
          Apply
        </PrimaryButton>
      </PandaDiv>
    </PandaDiv>
  )
}
