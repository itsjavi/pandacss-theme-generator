'use client'

import { monoFontClass } from '@/app/fonts'
import { useAppState } from '@/lib/colorsystem/state'
import { css } from '@/styled-system/css'
import { useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import { PrimaryButtonSm } from '../ui/button'

export default function PandaPresetRenderer() {
  const [_, copyToClipboard] = useCopyToClipboard()
  const [copied, setCopied] = useState(false)
  const [appState] = useAppState()

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
      <PrimaryButtonSm onClick={handleCopy(appState.colorSystemPresetCode)}>
        {copied ? 'Copied!' : 'Copy to clipboard'}
      </PrimaryButtonSm>
      <div
        className={css({
          maxHeight: '500px',
          overflowY: 'auto',
        })}
      >
        <pre className={monoFontClass}>{appState.colorSystemPresetCode}</pre>
      </div>
    </>
  )
}
