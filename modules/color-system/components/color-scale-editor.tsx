'use client'

import { PrimaryButton } from '@/modules/design-system/components/button'
import useDarkMode from '@/modules/design-system/hooks/use-darkmode'
import { css } from '@/styled-system/css'
import { useState } from 'react'
import type { ColorActionPayload, ColorCssStrings, ColorLevelKey, ColorScaleConfig, ColorScheme } from '../types'
import ColorScaleCreator from './color-scale-creator'
import ColorScaleGrid from './color-scale-grid'
import ColorScaleLevelEditor from './color-scale-level-editor'

type ColorScaleEditorProps = {
  fg: ColorCssStrings
  config: ColorScaleConfig
  onChange?: (color: ColorActionPayload) => void
  onDelete?: (color: ColorActionPayload) => void
  currentColorNames: string[]
  initialColor?: ColorActionPayload
  editMode?: boolean
  editor?: React.ReactNode
}

export default function ColorScaleEditor({
  fg,
  onDelete,
  currentColorNames,
  initialColor,
  config,
  onChange,
}: ColorScaleEditorProps) {
  const { isDarkMode } = useDarkMode()
  const [editMode, setEditMode] = useState(false)

  const colorTitle =
    config.group === 'accent' ? (
      <PrimaryButton
        colorPalette="primary"
        variant="ghost"
        className={css({
          color: 'inherit',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          cursor: 'pointer',
          px: '0!',
          py: '0!',
          h: 'auto!',
          bg: 'none',
          textAlign: 'left',
          justifyContent: 'flex-start',
        })}
        onClick={() => setEditMode(true)}
      >
        {config.name}
      </PrimaryButton>
    ) : (
      config.name
    )
  // const title = config.aliases.length > 0 ? config.aliases[0] : config.name
  const scheme: ColorScheme = isDarkMode ? 'dark' : 'light'
  const scaleLevels = Object.keys(config.scale) as ColorLevelKey[]

  return (
    <>
      <ColorScaleGrid title={colorTitle}>
        {scaleLevels.map((level) => (
          <ColorScaleLevelEditor
            fg={fg[level]}
            key={level}
            onChange={onChange}
            config={config}
            level={level}
            scheme={scheme}
          />
        ))}
      </ColorScaleGrid>
      {editMode && (
        <ColorScaleCreator
          currentColorNames={currentColorNames}
          deletable
          initialColor={initialColor}
          colorpickerSliders={['l', 'c', 'h', 'alpha']}
          onDelete={(color) => {
            onDelete?.(color)
            setEditMode(false)
          }}
          onCancel={() => {
            setEditMode(false)
          }}
          onSave={(color) => {
            onChange?.(color)
            setEditMode(false)
          }}
        />
      )}
    </>
  )
}
