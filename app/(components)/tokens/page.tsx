import ContentSection from '@/components/layout/content-section'
import Heading from '@/ui/components/typography/heading'
import Subtitle from '@/ui/components/typography/subtitle'

export default async function () {
  return (
    <>
      <ContentSection>
        <Heading size="xl" as="h1">
          Preset Tokens
        </Heading>
        <Subtitle>
          Create your own preset by tweaking the tokens below, and preview your changes using our demo components
          created with Ark UI.
          <br />
          <br />
          <strong>🚧 This section is a work in progress. More customization options are coming soon 🚧.</strong>
        </Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Radii</Heading>
        <Subtitle>Radius tokens are used to define the border radius of elements.</Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Shadows</Heading>
        <Subtitle>Shadow tokens are used to define a predefined set of shadow styles.</Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Blurs</Heading>
        <Subtitle>Blur tokens are used to define a predefined set of blur styles.</Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Opacities</Heading>
        <Subtitle>Opacity tokens are used to define a predefined set of opacity values.</Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Gradients</Heading>
        <Subtitle>Gradient tokens are used to define a predefined set of gradient background images.</Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Borders</Heading>
        <Subtitle>Edit the border tokens below to customize the border widths, and predefined sets.</Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Typography</Heading>
        <Subtitle>
          Edit the typography tokens below to customize the fonts used in your design: family, size, line heights,
          spacing, weights, etc.
        </Subtitle>
      </ContentSection>
    </>
  )
}
