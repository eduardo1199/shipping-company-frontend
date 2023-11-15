import { getServerSession } from 'next-auth'

import { GetServerSidePropsContext } from 'next'
import { CardBox, GridContainer } from './styles'

import { Card } from 'components/Card'
import { Typography } from '@mui/material'
import {
  Accessibility,
  AirlineSeatReclineExtra,
  DirectionsCar,
  Route,
} from '@mui/icons-material'
import { authOptions } from '../api/auth/[...nextauth].api'
import { ContentLayout } from 'Layout/ContentLayout'

export default function Dashboard() {
  return (
    <ContentLayout>
      <GridContainer container spacing={2}>
        <Card item xs={12} sm={12} md={6} url="/client">
          <CardBox>
            <Accessibility />
            <Typography>Cliente</Typography>
          </CardBox>
        </Card>
        <Card item xs={12} sm={12} md={6} url="/conductor">
          <CardBox>
            <AirlineSeatReclineExtra />
            <Typography>Condutor</Typography>
          </CardBox>
        </Card>
        <Card item xs={12} sm={12} md={6} url="/displacement">
          <CardBox>
            <Route />
            <Typography>Deslocamento</Typography>
          </CardBox>
        </Card>
        <Card item xs={12} sm={12} md={6} url="/vehicle">
          <CardBox>
            <DirectionsCar />
            <Typography>Veículo</Typography>
          </CardBox>
        </Card>
      </GridContainer>
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

  return {
    props: {},
  }
}
