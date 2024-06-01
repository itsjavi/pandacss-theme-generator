import LayoutFooter from './layout-footer'
import LayoutHeader from './layout-header'
import LayoutMain from './layout-main'
import LayoutRoot from './layout-root'

type FullLayoutProps = {
  readonly children: React.ReactNode
  className?: string
  bgClassName?: string
  withBgPattern?: boolean
  withBgAnimation?: boolean
  withFooter?: boolean
}

export default async function FullLayout({
  children,
  className,
  bgClassName,
  withBgPattern,
  withBgAnimation,
  withFooter,
}: FullLayoutProps) {
  return (
    <LayoutRoot
      className={className}
      bgClassName={bgClassName}
      withBgPattern={withBgPattern}
      withBgAnimation={withBgAnimation}
    >
      <LayoutHeader />
      <LayoutMain>{children}</LayoutMain>
      {withFooter && <LayoutFooter />}
    </LayoutRoot>
  )
}
