import { createTheme } from '@mui/material'
import { Roboto } from 'next/font/google'

export const roboto = Roboto({
  weight: ['500', '700', '900'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  preload: true,
  subsets: ['latin'],
})

export const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})
