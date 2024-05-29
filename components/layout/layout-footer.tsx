import appConfig from '@/lib/config'
import { css } from '@/styled-system/css'
import { Flex } from '@/styled-system/jsx'
import type { ComponentProps } from 'react'

const styleClass = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  gap: '2',
  padding: '4',
  color: 'primary.12',
  fontSize: 'sm',
  opacity: 0.8,
  '& a': {
    textDecoration: 'underline',
    textDecorationStyle: 'dotted',
    color: 'primary.11',
    '&:hover': {
      color: 'accent.11',
      textDecorationStyle: 'solid',
    },
  },
  smDown: {
    flexDirection: 'column',
    gap: '2',
  },
})

export default function LayoutFooter(props: ComponentProps<'footer'>) {
  // FAQ should contain links to Roadmap, Feedback, how to Donate, etc.
  return (
    <footer className={styleClass} {...props}>
      <span>Javier Aguilar © {new Date().getFullYear()}</span>
      <Flex gap="2">
        <span
          className={css({
            smDown: {
              display: 'none',
            },
          })}
        >
          {'-'}
        </span>
        <a href={appConfig.links.donations_url} target="_blank" rel="noopener noreferrer">
          Buy me a coffee
        </a>
        {'-'}
        <a href={appConfig.links.github_repo} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        {'-'}
        <a href={appConfig.links.twitter_user} target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </Flex>
    </footer>
  )
}
