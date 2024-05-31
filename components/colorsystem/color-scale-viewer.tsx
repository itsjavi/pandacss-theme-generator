'use client'

import { monoFontClass } from '@/app/fonts'
import { bfgColorLevelToAlias, colorLevelToAlias, colorLevels } from '@/lib/colorsystem/constants'
import type { ColorConfig, ColorLevel, ColorLevelAlias, ColorLevelBfg } from '@/lib/colorsystem/types'
import { cn } from '@/lib/utils'
import { css } from '@/styled-system/css'
import { useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import Heading from '../layout/heading'

type ColorScaleViewerProps = {
  withLegend?: boolean
  colorConfig: ColorConfig
}

const gridCss = css({
  display: 'grid',
  gridTemplateColumns: 'minmax(120px, 1fr) repeat(11, minmax(60px, 1fr))',
  gap: '2',
  maxWidth: '900px',
  '& .label': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    px: '2',
    py: '2',
  },
  '& .subtitle': {
    fontWeight: 'normal',
    color: 'fg.muted',
  },
  '& .label:not(:first-child)': {
    justifyContent: 'center',
  },
  '&.legend': {
    fontSize: 'xxs',
    textAlign: 'center',
  },
  '& [data-level="600"], & [data-level="border3"]': {
    fontWeight: 'black',
    fontSize: 'lg',
    borderRadius: 'sm',
    borderWidth: '2px',
    borderColor: 'fg.200',
  },
})

function ColorCell({ level, colorConfig }: { colorConfig: ColorConfig; level?: ColorLevel | ColorLevelAlias }) {
  const [copiedText, copyToClipboard] = useCopyToClipboard()
  const [copied, setCopied] = useState(false)

  const isBgFg = ['bg', 'fg'].includes(colorConfig.type)
  const colorName = colorConfig.name
  const defaultLevel = colorConfig.type === 'bg' || colorConfig.type === 'fg' ? '100' : '600'
  const levelValue = level ?? defaultLevel
  const levelAlias =
    (isBgFg ? bfgColorLevelToAlias[levelValue as ColorLevelBfg] : colorLevelToAlias[levelValue as ColorLevel]) ??
    levelValue
  const token = level ? `${colorName}.${levelAlias}` : colorName
  const colorPreviewCssVars = {
    '--bg': colorConfig.light[levelValue]?.srgb,
    '--bg-p3': colorConfig.light[levelValue]?.oklch ?? colorConfig.light[levelValue]?.srgb,
    '--bg-dark': colorConfig.dark[levelValue]?.srgb,
    '--bg-dark-p3': colorConfig.dark[levelValue]?.oklch ?? colorConfig.dark[levelValue]?.srgb,
  } as React.CSSProperties
  const showCopiedText = copied && copiedText === token

  const handleCopy = (text: string) => () => {
    copyToClipboard(text)
      .then(() => {
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 1000)
      })
      .catch((error) => {
        console.error('Failed to copy!', error)
      })
  }

  const classNames = cn(
    css({
      display: 'flex',
      alignItems: 'center',
      px: '2',
      py: '4',
      boxShadow: 'borderInset',
      borderRadius: 'sm',
      fontSize: 'sm',
      color: 'gray.fg2',
      textAlign: 'center',
      justifyContent: 'center',
      aspectRatio: '4/3',
      '--bgch': 'repeating-conic-gradient(#99999955 0% 25%, transparent 0% 50%)',
      bgImage: 'linear-gradient(var(--bg), var(--bg)), var(--bgch)',
      _dark: {
        bgImage: 'linear-gradient(var(--bg-dark), var(--bg-dark)), var(--bgch)',
      },
      _mediaP3: {
        _supportsP3: {
          bgImage: 'linear-gradient(var(--bg-p3), var(--bg-p3)), var(--bgch)',
          _dark: {
            bgImage: 'linear-gradient(var(--bg-dark-p3), var(--bg-dark-p3)), var(--bgch)',
          },
        },
      },
      bgSize: '100% 100%, 20px 20px',
      bgRepeat: 'repeat',
      '& span': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        inset: '0',
        padding: '1',
        background: 'alpha.dark.600',
        _dark: {
          background: 'alpha.light.600',
        },
        color: 'fg.100',
        fontSize: 'xs',
        textAlign: 'center',
        lineHeight: '1',
        zIndex: 'z1',
        opacity: 0,
        userSelect: 'none',
        cursor: 'pointer',
        transition: 'opacity 0.15s ease-in-out',
        fontWeight: 'normal',
      },
      '&:hover span, & [data-copied]': {
        opacity: 1,
        zIndex: '100',
      },
    }),
    monoFontClass,
  )

  return (
    <button
      type="button"
      data-level={level}
      className={classNames}
      onClick={handleCopy(token)}
      style={colorPreviewCssVars}
    >
      {showCopiedText === false && <span>{levelAlias}</span>}
      {showCopiedText && <span data-copied>Copied!</span>}
    </button>
  )
}

export default function ColorScaleViewer({ colorConfig, withLegend }: ColorScaleViewerProps) {
  const aliasesLegend = withLegend ? (
    <div className={cn(gridCss, 'legend', monoFontClass)}>
      <div />
      {colorLevels.map((level) => (
        <div className="label" key={level}>
          {level}
        </div>
      ))}
    </div>
  ) : undefined

  const title = colorConfig.name
  const subtitle = colorConfig.aliases.length > 0 ? `${colorConfig.aliases.join(' - ')}` : undefined
  const maxLevels = ['bg', 'fg'].includes(colorConfig.type) ? 3 : colorLevels.length
  const levelsSlice = colorLevels.slice(0, maxLevels)

  return (
    <>
      {aliasesLegend}
      <div className={gridCss}>
        <Heading className="label" size="xs" as="div">
          {title}
          {subtitle && <div className="subtitle">{subtitle}</div>}
        </Heading>
        {/* <ColorCell colorName={name} label="DEFAULT" /> */}
        {levelsSlice.map((level) => (
          <ColorCell key={level} colorConfig={colorConfig} level={level} />
        ))}
      </div>
    </>
  )
}
