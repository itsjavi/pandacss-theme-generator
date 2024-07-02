'use client'

import { css } from '@/styled-system/css';
import { formatHex, formatHsl, type Hsl } from 'culori';
import { useColorSystem, type ColorSystemStateColorConfig } from './client-state';

function ColorStop({ color, index }: { color: ColorSystemStateColorConfig; index: number }) {
  const stop = color.stops[index]
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

function ColorPalette({ color }: { color: ColorSystemStateColorConfig }) {
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
        })}
      >
        {color.name}
      </div>

      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(max-content, 1fr))',
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
      {colorState.colors.map((color) => (
        <ColorPalette key={color.id} color={color} />
      ))}
    </div>
  )
}
