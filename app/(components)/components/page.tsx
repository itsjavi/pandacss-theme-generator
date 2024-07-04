import ContentSection from '@/components/layout/content-section'
import Heading from '@/ui/components/typography/heading'
import Subtitle from '@/ui/components/typography/subtitle'

export default async function () {
  return (
    <>
      <ContentSection>
        <Heading size="xl" as="h1">
          Styled UI Components
        </Heading>
        <Subtitle>
          Preview our curated list of React components with the theme you created in the Color System and Tokens
          sections.
          <br />
          <br />
          <strong>🚧 This section is a work in progress. More customization options are coming soon 🚧.</strong>
        </Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Avatar</Heading>
        <Subtitle>(WIP)</Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Button</Heading>
        <Subtitle>(WIP)</Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Input</Heading>
        <Subtitle>(WIP)</Subtitle>
      </ContentSection>

      <ContentSection>
        <Heading size="lg">Popover</Heading>
        <Subtitle>(WIP)</Subtitle>
      </ContentSection>
    </>
  )
}
