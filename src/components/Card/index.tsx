import { GridProps } from '@mui/material'
import { LinkNavigate, GridContainer } from './styles'
import { ReactNode } from 'react'

interface CardProps extends GridProps {
  children: ReactNode
  url: string
}

export function Card(props: CardProps) {
  return (
    <GridContainer {...props}>
      <LinkNavigate href={props.url}>{props.children}</LinkNavigate>
    </GridContainer>
  )
}
