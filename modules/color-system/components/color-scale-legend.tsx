import { PandaDiv } from '@/modules/design-system/components/panda'

export default function ColorScaleLegend({ levels }: { levels: Readonly<string[]> }) {
  return (
    <PandaDiv
      css={{
        display: 'grid',
        gridTemplateColumns: 'minmax(120px, 1fr) repeat(10, minmax(50px, 1fr))',
        gap: '2',
        // maxWidth: '900px',
        '& .label': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: '2',
          py: '2',
        },
        '& .subtitle': {
          fontWeight: 'normal',
          color: 'fg.muted',
        },
        '& .label:not(:first-child)': {
          justifyContent: 'center',
        },
        '&.legend': {
          fontSize: 'xxs',
          textAlign: 'center',
        },
      }}
    >
      <span />
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
    </PandaDiv>
  )
}
