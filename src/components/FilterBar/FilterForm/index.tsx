import { IconButton } from '@mui/material'
import { ButtonReturn, Container } from './styles'
import { ArrowLeft } from '@mui/icons-material'
import { InputComponent } from 'components/Input'
import Router from 'next/router'
import { ComponentProps } from 'react'

interface FilterFormProps extends ComponentProps<typeof InputComponent> {
  urlReturn: string
}

export function FilterForm({ urlReturn, ...props }: FilterFormProps) {
  function handleNavigateReturnPage() {
    Router.push(urlReturn)
  }

  return (
    <Container>
      <ButtonReturn onClick={handleNavigateReturnPage}>
        <ArrowLeft />
      </ButtonReturn>
      <InputComponent placeholder="Pesquisar" {...props} />
    </Container>
  )
}
