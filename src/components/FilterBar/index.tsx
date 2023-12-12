import { ReactNode } from 'react'
import { Container } from './styles'

interface FilterBarProps {
  children: ReactNode
}

export function FilterBar({ children }: FilterBarProps) {
  return <Container>{children}</Container>
}
