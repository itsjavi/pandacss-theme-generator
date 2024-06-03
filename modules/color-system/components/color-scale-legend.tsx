import { PandaDiv } from '@/modules/design-system/components/panda'
import ColorScaleGrid from './color-scale-grid'

export default function ColorScaleLegend({ levels }: { levels: Readonly<string[]> }) {
  return (
    <ColorScaleGrid title={<span />}>
      {levels.map((level) => (
        <PandaDiv
          key={level}
          // className={monoFontClass}
          data-level={level}
          css={{
            display: 'flex',
            alignItems: 'center',
            px: '2',
            py: '4',
            // borderWidth: '1px',
            // borderColor: 'gray.fg1',
            borderRadius: 'sm',
            fontSize: 'sm',
            textAlign: 'center',
            justifyContent: 'center',
            height: '3rem',
            '& span': {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              inset: '0',
              padding: '1',
              // background: 'alpha.dark.600',
              _dark: {
                // background: 'alpha.light.600',
              },
              color: 'contrast.100',
              fontSize: 'sm',
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        >
          <span>{level}</span>
        </PandaDiv>
      ))}
    </ColorScaleGrid>
  )
}
