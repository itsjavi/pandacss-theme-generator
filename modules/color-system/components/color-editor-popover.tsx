'use client'

import OklchEditor from '@/modules/design-system/components/oklch-editor'
import Popover from '@/modules/design-system/components/popover'
import type { ColorActionPayload } from '../types'

type ColorScaleEditorProps = {
  title?: React.ReactNode
  isOpen: boolean
  color: ColorActionPayload
  close: () => void
  onChange?: (color: ColorActionPayload) => void
  children: React.ReactNode
}

export default function ColorEditorPopover({
  color,
  title = 'Color Editor',
  isOpen,
  close,
  onChange,
  children,
}: ColorScaleEditorProps) {
  if (['background', 'contrast', 'gray', 'alpha'].includes(color.name)) {
    return children
  }

  return (
    <Popover isOpen={isOpen} onClose={close} title={title} trigger={children}>
      <OklchEditor
        // sliders={['l', 'c', 'h', 'alpha']}
        sliders={['h']}
        preview
        color={color.value}
        onApply={(newValue, formattedColor) => {
          const editedColor = {
            ...color,
            value: newValue,
            valueCss: formattedColor,
          }
          // console.log({ editedColor })
          onChange?.(editedColor)
          close()
        }}
        onCancel={() => {
          close()
        }}
      />
    </Popover>
  )
}
