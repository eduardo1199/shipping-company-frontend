import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { ContentLayout } from 'Layout/ContentLayout'
import { TableContainer } from './styles'
import { InputComponent } from 'components/Input'
import { FilterBar } from 'components/FilterBar'
import { PrimaryButton } from 'components/Button/styles'

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
  return (
    <ContentLayout>
      <FilterBar>
        <InputComponent placeholder="Pesquisar" />
        <PrimaryButton>Cadastrar</PrimaryButton>
      </FilterBar>
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
    </ContentLayout>
  )
}
