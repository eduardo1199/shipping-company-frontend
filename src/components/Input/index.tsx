import { ComponentProps } from 'react'
import { Input as InputStyled } from './styles'
import { Input } from '@mui/material'

interface InputComponentProps extends ComponentProps<typeof Input> {}

export function InputComponent(props: InputComponentProps) {
  return <InputStyled {...props} />
}
