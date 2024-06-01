'use client'

import { PandaButton, PandaDiv } from '@/modules/design-system/components/panda'
import { monoFontClass } from '@/modules/design-system/lib/fonts'
import { useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import { formatColorConfigValue, parseColor } from '../lib/color-manipulation'
import type { ColorActionPayload, ColorConfig, ColorLevelCssStrings, ColorLevelKey, ColorScheme } from '../types'
import ColorEditorPopover from './color-editor-popover'

type ColorScaleLevelEditorProps = {
  level: ColorLevelKey
  scheme: ColorScheme
  fg: ColorLevelCssStrings
  config: ColorConfig
  onChange?: (color: ColorActionPayload) => void
}

export default function ColorScaleLevelEditor({ config, level, fg, scheme, onChange }: ColorScaleLevelEditorProps) {
  const [copiedText, copyToClipboard] = useCopyToClipboard()
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const levelValue = config.scale[level]

  if (!levelValue) {
    throw new Error(`Level ${level} not found in config.scale for color ${config.name}`)
  }

  const colorAlias = config.name
  // const colorAlias = config.aliases.length > 0 ? config.aliases[0] : config.name
  const levelAlias = levelValue.aliases.length > 0 ? levelValue.aliases[0] : level
  const token = `${colorAlias}.${levelAlias}`

  const showCopiedText = copied && copiedText === token
  const colorStrings = formatColorConfigValue(levelValue)

  const colorPreviewCssVars = {
    '--fg': fg.light.srgb,
    '--fg-dark': fg.dark.srgb,
    '--bg': colorStrings.light.srgb,
    '--bg-p3': colorStrings.light.oklch,
    '--bg-dark': colorStrings.dark.srgb,
    '--bg-dark-p3': colorStrings.dark.oklch,
  }

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

  const okColor = parseColor(levelValue[scheme])

  const editorColor: ColorActionPayload = {
    name: config.name,
    level: level,
    scheme,
    value: okColor,
    valueCss: '',
  }

  const levelToken = `${colorAlias}.${level}`

  const popoverTitle = (
    <PandaDiv fontWeight="bold" display="flex" flexDir="column">
      <PandaDiv fontSize="xl">{token}</PandaDiv>
      {levelToken !== token && (
        <PandaDiv fontSize="md" color="gray.fg1">
          {levelToken}
        </PandaDiv>
      )}
    </PandaDiv>
  )

  return (
    <ColorEditorPopover
      isOpen={isEditorOpen}
      color={editorColor}
      onChange={onChange}
      close={() => setIsEditorOpen(false)}
      title={popoverTitle}
    >
      <PandaButton
        type="button"
        className={monoFontClass}
        style={colorPreviewCssVars as React.CSSProperties}
        data-level={level}
        data-is-default={config.defaultLevel === level ? true : undefined}
        onClick={handleBtnClick(token)}
        css={{
          display: 'flex',
          alignItems: 'center',
          px: '2',
          py: '4',
          boxShadow: 'borderInset',
          borderRadius: 'sm',
          fontSize: 'sm',
          textAlign: 'center',
          justifyContent: 'center',
          aspectRatio: '4/3',
          '--bgch': 'repeating-conic-gradient(#99999955 0% 25%, transparent 0% 50%)',
          // color: 'gray.fg2',
          bgImage: 'linear-gradient(var(--bg), var(--bg)), var(--bgch)',
          color: 'var(--fg)',
          _dark: {
            color: 'var(--fg-dark)',
            bgImage: 'linear-gradient(var(--bg-dark), var(--bg-dark)), var(--bgch)',
          },
          _mediaP3: {
            _supportsOklch: {
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
            // background: 'alpha.dark.600',
            _dark: {
              // background: 'alpha.light.600',
            },
            // color: 'fg.100',
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
        }}
      >
        {showCopiedText === false && <span>{levelAlias}</span>}
        {showCopiedText && <span data-copied>Copied!</span>}
      </PandaButton>
    </ColorEditorPopover>
  )
}
