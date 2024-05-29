'use client'

import { css } from '@/styled-system/css'
import { HStack } from '@/styled-system/jsx'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'
import { PrimaryButtonSm } from '../ui/button'
import { ActionInput } from '../ui/input'
import DarkModeToggle from '../views/dark-mode-toggle'

const className = css({
  // position: 'sticky',
  //---
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'space-between',
  gap: '4',
  paddingX: '4',
  paddingY: '2',
  //----
  // top: '-2px',
  zIndex: 'sticky',
  fontSize: 'sm',
  colorPalette: 'blue',
  // bgColor: 'colorPalette.2',
  transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  transitionProperty: 'background-color, box-shadow, padding',
  '&.pinned': {
    // transform: 'translateY(1px)',
    paddingTop: '4',
    boxShadow: 'xs',
    bgColor: 'colorPalette.3/90',
    backdropFilter: 'blur(4px)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'colorPalette.6/50',
  },
  _light: {
    '&.pinned': {
      bgColor: 'colorPalette.2/50',
    },
  },
  // borderBottom: '1px solid var(--colors-color-palette-5)',
  // borderBottomColor: 'colorPalette.5',
  // paddingBottom: 'var(--sizes-header-deco-height)',
  '&::after': {
    content: '""',
    position: 'absolute',
    display: 'none',
    top: 0,
    left: 0,
    right: 0,
    height: 'headerDecoHeight',
    zIndex: 'z1',
    background: 'url(/images/patterns/crystals-border.png) top center',
    backgroundSize: '1000px calc(var(--sizes-header-deco-height) + 2px)',
    backgroundRepeat: 'repeat-x',
  },
})

const innerClassName = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '12',
})

const topSearch = css({
  flex: 1,
  width: 'full',
  mdDown: {
    display: 'none',
  },
  '& input': {
    height: '32px',
    width: 'full',
  },
  '& button': {
    height: '32px',
    px: '4',
  },
})

const bottomSearch = css({
  width: 'full',
  display: 'none',
  mdDown: {
    display: 'block',
  },
  '& input': {
    height: '32px',
    width: 'full',
  },
  '& button': {
    height: '32px',
    px: '4',
  },
})

type LayoutHeaderProps = ComponentProps<'header'> & {
  withLogo?: boolean
  withSearch?: boolean
}

export default function LayoutHeader({ children, withSearch, withLogo, ...props }: LayoutHeaderProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  //const stickyRef = usePinnedSticky(-2).ref as React.RefObject<HTMLElement>
  const searchInput = (
    <>
      <ActionInput size="sm" type="search" placeholder="Search (⌘+K)" buttonProps={{ size: 'sm' }}>
        <SearchIcon width={14} height={14} />
      </ActionInput>
    </>
  )

  return (
    <>
      <header {...props} className={className}>
        <div className={innerClassName}>
          <HStack gap="4" width="full" alignItems="center">
            {withLogo && (
              <Link href="/" className="inline-block animate__animated animate__rotateIn">
                <div
                  className={css({
                    display: 'inline-block',
                    width: '8',
                    height: '8',
                    verticalAlign: 'middle',
                    border: '2px solid',
                    borderRadius: 'sm',
                    borderColor: 'currentColor',
                    // transform: 'scale(1.5)',
                    // marginLeft: '2',
                  })}
                >
                  <Image alt="logo" src="/android-chrome-192x192.png" width={32} height={32} />
                </div>
              </Link>
            )}
            {withSearch && <div className={topSearch}>{searchInput}</div>}
            {/* <Link href="/docs">Docs</Link> */}
            <Link href="/components">Components</Link>
            <Link href="/theme">Theme</Link>
          </HStack>
          <HStack gap="6">
            {!isHomePage && <PrimaryButtonSm>Get code</PrimaryButtonSm>}
            <DarkModeToggle className={css({ px: '0', width: 'auto', minW: '0px' })} />
          </HStack>
        </div>
        {withSearch && <div className={bottomSearch}>{searchInput}</div>}
      </header>
    </>
  )
}
