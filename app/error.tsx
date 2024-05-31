'use client' // Error components must be Client Components

import ContainerCentered from '@/components/layout/container-centered'
import FullLayout from '@/components/layout/full-layout'
import { BlackButton } from '@/components/ui/button'
import { useEffect } from 'react'

export default function ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <FullLayout withBgPattern withFooter>
      <ContainerCentered>
        <h1>Something went wrong</h1>
        <p>
          An error occurred while loading this page. Please try again later. If the problem persists, contact support
          with the following error code:{' '}
          <pre className="badge-lg">
            <code>{error.digest}</code>
          </pre>
        </p>
        <BlackButton onClick={reset}>Try again</BlackButton>
      </ContainerCentered>
    </FullLayout>
  )
}
