import { Button } from '@chakra-ui/react'
import styled from 'styled-components'
import MatrixBackground from '../../components/MatrixRaining'

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const CustomButton = styled(Button)`
  width: 10rem;
  margin: 0 auto 0 auto;
  margin-bottom: 1rem;
  background-color: 'red';
  &:hover {
    color: ${({ theme }) => theme.buttonTextColor};
    transform: scale(1.2);
    background-color: ${({ theme }) => theme.buttonOnHover};
  }
`

export const MainCard = styled.div`
  margin: 1rem auto 0 auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.mainCardBackground};
  max-width: 95%;
  max-height: 95%;
  display: block;
  overflow-y: auto; /* Habilita a rolagem vertical */
  /* Estilos da barra de rolagem personalizada */
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: #f2f;
  }
  ::-webkit-scrollbar-thumb {
    background: #f2f;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #f2f;
  }
`

export const StyledMatrixRaining = styled(MatrixBackground)`
  position: absolute;
  inset: 0px;
`
