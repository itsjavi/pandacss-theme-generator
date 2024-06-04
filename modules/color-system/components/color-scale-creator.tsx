'use client'

import { PrimaryButtonSm } from '@/modules/design-system/components/button'
import { Input } from '@/modules/design-system/components/input'
import type { OklchEditorSlider } from '@/modules/design-system/components/oklch-editor'
import OklchEditorPopover from '@/modules/design-system/components/oklch-editor-popover'
import { PandaButton, PandaDiv } from '@/modules/design-system/components/panda'
import Heading from '@/modules/design-system/components/typography/heading'
import { css } from '@/styled-system/css'
import type { Color } from 'culori'
import { PlusIcon, TrashIcon } from 'lucide-react'
import { useState } from 'react'
import { safeParseColor } from '../lib/color-manipulation'
import { safeNearestColorNames } from '../lib/nearest-color-names'
import type { ColorActionPayload } from '../types'

type ColorScaleCreatorProps = {
  currentColorNames: string[]
  deletable?: boolean
  initialColor?: ColorActionPayload
  onDelete?: (color: ColorActionPayload) => void
  onSave?: (color: ColorActionPayload) => void
  onCancel?: () => void
  colorpickerSliders?: OklchEditorSlider[]
}

function _parseColor(color: string, fallback: ColorActionPayload['value']): ColorActionPayload['value'] {
  if (!color) {
    return fallback
  }
  const parsed = safeParseColor(color)
  return parsed ?? fallback
}

function _nearestColorName(value: string | Color | undefined | null, fallback?: string): string {
  if (!value) {
    return fallback ?? ''
  }
  return safeNearestColorNames(value, 1)[0] ?? fallback ?? ''
}

function _uniqueColorName(value: string, currentColorNames: string[]): string {
  if (currentColorNames.includes(value)) {
    return `${value}2`
  }

  return value
}

function _uniqueNearestColorName(
  value: string | Color,
  fallback: string | undefined,
  currentColorNames: string[],
): string {
  return _uniqueColorName(_nearestColorName(value, fallback), currentColorNames)
}

export default function ColorScaleCreator({
  currentColorNames,
  deletable,
  initialColor,
  colorpickerSliders = ['l', 'c', 'h', 'alpha'],
  onDelete,
  onSave,
  onCancel,
}: ColorScaleCreatorProps) {
  const [editMode, setEditMode] = useState(deletable === true)
  const [pickerOpen, setPickerOpen] = useState(false)
  const [color, setColor] = useState<ColorActionPayload>(
    initialColor ?? {
      name: 'black',
      newName: 'black',
      alias: 'bg',
      valueCss: '#000',
      value: {
        l: 0,
        c: 0,
        h: 0,
        alpha: 1,
        mode: 'oklch',
      },
      level: '700',
      scheme: 'dark',
    },
  )

  function handleDelete() {
    if (onDelete) {
      onDelete(color)
    }

    setEditMode(false)
  }

  function handleSave() {
    if (onSave) {
      onSave(color)
    }

    setEditMode(false)
  }

  function handleCancel() {
    if (onCancel) {
      onCancel()
    }

    setEditMode(false)
  }

  if (editMode) {
    return (
      <PandaDiv display="grid" gap="2" gridTemplateColumns="120px 1fr">
        <Heading
          className={css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: '2',
            py: '2',
          })}
          size="xs"
          as="div"
        >
          {deletable ? '' : color.newName || '(new)'}
        </Heading>
        <PandaDiv display="flex" flexDirection="row" gap="4" alignItems="center">
          <Input
            placeholder="Color name"
            value={color.newName ?? color.name}
            onChange={(e) => setColor({ ...color, newName: _uniqueColorName(e.target.value, currentColorNames) })}
          />
          {/* <Input

            placeholder="Color alias"
            value={color.alias}
            onChange={(e) => setColor({ ...color, alias: e.target.value })}
          /> */}
          <Input
            placeholder="Base color value"
            value={color.valueCss}
            onChange={(e) =>
              setColor({
                ...color,
                newName: color.newName ?? _uniqueNearestColorName(e.target.value, color.newName, currentColorNames),
                value: _parseColor(e.target.value, color.value),
                valueCss: e.target.value,
              })
            }
          />
          <OklchEditorPopover
            isOpen={pickerOpen}
            close={() => setPickerOpen(false)}
            color={{
              ...color.value,
            }}
            sliders={colorpickerSliders}
            preview
            onChange={(newColor, cssValue) => {
              setColor({
                ...color,
                newName: color.newName ?? _uniqueNearestColorName(cssValue, color.newName, currentColorNames),
                value: newColor,
                valueCss: cssValue,
              })
            }}
          >
            <PandaButton
              type="button"
              aspectRatio="1"
              borderColor="alpha.400"
              borderWidth="1.5px"
              width="9"
              minWidth="9"
              borderRadius="sm"
              cursor="pointer"
              style={{
                background: color.valueCss,
              }}
              onClick={() => setPickerOpen(true)}
            />
          </OklchEditorPopover>
          {deletable && (
            <PrimaryButtonSm colorPalette="danger" variant="outline" onClick={handleDelete}>
              <TrashIcon /> Delete
            </PrimaryButtonSm>
          )}
          <PrimaryButtonSm colorPalette="gray" variant="outline" onClick={handleCancel}>
            Cancel
          </PrimaryButtonSm>
          <PrimaryButtonSm onClick={handleSave}>Save</PrimaryButtonSm>
        </PandaDiv>
      </PandaDiv>
    )
  }

  return (
    <PandaDiv>
      <PrimaryButtonSm
        variant="outline"
        onClick={() => {
          setEditMode(true)
        }}
      >
        <PlusIcon /> Add
      </PrimaryButtonSm>
    </PandaDiv>
  )
}
