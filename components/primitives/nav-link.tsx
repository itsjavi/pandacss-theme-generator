'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'
import { css } from 'styled-system/css'

type NavLinkProps = ComponentProps<typeof Link>

const cls = {
  link: css({
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    gap: '2',
    paddingY: '1',
    paddingX: '4',
    '& .icon': {
      display: 'inline-block',
      width: '1.5em',
      height: '1.5em',
    },
  }),
}
export default function NavLink({ className, children, ...props }: NavLinkProps) {
  const pathname = usePathname()
  return (
    <Link className={cn(cls.link, { active: pathname === props.href }, className)} {...props}>
      {children}
    </Link>
  )
}
