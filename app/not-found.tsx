import ContainerCentered from '@/components/layout/container-centered'
import FullLayout from '@/components/layout/full-layout'
import Heading from '@/components/layout/heading'

export default async function () {
  return (
    <FullLayout withBgPattern withFooter>
      <ContainerCentered>
        <Heading size="xl">Page Not Found</Heading>
        <p>The page you are looking for does not exist. Please check the URL in the address bar and try again.</p>
      </ContainerCentered>
    </FullLayout>
  )
}
