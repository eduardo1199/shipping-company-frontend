import { Button, GridProps } from '@mui/material'
import { ButtonCard, GridContainer } from './styles'
import { ReactNode } from 'react'

interface CardProps extends GridProps {
  children: ReactNode
}

export function Card(props: CardProps) {
  return (
    <GridContainer {...props}>
      <ButtonCard>{props.children}</ButtonCard>
    </GridContainer>
  )
}
