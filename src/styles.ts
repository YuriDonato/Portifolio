import styled, { createGlobalStyle } from 'styled-components'

export const text = {
  tiny: '0.8em',
  medium: '1em',
  large: '1.2em',
  xl: '1.5em',
  xxl: '2em',
  giga: '2.5rem'
}

export const GlobalCss = createGlobalStyle`
  *{
    scroll-behavior: smooth;
    user-select: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // font-family: 'IM Fell DW Pica', serif;
  }

  body {
    background-color: black;
  }
`

export const MainCard = styled.div`
  margin: 1rem auto 0 auto;
  color: ${({ theme }) => theme.defaultText};
  padding: 1rem;
  background-color: ${({ theme }) => theme.white};
  max-width: 600px;
  display: block;
`
