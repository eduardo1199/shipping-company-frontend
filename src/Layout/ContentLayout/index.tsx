import { ReactNode } from 'react'
import { Container, Content } from './styles'
import { Header } from 'components/Header'

interface ContentLayoutProps {
  children: ReactNode
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  )
}
