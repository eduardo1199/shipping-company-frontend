import styled from 'styled-components'
import {
  Pagination,
  TableContainer as TableContainerMaterial,
} from '@mui/material'

export const TableContainer = styled(TableContainerMaterial)`
  background: #e2e8f0;

  padding: 1rem;

  border-radius: 1rem;

  margin-top: 2rem;
`

export const StyledPagination = styled(Pagination)`
  button {
    color: #111827;
    background: #e2e8f0;

    &.Mui-selected {
      background: #1a202c;
      color: #e2e8f0;
    }
  }

  .MuiPaginationItem-ellipsis {
    color: #e2e8f0;
  }
`
