'use client'

import { monoFontClass } from '@/app/fonts'
import { generatePandaPreset } from '@/lib/editor/codegen'
import { css } from '@/styled-system/css'
import { outdent } from 'outdent'
import { useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import { PrimaryButtonSm } from '../ui/button'

export default function PandaPresetRenderer() {
  const [_, copyToClipboard] = useCopyToClipboard()
  const [copied, setCopied] = useState(false)

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

  // TODO: pass colors from global state
  const configSubset = generatePandaPreset('', '', {})

  const jsCode = outdent`
    import { definePreset } from "@pandacss/dev";

    export const colorSystemPreset = definePreset(
      ${JSON.stringify(configSubset, null, 2)}
    );
  `

  return (
    <>
      <PrimaryButtonSm onClick={handleCopy(jsCode)}>{copied ? 'Copied!' : 'Copy to clipboard'}</PrimaryButtonSm>
      <div
        className={css({
          maxHeight: '500px',
          overflowY: 'auto',
        })}
      >
        <pre className={monoFontClass}>{jsCode}</pre>
      </div>
    </>
  )
}
