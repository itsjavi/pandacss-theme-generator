'use client'

import { cn } from '@/lib/utils'
import { GrayButton } from '@/modules/design-system/components/button'
import { Input } from '@/modules/design-system/components/input'
import { css } from '@/styled-system/css'
import { type Hsl, formatHex, formatHsl, wcagContrast } from 'culori'
import { CodeIcon, Edit3Icon, TrashIcon, XIcon } from 'lucide-react'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { type ColorSystemStateColorConfig, getColorStopFullId, useColorSystem } from './client-state'
import { generatePandaColorsPreset, generatePandaPresetSnippet } from './preset-generator'

const checkerBoardBgClass = css({
  printColorAdjust: 'exact!',
  backgroundSize: '100% 100%, 20px 20px',
  backgroundImage:
    'linear-gradient(var(--bgcolor), var(--bgcolor)), repeating-conic-gradient(rgba(127,127,127,0.3) 0% 25%,transparent 0% 50%)',
})

function hasGoodContrast(color: Required<Hsl>): {
  white: boolean
  black: boolean
} {
  const whiteContrast = wcagContrast({ mode: 'hsl', h: 0, s: 0, l: 1 }, color)
  const blackContrast = wcagContrast({ mode: 'hsl', h: 0, s: 0, l: 0 }, color)

  return {
    white: whiteContrast >= 4,
    black: blackContrast >= 4,
  }
}

function getFgColor(color: Required<Hsl>): string {
  const { white, black } = hasGoodContrast(color)
  if (white) {
    return '#fff'
  }
  if (black) {
    return '#000'
  }
  return '#777'
}

function ColorStop({ color, index }: { color: ColorSystemStateColorConfig; index: number }) {
  const stop = color.stops[index]
  if (!stop) return null
  const stopName = getColorStopFullId(color.name, index, color.maxStops)
  const hsla = formatHsl(stop)
  return (
    <div
      className={css({
        mb: '4',
      })}
    >
      <div
        className={cn(
          css({
            borderRadius: 'md',
            width: '100%',
            height: '100px',
            border: '1px solid',
            borderColor: 'muted.200/30',
          }),
          checkerBoardBgClass,
        )}
        style={{
          // @ts-ignore
          '--bgcolor': hsla,
        }}
      />
      <div
        className={css({
          display: 'flex',
          p: '1',
          flexDirection: 'column',
          color: 'muted.200',
          fontSize: 'sm',
          // fontFamily: 'mono',
        })}
      >
        <div>{stopName}</div>
        <div>{formatHex(stop).toUpperCase()}</div>
        <div>{hsla}</div>
      </div>
    </div>
  )
}

function ColorPalette({ color, deletable }: { color: ColorSystemStateColorConfig; deletable?: boolean }) {
  const [, dispatch] = useColorSystem()
  const [isEditing, setIsEditing] = useState(false)

  const editForm = (
    <>
      <div
        className={css({
          display: 'flex',
          width: 'full',
          flex: '1',
          gap: '4',
          flexDirection: 'row',
          smDown: {
            flexDirection: 'column',
          },
        })}
      >
        <Input
          label="Name"
          defaultValue={color.name.toLowerCase()}
          onChange={(e) => {
            dispatch({ type: 'update_color', payload: { id: color.id, name: e.target.value } })
          }}
        />
        {/* <Select
          label="Color Group"
          defaultValue={color.group}
          onChange={(e) => {
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            dispatch({ type: 'update_color', payload: { id: color.id, group: e.target.value as any } })
          }}
        >
          <option value="primary">Primary</option>
          <option value="accent">Accent</option>
          <option value="gray">Gray</option>
          <option value="background">Background</option>
          <option value="foreground">Foreground</option>
          <option value="supporting">Supporting</option>
        </Select> */}
        <Input
          label="Color Stops"
          defaultValue={color.maxStops || 10}
          type="number"
          step="1"
          min="4"
          max="20"
          onChange={(e) => {
            dispatch({ type: 'update_color', payload: { id: color.id, maxStops: Number.parseInt(e.target.value) } })
          }}
        />
        <Input
          label="Alpha"
          defaultValue={color.alpha || 100}
          type="number"
          step="1"
          min="0"
          max="100"
          onChange={(e) => {
            dispatch({ type: 'update_color', payload: { id: color.id, alpha: Number.parseInt(e.target.value) } })
          }}
        />
      </div>

      <div
        className={css({
          display: 'flex',
          width: 'full',
          flex: '1',
          gap: '4',
          flexDirection: 'row',
          smDown: {
            flexDirection: 'column',
          },
        })}
      >
        <Input
          label="Hue"
          defaultValue={color.hue}
          type="number"
          step="1"
          max="360"
          min="0"
          onChange={(e) => {
            dispatch({ type: 'update_color', payload: { id: color.id, hue: Number.parseInt(e.target.value) } })
          }}
        />
        <Input
          label="Saturation"
          defaultValue={color.chroma}
          type="number"
          step="1"
          max="100"
          min="0"
          onChange={(e) => {
            dispatch({ type: 'update_color', payload: { id: color.id, chroma: Number.parseInt(e.target.value) } })
          }}
        />
        <Input
          label="Min Lightness"
          defaultValue={color.luminanceMin || 0}
          type="number"
          step="1"
          min="0"
          max="100"
          onChange={(e) => {
            dispatch({ type: 'update_color', payload: { id: color.id, luminanceMin: Number.parseInt(e.target.value) } })
          }}
        />
      </div>

      <div
        className={css({
          display: 'flex',
          width: 'full',
          flex: '1',
          gap: '4',
          flexDirection: 'row',
          smDown: {
            flexDirection: 'column',
          },
        })}
      >
        <Input
          label="Hue Shift"
          defaultValue={color.hueShift || 0}
          type="number"
          step="1"
          min="-360"
          max="360"
          onChange={(e) => {
            dispatch({ type: 'update_color', payload: { id: color.id, hueShift: Number.parseInt(e.target.value) } })
          }}
        />
        <Input
          label="Saturation Shift"
          defaultValue={color.chromaShift || 0}
          type="number"
          step="1"
          min="-100"
          max="100"
          onChange={(e) => {
            dispatch({ type: 'update_color', payload: { id: color.id, chromaShift: Number.parseInt(e.target.value) } })
          }}
        />
        <Input
          label="Max Lightness"
          defaultValue={color.luminanceMax || 0}
          type="number"
          step="1"
          min="0"
          max="100"
          onChange={(e) => {
            dispatch({ type: 'update_color', payload: { id: color.id, luminanceMax: Number.parseInt(e.target.value) } })
          }}
        />
      </div>
    </>
  )

  const expandedPreviewer = (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '6',
      })}
    >
      {color.stops.map((_, index) => (
        <ColorStop key={`color${color.name}-${index}`} color={color} index={index} />
      ))}
    </div>
  )
  return (
    <div
      className={css({
        display: 'flex',
        gap: '4',
        flexDirection: 'column',
      })}
    >
      <div
        className={css({
          fontSize: '2xl',
          fontWeight: 'medium',
          textTransform: 'capitalize',
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <span>{color.name}</span>
        <div>
          {isEditing && deletable && (
            <GrayButton
              variant="ghost"
              size="sm"
              title={`Delete '${color.name}' color`}
              onClick={() => {
                if (window.confirm(`Are you sure you want to delete the '${color.name}' color?`))
                  dispatch({ type: 'remove_color', payload: color.id })
              }}
            >
              <TrashIcon />
            </GrayButton>
          )}

          <GrayButton
            variant="ghost"
            size="sm"
            title="Edit color"
            onClick={() => {
              setIsEditing(!isEditing)
            }}
          >
            {isEditing ? <XIcon /> : <Edit3Icon />}
            {isEditing ? 'Close' : 'Edit'}
          </GrayButton>
        </div>
      </div>

      <ColorStopsPreviewer colorConfig={color} />
      {isEditing && editForm}
      {isEditing && expandedPreviewer}
    </div>
  )
}

export function LigthnessCurveCanvas() {
  const [state] = useColorSystem()
  const [p1x, p1y, p2x, p2y] = state.interpolatorCurve
  const size = 150
  const padding = 10

  const startX = padding
  const startY = size - padding
  const endX = size - padding
  const endY = padding

  const cp1x = startX + (endX - startX) * p1x
  const cp1y = startY - (startY - endY) * p1y
  const cp2x = startX + (endX - startX) * p2x
  const cp2y = startY - (startY - endY) * p2y

  const pathData = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <svg
        width={size}
        height={size}
        className={css({
          maxWidth: '100%',
          height: 'auto',
          border: '1px solid',
          borderColor: 'gray.border2',
        })}
      >
        <title>Lightness Curve</title>
        <path
          d={pathData}
          className={css({
            strokeWidth: '2',
            stroke: 'blue.800',
            fill: 'none',
          })}
        />
      </svg>
    </div>
  )
}

export function LightnessCurveEditor() {
  const [state, dispatch] = useColorSystem()
  const [p1, p2, p3, p4] = state.interpolatorCurve

  return (
    <div
      className={css({
        position: 'sticky',
        top: '0',
        zIndex: 'popover',
        display: 'flex',
        gap: '4',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // alignItems: 'start',
      })}
    >
      <div
        className={css({
          display: 'flex',
          width: 'full',
          flex: '1',
          gap: '4',
          flexDirection: 'column',
        })}
      >
        <div
          className={css({
            display: 'flex',
            width: 'full',
            flex: '1',
            gap: '4',
            flexDirection: 'row',
            smDown: {
              flexDirection: 'column',
            },
          })}
        >
          <Input
            label="x1"
            type="range"
            step="0.01"
            min="0"
            max="1"
            defaultValue={p1}
            onChange={(e) => {
              dispatch({
                type: 'update_interpolator_curve',
                payload: { curve: [Number.parseFloat(e.target.value), p2, p3, p4] },
              })
            }}
          />
          <Input
            label="y1"
            type="range"
            step="0.01"
            min="0"
            max="1"
            defaultValue={p2}
            onChange={(e) => {
              dispatch({
                type: 'update_interpolator_curve',
                payload: { curve: [p1, Number.parseFloat(e.target.value), p3, p4] },
              })
            }}
          />
          <Input
            label="Min Lightness"
            defaultValue={state.luminanceMin || 0}
            type="number"
            step="1"
            min="0"
            max="100"
            onChange={(e) => {
              dispatch({ type: 'update_luminance_min', payload: Number.parseInt(e.target.value) })
            }}
          />
        </div>

        <div
          className={css({
            display: 'flex',
            width: 'full',
            flex: '1',
            gap: '4',
            flexDirection: 'row',
            smDown: {
              flexDirection: 'column',
            },
          })}
        >
          <Input
            label="x2"
            type="range"
            step="0.01"
            min="0"
            max="1"
            defaultValue={p3}
            onChange={(e) => {
              dispatch({
                type: 'update_interpolator_curve',
                payload: { curve: [p1, p2, Number.parseFloat(e.target.value), p4] },
              })
            }}
          />
          <Input
            label="y2"
            type="range"
            step="0.01"
            min="0"
            max="1"
            defaultValue={p4}
            onChange={(e) => {
              dispatch({
                type: 'update_interpolator_curve',
                payload: { curve: [p1, p2, p3, Number.parseFloat(e.target.value)] },
              })
            }}
          />
          <Input
            label="Max Lightness"
            defaultValue={state.luminanceMax || 0}
            type="number"
            step="1"
            min="0"
            max="100"
            onChange={(e) => {
              dispatch({ type: 'update_luminance_max', payload: Number.parseInt(e.target.value) })
            }}
          />
        </div>
        <div
          className={css({
            fontSize: 'sm',
            color: 'gray.fg1',
          })}
        >
          {`[ ${p1}, ${p2}, ${p3}, ${p4} ]`}
        </div>
      </div>
      <LigthnessCurveCanvas />
    </div>
  )
}

export function PaletteSwatches() {
  const [colorState] = useColorSystem()
  return (
    <div
      className={css({
        display: 'grid',
        width: 'full',
        gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
        gap: '6',
        flexDirection: 'column',
      })}
    >
      {colorState.colors.map((color) => {
        const midPoint = Math.ceil(color.stops.length / 2)
        const stop = color.stops[midPoint]
        if (!stop) return null
        return (
          <div
            key={color.id}
            className={css({
              display: 'block',
              width: 'full',
            })}
          >
            <button
              type="button"
              title={color.name}
              data-colorid={color.id}
              suppressHydrationWarning={true}
              className={css({
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 'md',
                lineHeight: '1',
                width: 'full',
                minHeight: '40px',
                cursor: 'pointer',
                printColorAdjust: 'exact!',
              })}
              onClick={(e) => {
                const dataColorId = e.currentTarget.getAttribute('data-colorid')
                const colorHash = `C_${dataColorId}`
                // smooth scroll to the color palette
                const element = document.getElementById(colorHash)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              style={{
                backgroundColor: formatHsl(stop),
              }}
            />
            <span>{color.name}</span>
          </div>
        )
      })}
    </div>
  )
}

function ColorStopsPreviewer({ colorConfig }: { colorConfig: ColorSystemStateColorConfig }) {
  return (
    <div>
      <div
        suppressHydrationWarning={true}
        id={`C_${colorConfig.id}`}
        className={css({
          display: 'flex',
          width: 'full',
          flexDirection: 'row',
          gap: '0',
          mb: '2',
          borderRadius: 'md',
          overflow: 'hidden',
          border: '1px solid',
          borderColor: 'gray.border2',
        })}
      >
        {colorConfig.stops.map((color, idx) => {
          const key = `${colorConfig.name}-${idx}`
          const stopName = getColorStopFullId(colorConfig.name, idx, colorConfig.maxStops)

          return (
            <div
              key={key}
              title={stopName}
              className={cn(
                css({
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  lineHeight: '1',
                  width: 'full',
                  minHeight: '40px',
                  printColorAdjust: 'exact!',
                }),
                checkerBoardBgClass,
              )}
              style={{
                // @ts-ignore
                '--bgcolor': formatHsl(color),
                color: getFgColor(color),
              }}
            />
          )
        })}
      </div>
      <div
        suppressHydrationWarning={true}
        id={`C_${colorConfig.id}`}
        className={css({
          display: 'none',
          width: 'full',
          flexDirection: 'row',
          gap: '0',
          mb: '4',
          borderRadius: 'md',
          overflow: 'hidden',
          // border: '1px solid',
          // borderColor: 'gray.border2',
        })}
      >
        {colorConfig.stops.map((color, idx) => {
          const key = `${colorConfig.name}-${idx}`
          const stopName = getColorStopFullId(colorConfig.name, idx, colorConfig.maxStops)

          return (
            <div
              key={key}
              title={stopName}
              className={cn(
                css({
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  lineHeight: '1',
                  width: 'full',
                  fontSize: 'sm',
                  color: 'gray.fg1',
                }),
              )}
            >
              {stopName}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PalettePandaCode() {
  const [state] = useColorSystem()
  const preset = generatePandaColorsPreset(state)
  const presetCode = generatePandaPresetSnippet(preset)

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <pre
      className={css({
        display: 'block',
        width: 'full',
        overflowX: 'auto',
        bg: 'background.400',
        border: '1px solid',
        borderColor: 'gray.border1',
        color: 'muted.700',
        borderRadius: 'md',
        p: '4',
        fontSize: 'sm',
        fontFamily: 'mono',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        maxHeight: '500px',
        overflowY: 'auto',
        _selection: {
          bg: 'gray.200',
          color: 'gray.950',
        },
      })}
      // tabIndex={0}
      onClick={(e) => {
        const range = document.createRange()
        range.selectNodeContents(e.currentTarget)
        const selection = window.getSelection()
        selection?.removeAllRanges()
        selection?.addRange(range)
      }}
    >
      {presetCode}
    </pre>
  )
}

export function PaletteEditorActions() {
  const [, dispatch] = useColorSystem()
  const [codeVisible, setCodeVisible] = useState(false)
  return (
    <>
      <div
        className={css({
          display: 'flex',
          gap: '4',
          flexDirection: 'row',
        })}
      >
        <GrayButton
          variant="outline"
          size="sm"
          onClick={() => {
            if (window.confirm('Are you sure you want to reset all colors to the defaults?'))
              dispatch({ type: 'clear_colors' })
          }}
        >
          Reset to defaults
        </GrayButton>

        <GrayButton
          variant="outline"
          size="sm"
          onClick={() => {
            const randHue = Math.floor(Math.random() * 360)
            const colorId = nanoid()
            dispatch({
              type: 'add_color',
              payload: { name: 'new-color', id: colorId, group: 'accent', hue: randHue, chroma: 70 },
            })
            // setTimeout(() => {
            //   const colorHash = `C_${colorId}`
            //   // smooth scroll to the color palette
            //   const element = document.getElementById(colorHash)
            //   if (element) {
            //     element.scrollIntoView({ behavior: 'smooth' })
            //   }
            // }, 500)
          }}
        >
          Add Random Color
        </GrayButton>
        <GrayButton
          variant={codeVisible ? 'solid' : 'outline'}
          size="sm"
          title="View code"
          onClick={() => {
            setCodeVisible(!codeVisible)
          }}
        >
          <CodeIcon /> {codeVisible ? 'Hide' : 'Show'} Preset Code
        </GrayButton>
      </div>
      {codeVisible && <PalettePandaCode />}
    </>
  )
}

export default function PaletteEditor() {
  const [colorState] = useColorSystem()
  return (
    <div
      className={css({
        display: 'flex',
        gap: '6',
        flexDirection: 'column',
      })}
    >
      {colorState.colors.map((color) => (
        <ColorPalette key={color.id} color={color} deletable={colorState.colors.length > 1} />
      ))}
    </div>
  )
}
