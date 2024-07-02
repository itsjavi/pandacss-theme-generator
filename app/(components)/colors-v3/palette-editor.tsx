'use client'

import { GrayButton } from '@/modules/design-system/components/button'
import { Input } from '@/modules/design-system/components/input'
import { css } from '@/styled-system/css'
import { formatHex, formatHsl, type Hsl } from 'culori'
import { TrashIcon } from 'lucide-react'
import { nanoid } from 'nanoid'
import { useColorSystem, type ColorSystemStateColorConfig } from './client-state'

function ColorStop({ color, index }: { color: ColorSystemStateColorConfig; index: number }) {
  const stop = color.stops[index]
  if (!stop) return null
  const stopName = `${color.name}.${index + 1}`
  const hsla: Hsl = {
    mode: 'hsl',
    l: stop.l / 100,
    s: stop.c / 100,
    h: stop.h,
    alpha: stop.alpha / 100,
  }
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
        })}
        style={{
          // backgroundColor: `lch(${stop.l}% ${stop.c}% ${stop.h} / ${stop.alpha}%)`,
          backgroundColor: `hsla(${stop.h} ${stop.c}% ${stop.l}% / ${stop.alpha}%)`,
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
        <div>{formatHex(hsla).toUpperCase()}</div>
        <div>{formatHsl(hsla)}</div>
      </div>
    </div>
  )
}

function ColorPalette({ color, deletable }: { color: ColorSystemStateColorConfig; deletable?: boolean }) {
  const [, dispatch] = useColorSystem()
  return (
    <div
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

function PaletteSwatches() {
  const [colorState, dispatch] = useColorSystem()
  return (
    <div
      className={css({
        display: 'grid',
        width: 'full',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
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
                minHeight: '60px',
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
                // backgroundColor: `lch(${stop.l}% ${stop.c}% ${stop.h} / ${stop.alpha}%)`,
                backgroundColor: `hsla(${stop.h} ${stop.c}% ${stop.l}% / ${stop.alpha}%)`,
              }}
            />
            <span>{color.name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default function PaletteEditor() {
  const [colorState, dispatch] = useColorSystem()
  return (
    <div
      className={css({
        display: 'flex',
        gap: '12',
        flexDirection: 'column',
      })}
    >
      <PaletteSwatches />
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
          Add Color
        </GrayButton>
      </div>
      {colorState.colors.map((color) => (
        <ColorPalette key={color.id} color={color} deletable={colorState.colors.length > 1} />
      ))}
    </div>
  )
}
