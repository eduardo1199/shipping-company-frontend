import { getServerSession } from 'next-auth'

import { GetServerSidePropsContext } from 'next'
import { CardBox, Container, Content, GridContainer } from './styles'

import { Header } from 'components/Header'
import { Card } from 'components/Card'
import { Typography } from '@mui/material'
import {
  Accessibility,
  AirlineSeatReclineExtra,
  DirectionsCar,
  Route,
} from '@mui/icons-material'
import { authOptions } from '../api/auth/[...nextauth].api'
import { api } from 'pages/lib/api'
import axios from 'axios'

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <Content>
        <GridContainer container spacing={2}>
          <Card item xs={12} sm={12} md={6}>
            <CardBox>
              <Accessibility />
              <Typography>Cliente</Typography>
            </CardBox>
          </Card>
          <Card item xs={12} sm={12} md={6}>
            <CardBox>
              <AirlineSeatReclineExtra />
              <Typography>Condutor</Typography>
            </CardBox>
          </Card>
          <Card item xs={12} sm={12} md={6}>
            <CardBox>
              <Route />
              <Typography>Deslocamento</Typography>
            </CardBox>
          </Card>
          <Card item xs={12} sm={12} md={6}>
            <CardBox>
              <DirectionsCar />
              <Typography>Veículo</Typography>
            </CardBox>
          </Card>
        </GridContainer>
      </Content>
    </Container>
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

  const getWeatherForecast = await api.get('/weatherForest')

  const weatherForecastData = getWeatherForecast.data

  return {
    props: {
      weatherForecastData,
    },
  }
}
