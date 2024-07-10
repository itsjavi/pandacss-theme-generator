'use client'

import { GrayButton } from '@/modules/design-system/components/button'
import { Input } from '@/modules/design-system/components/input'
import { css } from '@/styled-system/css'
import { formatHex, formatHsl } from 'culori'
import { CodeIcon, TrashIcon } from 'lucide-react'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { type ColorSystemStateColorConfig, useColorSystem } from './client-state'
import { generatePandaColorsPreset, generatePandaPresetSnippet } from './generate-code'

function ColorStop({ color, index }: { color: ColorSystemStateColorConfig; index: number }) {
  const stop = color.stops[index]
  if (!stop) return null
  const stopName = `${color.name}.${index + 1}`
  const hsla = formatHsl(stop)
  return (
    <div
      className={css({
        mb: '4',
      })}
    >
      <div
        className={css({
          borderRadius: 'md',
          width: '100%',
          height: '100px',
          border: '1px solid',
          borderColor: 'muted.200/30',
          printColorAdjust: 'exact!',
          backgroundSize: '100% 100%, 20px 20px',
          backgroundImage:
            'linear-gradient(var(--bgcolor), var(--bgcolor)), repeating-conic-gradient(rgba(127,127,127,0.3) 0% 25%,transparent 0% 50%)',
        })}
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
  return (
    <div
      suppressHydrationWarning={true}
      id={`C_${color.id}`}
      className={css({
        display: 'flex',
        gap: '4',
        flexDirection: 'column',
        pt: '8',
        borderTop: '1px solid',
        borderColor: 'gray.border2',
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
        {deletable && (
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
        const midPoint = Math.floor(color.stops.length / 2) - 1
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
              onClick={() => {
                const colorHash = `C_${color.id}`
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
          title="Clear all colors"
          onClick={() => {
            if (window.confirm('Are you sure you want to clear all colors?')) dispatch({ type: 'clear_colors' })
          }}
        >
          Reset All Colors
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
        gap: '12',
        flexDirection: 'column',
      })}
    >
      {colorState.colors.map((color) => (
        <ColorPalette key={color.id} color={color} deletable={colorState.colors.length > 1} />
      ))}
    </div>
  )
}
