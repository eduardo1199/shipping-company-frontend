import { Box, Button, Grid } from '@mui/material'
import Link from 'next/link'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
  background: #111827;
`
export const LinkNavigate = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 1rem;

  border: 1px solid #1f2937;
  border-radius: 4px;
  text-decoration: none;

  transition: all 0.3s;

  color: #64748b;

  :hover {
    border: 1px solid #e2e8f0;
    color: #e2e8f0;
    transition: all 0.5s;
  }

  &:focus {
    border: 1px solid #374151;
    color: #e2e8f0;
    transition: all 0.5s;
  }
`
