import {
  Grid,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { ContentLayout } from 'Layout/ContentLayout'
import { StyledPagination, TableContainer } from './styles'
import { FilterBar } from 'components/FilterBar'
import { getServerSession } from 'next-auth'
import { GetServerSidePropsContext } from 'next'
import { authOptions } from 'pages/api/auth/[...nextauth].api'
import { ChangeEvent, useState } from 'react'

function createData(
  name: string,
  email: string,
  avatar_url: string,
  create_at: Date,
) {
  return { name, email, avatar_url, create_at }
}

const rows = [
  createData('Frozen yoghurt', 'fake@gmail.com', '', new Date()),
  createData('Ice cream sandwich', 'fake@gmail.com', '', new Date()),
  createData('Eclair', 'fake@gmail.com', '', new Date()),
  createData('Cupcake', 'fake@gmail.com', '', new Date()),
  createData('Gingerbread', 'fake@gmail.com', '', new Date()),
]

export default function Client() {
  const [page, setPage] = useState(1)

  function handleChangePage(event: ChangeEvent<unknown>, value: number) {
    setPage(value)
  }

  return (
    <ContentLayout>
      <FilterBar.Root>
        <FilterBar.Filter urlReturn={'/dashboard'} />
        <FilterBar.ButtonRegister />
      </FilterBar.Root>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Foto</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Data de cadastro</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.avatar_url}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                  {row.create_at.toDateString()}
                </TableCell>
                <TableCell align="right" />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container marginTop={4} justifyContent="center">
        <StyledPagination
          count={10}
          variant="outlined"
          onChange={handleChangePage}
          page={page}
        />
      </Grid>
    </ContentLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  // TODO: get request client in server side

  return {
    props: {},
  }
}
