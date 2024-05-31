'use client'

import { monoFontClass } from '@/app/fonts'
import { bfgColorLevelToAlias, colorLevelToAlias, colorLevels } from '@/lib/colorsystem/constants'
import { parseColor } from '@/lib/colorsystem/create-color'
import type { ColorConfig, ColorLevel, ColorLevelAlias, ColorLevelBfg } from '@/lib/colorsystem/types'
import useDarkMode from '@/lib/hooks/use-darkmode'
import { cn } from '@/lib/utils'
import { css } from '@/styled-system/css'
import { Box, Stack, VStack } from '@/styled-system/jsx'
import { Popover } from '@ark-ui/react'
import { useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import Heading from '../layout/heading'
import { InlineTextButton } from '../ui/button'

type ColorScaleViewerProps = {
  withLegend?: boolean
  colorConfig: ColorConfig
  onHueChange?: (newHue: number, level: string, color: ColorConfig, isDarkMode: boolean) => void
}

export const popoverCss = {
  positioner: css({
    position: 'relative',
  }),
  content: css({
    minWidth: '360px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'gray.border1',
    background: 'bg.base',
    borderRadius: 'sm',
    boxShadow: 'lg',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 'sm',
    zIndex: 'popover',
    p: '4',
    _open: {
      animation: 'fadeIn 0.25s ease-out',
    },
    _closed: {
      animation: 'fadeOut 0.2s ease-out',
    },
    _hidden: {
      display: 'none',
    },
  }),
  title: css({
    fontWeight: 'medium',
    textStyle: 'sm',
  }),
  description: css({
    color: 'fg.muted',
    textStyle: 'sm',
  }),
  closeTrigger: css({
    color: 'fg.muted',
  }),
  arrow: css({
    '--arrow-size': 'var(--sizes-3)',
    '--arrow-background': 'var(--colors-bg)',
    zIndex: 'z1',
  }),
  arrowTip: css({
    borderTopWidth: '1px',
    borderLeftWidth: '1px',
    borderColor: 'gray.border1',
  }),
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
  '& [data-is-default], & [data-level="600"], & [data-level="border3"]': {
    fontWeight: 'black',
    fontSize: 'lg',
    borderRadius: 'sm',
    borderWidth: '1.5px',
    borderColor: 'fg.200',
  },
})

type ColorEditorProps = {
  isOpen: boolean
  hue: number
  onHueChange?: (newHue: number) => void
  children: React.ReactNode
  onClose?: () => void
}

function ColorEditor({ onHueChange, onClose, isOpen, children, hue }: ColorEditorProps) {
  if (!isOpen) {
    return children
  }

  return (
    <Popover.Root
      portalled
      open={isOpen}
      onOpenChange={(details) => {
        if (!details.open) {
          onClose?.()
        }
      }}
      closeOnEscape={true}
      closeOnInteractOutside={true}
    >
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Positioner className={popoverCss.positioner}>
        <Popover.Content className={popoverCss.content}>
          <Popover.Arrow className={popoverCss.arrow}>
            <Popover.ArrowTip className={popoverCss.arrowTip} />
          </Popover.Arrow>
          <Stack gap="1">
            <Popover.Title className={popoverCss.title}>OKCLH Color Editor</Popover.Title>
            <Popover.Description className={popoverCss.description}>
              <VStack gap="1">
                <strong>Hue</strong>
                <input
                  className={css({ width: 'full', display: 'inline-flex' })}
                  onChange={(e) => {
                    onHueChange?.(Number.parseFloat(e.target.value))
                  }}
                  type="range"
                  min="0"
                  max="360"
                  defaultValue={hue ?? 0}
                  step="0.01"
                />
              </VStack>
            </Popover.Description>
          </Stack>
          <Box position="absolute" top="1" right="1">
            <Popover.CloseTrigger
              asChild
              className={popoverCss.closeTrigger}
              onClick={() => {
                // console.log('close....')
                onClose?.()
              }}
            >
              <InlineTextButton aria-label="Close Popover" variant="ghost" size="sm">
                X
              </InlineTextButton>
            </Popover.CloseTrigger>
          </Box>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  )
}

type ColorCellProps = {
  colorConfig: ColorConfig
  level?: ColorLevel | ColorLevelAlias
  onHueChange?: (newHue: number, level: string, color: ColorConfig, isDarkMode: boolean) => void
}
function ColorCell({ level, colorConfig, onHueChange }: ColorCellProps) {
  const [copiedText, copyToClipboard] = useCopyToClipboard()
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const { isDarkMode } = useDarkMode()

  const isBgFg = ['bg', 'fg'].includes(colorConfig.type)
  const colorName = colorConfig.name
  const defaultLevel = colorConfig.type === 'bg' || colorConfig.type === 'fg' ? '100' : '600'
  const levelValue = level ?? defaultLevel
  const levelAlias =
    (isBgFg ? bfgColorLevelToAlias[levelValue as ColorLevelBfg] : colorLevelToAlias[levelValue as ColorLevel]) ??
    levelValue
  const firstAlias = colorConfig.aliases.length > 0 ? colorConfig.aliases[0] : colorName
  const token = level ? `${firstAlias}.${levelAlias}` : colorName
  const colorPreviewCssVars = {
    '--bg': colorConfig.light[levelValue]?.srgb,
    '--bg-p3': colorConfig.light[levelValue]?.oklch ?? colorConfig.light[levelValue]?.srgb,
    '--bg-dark': colorConfig.dark[levelValue]?.srgb,
    '--bg-dark-p3': colorConfig.dark[levelValue]?.oklch ?? colorConfig.dark[levelValue]?.srgb,
  }
  const showCopiedText = copied && copiedText === token

  const handleBtnClick = (text: string) => () => {
    setIsEditorOpen(!isEditorOpen)
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

  const lightColorObj = parseColor(
    colorConfig.light[levelValue]?.oklch ?? colorConfig.light[levelValue]?.srgb ?? 'transparent',
  )

  if (!lightColorObj) {
    console.error('lightColorObj is undefined', { colorConfig })
    throw new Error('lightColorObj is undefined')
  }

  const darkColorObj = parseColor(
    colorConfig.dark[levelValue]?.oklch ?? colorConfig.dark[levelValue]?.srgb ?? 'transparent',
  )

  if (!darkColorObj) {
    console.error('darkColorObj is undefined', { colorConfig })
    throw new Error('darkColorObj is undefined')
  }

  const currentHue = isDarkMode ? darkColorObj.h : lightColorObj.h

  return (
    <ColorEditor
      hue={currentHue ?? 0}
      isOpen={isEditorOpen && defaultLevel === level}
      onClose={() => setIsEditorOpen(false)}
      onHueChange={(hue) => {
        if (!onHueChange) {
          return
        }

        onHueChange?.(hue, levelValue, colorConfig, isDarkMode)
      }}
    >
      <button
        type="button"
        data-level={level}
        data-is-default={defaultLevel === level ? true : undefined}
        className={classNames}
        onClick={handleBtnClick(token)}
        style={colorPreviewCssVars as React.CSSProperties}
        data-color-light={colorPreviewCssVars['--bg']}
        data-color-light-p3={colorPreviewCssVars['--bg-p3']}
        data-color-dark={colorPreviewCssVars['--bg-dark']}
        data-color-dark-p3={colorPreviewCssVars['--bg-dark-p3']}
      >
        {showCopiedText === false && <span>{levelAlias}</span>}
        {showCopiedText && <span data-copied>Copied!</span>}
      </button>
    </ColorEditor>
  )
}

export default function ColorScaleViewer({ colorConfig, onHueChange, withLegend }: ColorScaleViewerProps) {
  const aliasesLegend = withLegend ? (
    <div className={cn(gridCss, 'legend', monoFontClass)}>
      <div />
      {colorLevels.map((level) => (
        <div className="label" key={level} data-level={level}>
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
          <ColorCell onHueChange={onHueChange} key={level} colorConfig={colorConfig} level={level} />
        ))}
      </div>
    </>
  )
}
