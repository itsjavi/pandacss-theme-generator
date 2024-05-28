import { css } from '@/styled-system/css'
import type { MDXComponents } from 'mdx/types'
import NextImage from 'next/image'
import type { ComponentProps, ImgHTMLAttributes } from 'react'
import HeroTitle from './components/ui/hero-title'

function OptImage(props: ImgHTMLAttributes<HTMLImageElement>): JSX.Element {
  return (
    <figure
      className={css({
        '&, & img': {
          maxWidth: '100%',
          height: 'auto',
        },
      })}
    >
      <NextImage src={props.src as string} alt={props.alt || ''} fill />
    </figure>
  )
}

function Heading(props: ComponentProps<'h1'>): JSX.Element {
  return <HeroTitle>{props.children}</HeroTitle>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading,
    img: OptImage,
    ...components,
  }
}
