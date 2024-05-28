import { isServerSide } from '@/lib/utils'
import envVars from './config/envVars'

export function getBaseUrl(): string {
  if (!isServerSide()) {
    // get absolute url in client/browser
    return location.origin
  }

  return envVars.APP_URL
}

export function getAbsUrl(path?: string): string {
  if (!path) {
    return getBaseUrl()
  }

  const sanitizedPath = path.replace(/^\/|\/$/g, '')
  return `${getBaseUrl()}${sanitizedPath ? `/${sanitizedPath}` : '/'}`
}
