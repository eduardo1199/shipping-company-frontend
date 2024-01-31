import { ReactNode } from 'react'
import { Container } from './styles'
import { FilterForm } from './FilterForm'
import { FilterAction } from './FilterAction'

interface FilterContainerProps {
  children: ReactNode
}

export function FilterContainer({ children }: FilterContainerProps) {
  return <Container>{children}</Container>
}

export const FilterBar = {
  Root: FilterContainer,
  Filter: FilterForm,
  ButtonRegister: FilterAction,
}
