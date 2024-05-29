import ContainerCentered from '@/components/layout/container-centered'
import FullLayout from '@/components/layout/full-layout'
import HeroTitle from '@/components/ui/hero-title'

export default async function () {
  return (
    <FullLayout withHeaderLogo withBgPattern withFooter>
      <ContainerCentered>
        <HeroTitle size="xl">Page Not Found</HeroTitle>
        <p>The page you are looking for does not exist. Please check the URL in the address bar and try again.</p>
      </ContainerCentered>
    </FullLayout>
  )
}
