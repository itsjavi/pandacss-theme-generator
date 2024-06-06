'use client'

import { PrimaryButton } from '@/modules/design-system/components/button'
import useDarkMode from '@/modules/design-system/hooks/use-darkmode'
import { css } from '@/styled-system/css'
import { useState } from 'react'
import type { ColorScalePayload, SemanticColorScale } from '../client-state-v3'
import type { ColorScheme } from '../types'
import ColorScaleColorEditor from './color-scale-color-editor-v3'
import ColorScaleGrid from './color-scale-grid'
import ColorScaleLevel from './color-scale-level-v3'

type ColorScaleEditorProps = {
  scale: SemanticColorScale
  onChange?: (color: ColorScalePayload) => void
  onDelete?: () => void
  restrictedNames: string[]
}

export default function ColorScaleEditor({ scale, restrictedNames, onChange, onDelete }: ColorScaleEditorProps) {
  const { isDarkMode } = useDarkMode()
  const [editMode, setEditMode] = useState(false)

  const colorTitle = (
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
      {scale.name}
    </PrimaryButton>
  )

  const scheme: ColorScheme = isDarkMode ? 'dark' : 'light'
  const excludedNames = restrictedNames.filter((name) => scale.name !== name)

  return (
    <>
      <ColorScaleGrid title={colorTitle}>
        {scale.colors.map((color) => (
          <ColorScaleLevel key={`${scale.id}_${color.level}`} color={color} colorName={scale.name} />
        ))}
      </ColorScaleGrid>
      {editMode && (
        <ColorScaleColorEditor
          // initialColor={scale.colors[scale.baseColorIndex]}
          deletable
          autosave
          restrictedNames={excludedNames}
          colorScheme={scheme}
          scale={scale}
          sliders={['l', 'c', 'h', 'alpha']}
          onDelete={() => {
            onDelete?.()
            setEditMode(false)
          }}
          onCancel={() => {
            setEditMode(false)
          }}
          onSave={(color) => {
            onChange?.(color)
            // setEditMode(false)
          }}
        />
      )}
    </>
  )
}
