import LayoutFooter from '@/components/layout/layout-footer'
import LayoutHeader from '@/components/layout/layout-header'
import LayoutMain from '@/components/layout/layout-main'
import LayoutRoot from '@/components/layout/layout-root'

type FullLayoutProps = {
  readonly children: React.ReactNode
  className?: string
  bgClassName?: string
  withBgPattern?: boolean
  withBgAnimation?: boolean
  withHeaderLogo?: boolean
  withHeaderSearch?: boolean
  withFooter?: boolean
}

export default async function FullLayout({
  children,
  className,
  bgClassName,
  withBgPattern,
  withBgAnimation,
  withHeaderLogo,
  withHeaderSearch,
  withFooter,
}: FullLayoutProps) {
  return (
    <LayoutRoot
      className={className}
      bgClassName={bgClassName}
      withBgPattern={withBgPattern}
      withBgAnimation={withBgAnimation}
    >
      <LayoutHeader withLogo={withHeaderLogo} withSearch={withHeaderSearch} />
      <LayoutMain>{children}</LayoutMain>
      {withFooter && <LayoutFooter />}
    </LayoutRoot>
  )
}
