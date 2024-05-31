import presetConfig from '@/panda.preset'
import type { Preset } from '@pandacss/types'
import outdent from 'outdent'

export const generatePandaConfig = (
  config?: string,
  extraCode?: string,
  imports = 'import { defineConfig } from "@pandacss/dev";',
) => {
  const conf = `${imports ?? ''}${extraCode ? `\n\n${extraCode}` : ''}

export const config = defineConfig({
  ${config ?? ''}${config?.endsWith(',') ? '' : ','}
  globalCss: {
    html: {
      h: 'full',
    },
    body: {
      bg: { base: 'white', _dark: '#2C2C2C' },
    },
  },
  jsxFramework: 'react',
  validation: 'error',
});`

  return conf
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const generateTokensCssOverride = (tokens: Record<string, any>): string => {
  let css = ''
  for (const key in tokens) {
    if (Object.prototype.hasOwnProperty.call(tokens, key)) {
      const value = tokens[key]
      css += `--${key}: ${value};\n`
    }
  }
  return outdent`@layer tokens {
    :where(:root, :host) {
      ${css}
    }
  }`
}

export const generatePandaPreset = (
  _bgColor: string,
  _grayColor: string,
  _accentColors: Record<
    string,
    {
      base: string
      aliases?: string[]
    }
  >,
): Preset => {
  const configSubset = {
    conditions: {
      extend: {
        colorGamutP3: '@media (color-gamut:p3)',
        supportsP3: '@supports (color: oklch(0 0 0))',
      },
    },
    theme: {
      // TODO: implement similarly to panda.preset-colors.ts
      extend: {
        tokens: {
          colors: presetConfig.theme?.extend?.tokens?.colors,
        },
        semanticTokens: {
          colors: presetConfig.theme?.extend?.semanticTokens?.colors,
        },
      },
    },
  }

  return configSubset
}
