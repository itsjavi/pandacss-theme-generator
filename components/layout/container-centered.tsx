import { css } from '@/styled-system/css'

export default function ContainerCentered({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: '1',
        gap: '6',
        padding: '6',
      })}
    >
      {children}
    </div>
  )
}
