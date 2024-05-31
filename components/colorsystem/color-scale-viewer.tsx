'use client'

import { monoFontClass } from '@/app/fonts'
import { cn } from '@/lib/utils'
import type { presetColors } from '@/panda.preset-colors'
import { css } from '@/styled-system/css'
import { useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import Heading from '../layout/heading'
import {
  type ColorLevel,
  type ColorLevelAlias,
  colorLevelAliases,
  colorLevelMap,
  colorLevelReverseMap,
  colorLevels,
} from './types'

type PresetColorName = keyof typeof presetColors
type PresetColorNameExcludingP3 = Exclude<PresetColorName, `${PresetColorName}P3`>

type ColorScaleViewerProps = {
  title?: string
  subtitle?: string
  name: PresetColorNameExcludingP3
  withContrastScale?: boolean
  withAliases?: boolean
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

function ColorCell({
  colorName,
  level,
  label,
}: { colorName: string; level?: ColorLevel | ColorLevelAlias; label: string }) {
  const [copiedText, copyToClipboard] = useCopyToClipboard()
  const [copied, setCopied] = useState(false)
  const token = level ? `${colorName}.${level}` : colorName
  const varName = level ? `--colors-${colorName}-${level}` : `--colors-${colorName}`
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

  const styleObj = {
    '--bgc': `var(${varName})`,
  } as React.CSSProperties

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
      bgColor: 'var(--bgc)',
      bgImage:
        'linear-gradient(var(--bgc), var(--bgc)), repeating-conic-gradient(#99999977 0% 25%, transparent 0% 50%)',
      bgSize: '100% 100%, 20px 20px',
      bgRepeat: 'repeat',
      '& span': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        inset: '0',
        padding: '1',
        background: 'shade.dark.600',
        _dark: {
          background: 'shade.light.600',
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
    <button type="button" data-level={level} className={classNames} onClick={handleCopy(token)} style={styleObj}>
      {showCopiedText === false && <span>{label}</span>}
      {showCopiedText && <span data-copied>Copied!</span>}
    </button>
  )
}

export default function ColorScaleViewer({
  title,
  subtitle,
  name,
  withAliases,
  withContrastScale,
}: ColorScaleViewerProps) {
  const aliasesLegend = withAliases ? (
    <div className={cn(gridCss, 'legend', monoFontClass)}>
      <div />
      {/* <div className="label" key={'default'}>
        -
      </div> */}
      {colorLevelAliases.map((level) => (
        <div className="label" key={level} data-level={colorLevelMap[level]}>
          {colorLevelMap[level]}
        </div>
      ))}
    </div>
  ) : undefined

  const contrastScale = withContrastScale ? (
    <>
      <div className={gridCss}>
        <Heading className="label" size="xs" as="div">
          background
        </Heading>
        {/* <ColorCell colorName="bg" label="DEFAULT" /> */}
        {(['100', '200', '300'] as const).map((level) => (
          <ColorCell key={level} colorName="bg" level={level} label={level} />
        ))}
      </div>

      <div className={gridCss}>
        <Heading className="label" size="xs" as="div">
          text
        </Heading>
        {/* <ColorCell colorName="fg" label="DEFAULT" /> */}
        {(['100', '200', '300'] as const).map((level) => (
          <ColorCell key={level} colorName="fg" level={level} label={level} />
        ))}
      </div>
    </>
  ) : undefined

  return (
    <>
      {aliasesLegend}
      {contrastScale}
      <div className={gridCss}>
        {title && (
          <Heading className="label" size="xs" as="div">
            {title}
            {subtitle && <div className="subtitle">{subtitle}</div>}
          </Heading>
        )}
        {/* <ColorCell colorName={name} label="DEFAULT" /> */}
        {colorLevels.map((level) => (
          <ColorCell
            key={level}
            colorName={name}
            level={colorLevelReverseMap[level]}
            label={colorLevelReverseMap[level]}
          />
        ))}
      </div>
    </>
  )
}
