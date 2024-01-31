import { ContentLayout } from 'Layout/ContentLayout'
import { FilterBar } from 'components/FilterBar'
import { TableContainer } from './styles'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

function createData(
  name: string,
  email: string,
  cpf: string,
  create_at: Date,
  cat_hab: number,
) {
  return { name, email, cpf, create_at, cat_hab }
}

const rows = [
  createData(
    'Frozen yoghurt',
    'fake@gmail.com',
    '515.648.651-74',
    new Date(),
    454465465465,
  ),
  createData(
    'Frozen yoghurt',
    'fake@gmail.com',
    '515.648.651-74',
    new Date(),
    454465465465,
  ),
  createData(
    'Frozen yoghurt',
    'fake@gmail.com',
    '515.648.651-74',
    new Date(),
    454465465465,
  ),
]

export default function Conductor() {
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
              <TableCell align="left">Email</TableCell>
              <TableCell align="right">CPF</TableCell>
              <TableCell align="right">Carteira Hab.</TableCell>
              <TableCell align="right">Data de criação</TableCell>
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
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="right">{row.cpf}</TableCell>
                <TableCell align="right">{row.cat_hab}</TableCell>
                <TableCell align="right">
                  {row.create_at.toDateString()}
                </TableCell>
                <TableCell align="right" />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContentLayout>
  )
}
