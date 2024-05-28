'use client'

import NextLink from 'next/link'
import type { ComponentProps } from 'react'

function scrollToTop() {
  // e: React.MouseEvent<HTMLAnchorElement>
  window.scrollTo({ top: 0 })
}

/**
 * A link component that scrolls to the top of the page when clicked.
 */
export default function Link({ children, ...props }: ComponentProps<typeof NextLink>) {
  return (
    <NextLink scroll={false} {...props} onClick={scrollToTop}>
      {children}
    </NextLink>
  )
}
