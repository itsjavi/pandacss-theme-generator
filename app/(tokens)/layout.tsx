import FullLayout from '@/components/layout/full-layout'
import Sidebar from '@/components/layout/sidebar'
import HeroTitle from '@/components/ui/hero-title'
import type { PropsWithChildren } from 'react'

export default async function ({ children }: PropsWithChildren) {
  return (
    <FullLayout withHeaderLogo>
      <Sidebar.Layout>
        <Sidebar>
          <HeroTitle as="div" size="md">
            Theme
          </HeroTitle>
          <section>
            <HeroTitle as="div" size="xs">
              Units
            </HeroTitle>
            <ul>
              <li>Root Value</li>
              <li>Sizes</li>
              <li>Spacings</li>
              <li>Z-Indices</li>
            </ul>
          </section>
          <section>
            <HeroTitle as="div" size="xs">
              Colors
            </HeroTitle>
            <ul>
              <li>Palette</li>
              <li>Gradients</li>
            </ul>
          </section>
          <section>
            <HeroTitle as="div" size="xs">
              Borders
            </HeroTitle>
            <ul>
              <li>Radius</li>
              <li>Borders</li>
              <li>Border Widths</li>
            </ul>
          </section>
          <section>
            <HeroTitle as="div" size="xs">
              Effects
            </HeroTitle>
            <ul>
              <li>Blurs</li>
              <li>Shadows</li>
              <li>Opacity</li>
            </ul>
          </section>
          <section>
            <HeroTitle as="div" size="xs">
              Typography
            </HeroTitle>
            <ul>
              <li>Root Size</li>
              <li>Font Sizes</li>
              <li>Font Weights</li>
              <li>Line Heights</li>
              <li>Letter Spacings</li>
            </ul>
          </section>
          <section>
            <HeroTitle as="div" size="xs">
              Animation
            </HeroTitle>
            <ul>
              <li>Easings</li>
              <li>Durations</li>
              <li>Keyframes</li>
              <li>Animations</li>
            </ul>
          </section>
        </Sidebar>
        <Sidebar.Content>{children}</Sidebar.Content>
      </Sidebar.Layout>
    </FullLayout>
  )
}
