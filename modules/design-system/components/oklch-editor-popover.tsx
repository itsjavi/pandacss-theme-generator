'use client'

import OklchEditor, { type OklchEditorProps } from './oklch-editor'
import Popover from './popover'

type OklchEditorPopoverProps = {
  title?: React.ReactNode
  isOpen: boolean
  close: () => void
  onChange?: (color: OklchEditorProps['color'], cssValue: string) => void
  children: React.ReactNode
} & Omit<OklchEditorProps, 'onApply'>

export default function OklchEditorPopover({
  isOpen,
  close,
  onChange,
  children,
  title = 'Color Editor',
  sliders = ['l', 'c', 'h', 'alpha'],
  preview = true,
  onCancel,
  color,
}: OklchEditorPopoverProps) {
  return (
    <Popover isOpen={isOpen} onClose={close} title={title} trigger={children}>
      <OklchEditor
        sliders={sliders}
        preview={preview}
        color={color}
        onApply={(newValue, formattedColor) => {
          onChange?.(newValue, formattedColor)
          close()
        }}
        onCancel={(newValue, formattedColor) => {
          close()
          onCancel?.(newValue, formattedColor)
        }}
      />
    </Popover>
  )
}
