import pkg from '../package.json'
import type { ThemeColor, ThemeColorAlias } from './types'

const colorAliasConfig: Record<ThemeColorAlias, ThemeColor> = {
  neutral: 'gray',
  primary: 'blue',
  secondary: 'gray',
  accent: 'pink',
  success: 'green',
  warning: 'amber',
  danger: 'red',
  info: 'teal',
}

const appConfig = {
  version: pkg.version,
  colors: {
    pwaBackground: '#1b1b1b',
    aliases: colorAliasConfig,
  },
  links: {
    twitter_user: 'https://mobile.x.com/itsjavidev',
    github_user: 'https://github.com/itsjavi',
    github_repo: 'https://github.com/itsjavi/pandacss-theme-generator',
    donations_url: 'https://github.com/sponsors/itsjavi',
  },
}

export default appConfig
