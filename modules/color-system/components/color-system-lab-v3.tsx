'use client'

import { PrimaryButtonSm } from '@/modules/design-system/components/button'
import { PandaDiv } from '@/modules/design-system/components/panda'
import useDarkMode from '@/modules/design-system/hooks/use-darkmode'
import { useColorSystem, type ColorScalePayload } from '../client-state-v3'
import { colorLevelAliases, colorLevels } from '../constants'
import ColorScaleColorEditor from './color-scale-color-editor-v3'
import ColorScaleEditor from './color-scale-editor-v3'
import ColorScaleLegend from './color-scale-legend'

export default function ColorSystemLabV3() {
  const isDarkMode = useDarkMode()
  const [state, dispatch] = useColorSystem()

  function handleChange(color: ColorScalePayload) {
    dispatch({ type: 'update_color_scale', payload: color })
  }

  function handleAddColor(color: ColorScalePayload) {
    dispatch({ type: 'add_color_scale', payload: color })
  }

  function handleDeleteColor(colorId: string) {
    dispatch({ type: 'remove_color_scale', payload: colorId })
  }

  const colorNames = state.palette.flatMap((colorConfig) => [colorConfig.name])
  const colorScheme = isDarkMode ? 'dark' : 'light'

  return (
    <PandaDiv display="flex" gap="4" flexDir="column" maxW="920px" marginX="auto">
      <ColorScaleLegend levels={colorLevels} />
      {state.palette.map((colorConfig) => {
        return (
          <ColorScaleEditor
            key={colorConfig.name}
            restrictedNames={colorNames}
            scale={colorConfig}
            onChange={handleChange}
            onDelete={() => handleDeleteColor(colorConfig.id)}
          />
        )
      })}
      <ColorScaleColorEditor colorScheme={colorScheme} restrictedNames={colorNames} onSave={handleAddColor} />
      <div>
        <PrimaryButtonSm variant="subtle" onClick={() => dispatch({ type: 'reset_palette' })}>
          Reset Palette
        </PrimaryButtonSm>
      </div>
      <ColorScaleLegend levels={colorLevelAliases} />
    </PandaDiv>
  )
}
