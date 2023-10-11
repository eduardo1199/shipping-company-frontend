import styled from 'styled-components'

import { Box, Button, Typography } from '@mui/material'

export const Container = styled(Box)`
  width: 100%;
  height: 100vh;

  background: linear-gradient(#1a202c, #2d3748);
`

export const Content = styled(Box)`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 5rem;

  height: 100%;
  flex-direction: column;
`

export const Title = styled(Typography)`
  font-size: 3.5rem;
  max-width: min-content;
  color: #4299e1;
  overflow: hidden;
  border-right: 0.15rem solid #4299e1;
  white-space: nowrap;
  font-style: italic;
  animation: typing 3.5s steps(120, end), blink-caret 0.75s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }
`

export const SignButton = styled(Button)`
  background: transparent;
  display: flex;
  gap: 1rem;

  padding: 0rem;
  min-height: min-content;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    background: linear-gradient(to right, #4285f4, #db4437, #0f9d58);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  svg {
    color: #0f9d58;
  }

  :hover {
    background: transparent;
  }
`
