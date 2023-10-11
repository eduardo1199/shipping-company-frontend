import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import {
  Container,
  ContainerDrawer,
  Content,
  Drawer,
  UserProfile,
} from './styles'
import { Settings } from '@mui/icons-material'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'

export function Header() {
  const { data } = useSession()

  const [openDrawer, setOpenDrawer] = useState(false)

  function handleOnCloseDrawer() {
    setOpenDrawer(false)
  }

  function handleOpenDrawer() {
    setOpenDrawer(true)
  }

  async function handleLogout() {
    await signOut()
  }

  return (
    <>
      {data?.user ? (
        <Container>
          <Content>
            <Typography>Shipping Company</Typography>
            <IconButton onClick={handleOpenDrawer}>
              <Settings />
            </IconButton>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={handleOnCloseDrawer}
            >
              <ContainerDrawer>
                <UserProfile>
                  <Avatar src={data.user.image!} />
                  <Typography>Olá, {data.user.name}</Typography>
                </UserProfile>
                <Button onClick={handleLogout}>Sair</Button>
              </ContainerDrawer>
            </Drawer>
          </Content>
        </Container>
      ) : (
        'loading..'
      )}
    </>
  )
}
