'use client'

import { PrimaryButtonSm } from '@/modules/design-system/components/button'
import { Input } from '@/modules/design-system/components/input'
import type { OklchEditorSlider } from '@/modules/design-system/components/oklch-editor'
import OklchEditorPopover from '@/modules/design-system/components/oklch-editor-popover'
import { PandaButton, PandaDiv } from '@/modules/design-system/components/panda'
import Heading from '@/modules/design-system/components/typography/heading'
import { css } from '@/styled-system/css'
import { type Color, formatCss } from 'culori'
import { PlusIcon, TrashIcon } from 'lucide-react'
import { useState } from 'react'
import type { ColorScalePayload, SemanticColorScale } from '../client-state-v3'
import { formatColorAsOklch, safeParseColor } from '../lib/color-manipulation'
import { safeNearestColorNames } from '../lib/nearest-color-names'
import type { ColorScheme, OklchColor } from '../types'

type ColorScaleColorEditorProps = {
  autosave?: boolean
  deletable?: boolean
  scale?: SemanticColorScale
  restrictedNames: string[]
  colorScheme: ColorScheme
  sliders?: OklchEditorSlider[]
  onDelete?: () => void
  onSave?: (color: ColorScalePayload) => void
  onCancel?: () => void
}

function _parseColor(color: string, fallback: OklchColor): OklchColor {
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

export default function ColorScaleColorEditor({
  restrictedNames,
  autosave,
  deletable,
  scale,
  sliders = ['l', 'c', 'h', 'alpha'],
  colorScheme,
  onDelete,
  onSave,
  onCancel,
}: ColorScaleColorEditorProps) {
  const isNew = !deletable
  const baseColor = scale?.colors[scale.baseColorIndex]
  const defaultState: ColorScalePayload = {
    id: 'new',
    name: 'green',
    group: 'accent',
    baseColor: {
      scheme: colorScheme,
      value: {
        l: 0.7227,
        c: 0.192,
        h: 149.58,
        alpha: 1,
        mode: 'oklch',
      },
      formattedValue: 'oklch(72.27% 0.192 149.58)',
    },
  }

  const [editMode, setEditMode] = useState(deletable === true)
  const [pickerOpen, setPickerOpen] = useState(false)
  const [color, setColor] = useState<ColorScalePayload>(
    baseColor
      ? {
          id: scale.id,
          name: scale.name,
          group: scale.group,
          baseColor: {
            scheme: colorScheme,
            value: baseColor.value[colorScheme],
            formattedValue: formatColorAsOklch(baseColor.value[colorScheme]),
          },
        }
      : defaultState,
  )

  function handleDelete() {
    if (onDelete) {
      onDelete()
    }

    setEditMode(false)
  }

  function handleSave() {
    onSave?.(color)

    setEditMode(false)

    if (isNew) {
      setColor(defaultState)
    }
  }

  function handleCancel() {
    if (onCancel) {
      onCancel()
    }

    setEditMode(false)

    if (isNew) {
      setColor(defaultState)
    }
  }

  function handleColorUpdate(newColor: OklchColor) {
    const cssValue = formatCss(newColor)
    const payload = {
      ...color,
      name: isNew ? _uniqueNearestColorName(cssValue, color.name, restrictedNames) : color.name,
      baseColor: {
        ...color.baseColor,
        value: newColor,
        formattedValue: cssValue,
      },
    }
    setColor(payload)
    if (autosave) {
      onSave?.(payload)
    }
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
          {isNew ? color.name || '(new)' : ''}
        </Heading>
        <PandaDiv display="flex" flexDirection="row" gap="4" alignItems="center">
          <Input
            placeholder="Color name"
            value={color.name || undefined}
            onChange={(e) => setColor({ ...color, name: _uniqueColorName(e.target.value, restrictedNames) })}
          />
          {/* <Input

            placeholder="Color alias"
            value={color.alias}
            onChange={(e) => setColor({ ...color, alias: e.target.value })}
          /> */}
          <Input
            placeholder="Base color value"
            value={color.baseColor.formattedValue}
            onChange={(e) =>
              setColor({
                ...color,
                name: isNew ? _uniqueNearestColorName(e.target.value, color.name, restrictedNames) : color.name,
                baseColor: {
                  ...color.baseColor,
                  value: _parseColor(e.target.value, color.baseColor.value),
                  formattedValue: e.target.value,
                },
              })
            }
          />
          <OklchEditorPopover
            isOpen={pickerOpen}
            close={() => setPickerOpen(false)}
            color={{
              ...color.baseColor.value,
            }}
            sliders={sliders}
            preview
            onColorUpdate={handleColorUpdate}
            onChange={handleColorUpdate}
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
                background: color.baseColor.formattedValue,
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
