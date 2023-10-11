import {
  Box,
  Drawer as DrawerMaterial,
  styled as styledMaterial,
} from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  background: #1a202c;
`

export const Content = styled.div`
  display: flex;

  max-width: 1280px;

  margin: auto;
  padding: 2rem;

  justify-content: space-between;

  p {
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }

  button {
    color: white;
  }
`

export const Drawer = styled(DrawerMaterial)`
  .MuiDrawer-paper {
    background: #111827;
  }
`

export const ContainerDrawer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 3rem;

  background: #111827;

  button {
    font-size: 1rem;
    color: #111827;
    font-weight: bold;

    transition: all 0.3s;

    background: #e2e8f0;

    :hover {
      background: #111827;
      filter: brightness(1.2);
      color: #e2e8f0;
    }

    margin-top: 10rem;
  }
`

export const UserProfile = styled(Box)`
  display: flex;

  align-items: center;

  gap: 1rem;

  div {
    width: 50px;
    height: 50px;
  }

  p {
    color: #e2e8f0;
    font-weight: bold;
  }
`
