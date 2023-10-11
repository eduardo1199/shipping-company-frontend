import { Google } from '@mui/icons-material'
import { Container, Content, SignButton, Title } from './home/styles'

import { Typography } from '@mui/material'
import { signIn } from 'next-auth/react'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from 'pages/api/auth/[...nextauth].api'

export default function Home() {
  async function handleLoginGoogle() {
    await signIn('google')
  }

  return (
    <Container>
      <Content>
        <Title>Shipping Company</Title>
        <SignButton onClick={handleLoginGoogle}>
          <Typography>Entrar com Google</Typography>
          <Google />
        </SignButton>
      </Content>
    </Container>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
