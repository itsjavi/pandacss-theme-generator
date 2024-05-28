import FullLayout from '@/components/layout/full-layout'

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <FullLayout withHeaderLogo withHeaderSearch>
      {children}
    </FullLayout>
  )
}
