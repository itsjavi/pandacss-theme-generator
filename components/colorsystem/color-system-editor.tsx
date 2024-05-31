'use client'

import ColorScaleViewer from '@/components/colorsystem/color-scale-viewer'
import { generateColorSystemPresetCode } from '@/lib/colorsystem/generate-panda-preset'
import modifyPaletteHue from '@/lib/colorsystem/modify-palette-hue'
import { useAppState } from '@/lib/colorsystem/state'

export default function ColorSystemEditor() {
  const [appState, setAppState] = useAppState()

  return (
    <>
      {Object.entries(appState.colorSystemConfig).map(([name, colorConfig], i) => {
        if (colorConfig.name === 'blue') {
          // console.log(colorConfig.modifiedAt)
        }
        return (
          <ColorScaleViewer
            onHueChange={(newHue, level, cfg, isDarkMode) => {
              // console.log({ newHue })
              const newColorSystemConfig = {
                ...appState.colorSystemConfig,
                [name]: modifyPaletteHue(newHue, colorConfig),
              }
              setAppState({
                ...appState,
                colorSystemConfig: newColorSystemConfig,
                colorSystemPresetCode: generateColorSystemPresetCode(newColorSystemConfig),
              })
            }}
            withLegend={i === 0}
            key={name}
            colorConfig={colorConfig}
          />
        )
      })}
    </>
  )
}
