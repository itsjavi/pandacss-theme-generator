'use client'

import { css } from '@/styled-system/css'
import { monoFontClass } from '@/ui/lib/fonts'
import { useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import { PrimaryButtonSm } from '../../../design-system/components/button'
import { generateColorSystemPresetCode } from '../../lib/generate-panda-preset2'
import { useColorSystem } from '../../state2'

export default function PandaPresetRenderer({ buttonClassName }: { buttonClassName?: string }) {
  const [_, copyToClipboard] = useCopyToClipboard()
  const [copied, setCopied] = useState(false)
  const [colorSystem] = useColorSystem()
  const presetCode = generateColorSystemPresetCode(colorSystem)

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

  return (
    <>
      <PrimaryButtonSm className={buttonClassName} onClick={handleCopy(presetCode)}>
        {copied ? 'Copied!' : 'Copy Panda preset'}
      </PrimaryButtonSm>
      <div
        className={css({
          maxHeight: '500px',
          overflowY: 'auto',
        })}
      >
        <pre className={monoFontClass}>{presetCode}</pre>
      </div>
    </>
  )
}
