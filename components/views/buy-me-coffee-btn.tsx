import { css } from '@/styled-system/css'
import { CoffeeIcon } from 'lucide-react'
import { PrimaryButton } from '../ui/button'

const styles = {
  base: css({
    colorPalette: 'slate',
    color: 'colorPalette.fg',
    display: 'flex',
    flexDirection: 'column',
    gap: '2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '16',
  }),
  prose: css({
    '& a': {
      fontWeight: 'bold',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }),
  btn: css({
    color: 'colorPalette.12',
  }),
}

export default function BuyMeCoffeeBtn() {
  return (
    <footer className={styles.base}>
      <span className={styles.prose}>
        A project by <a href="https://itsjavi.com">Javier Aguilar</a>
      </span>
      <PrimaryButton className={styles.btn} asChild variant="outline">
        <a href="https://github.com/sponsors/itsjavi" target="_blank" rel="noopener noreferrer">
          <CoffeeIcon size="24" />
          Buy me a coffee
        </a>
      </PrimaryButton>
    </footer>
  )
}
