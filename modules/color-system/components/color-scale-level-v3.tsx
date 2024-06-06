'use client'

import { PandaButton } from '@/modules/design-system/components/panda'
import { monoFontClass } from '@/modules/design-system/lib/fonts'
import { useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import type { SemanticColor } from '../client-state-v3'
import { formatColorConfigValue } from '../lib/color-manipulation'
import type { ColorActionPayload } from '../types'

type ColorScaleLevelEditorProps = {
  color: SemanticColor
  colorName: string
  onChange?: (color: ColorActionPayload) => void
}

export default function ColorScaleLevelEditor({ colorName, color }: ColorScaleLevelEditorProps) {
  const [copiedText, copyToClipboard] = useCopyToClipboard()
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const levelAlias = color.alias || color.level
  const token = `${colorName}.${levelAlias}`

  const showCopiedText = copied && copiedText === token
  const colorStrings = formatColorConfigValue({
    light: color.value.light,
    dark: color.value.dark,
    aliases: [],
  })

  const colorPreviewCssVars = {
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

  return (
    <PandaButton
      type="button"
      className={monoFontClass}
      style={colorPreviewCssVars as React.CSSProperties}
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
        height: '3rem',
        '--bgch': 'repeating-conic-gradient(#99999955 0% 25%, transparent 0% 50%)',
        // color: 'gray.fg2',
        bgImage: 'linear-gradient(var(--bg), var(--bg)), var(--bgch)',
        _dark: {
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
          // color: 'muted.100',
          fontSize: 'xs',
          textAlign: 'center',
          lineHeight: '1',
          zIndex: 'z1',
          opacity: 0,
          userSelect: 'none',
          cursor: 'pointer',
          transition: 'opacity 0.15s ease-in-out',
          fontWeight: 'normal',
          color: '#fff',
          mixBlendMode: 'difference',
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
  )
}
