import { Button } from '@mui/material'
import styled from 'styled-components'

export const PrimaryButton = styled(Button)`
  font-weight: bold;
  background: #e2e8f0;

  color: #1a202c;

  padding: 0 1rem;

  transition: filter 0.3s;

  :hover {
    background: #e2e8f0;
    color: #1a202c;

    filter: brightness(0.8);
    transition: filter 0.3s;
  }
`
