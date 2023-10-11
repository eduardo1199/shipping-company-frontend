import { Box, Grid } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  background: #111827;

  display: flex;
  justify-content: center;

  height: 100vh;
`

export const GridContainer = styled(Grid)`
  max-width: 1280px;
  padding: 2rem;

  margin: 0 auto;
`

export const CardBox = styled(Box)`
  display: flex;

  flex-direction: column;
  align-items: center;

  gap: 2rem;

  svg {
    font-size: 5rem;
  }

  p {
    font-size: 1.5rem;
  }
`
