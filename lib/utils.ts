import { type ClassValue, clsx } from 'clsx'
import type { Metadata } from 'next'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function isServerSide(): boolean {
  return typeof window === 'undefined'
}

export function getBaseUrl(): string {
  if (!isServerSide()) {
    // get absolute url in client/browser
    return location.origin
  }

  if (!process.env.APP_URL) {
    throw new Error('APP_URL environment variable is required')
  }

  return process.env.APP_URL
}

export function getAbsUrl(path?: string): string {
  if (!path) {
    return getBaseUrl()
  }

  const sanitizedPath = path.replace(/^\/|\/$/g, '')
  return `${getBaseUrl()}${sanitizedPath ? `/${sanitizedPath}` : '/'}`
}

export function defineMetadata<T extends Metadata>(metadata: T) {
  return metadata
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}
