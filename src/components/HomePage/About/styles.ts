import styled from 'styled-components'
import { text } from '../../../styles'
import { GridItem } from '@chakra-ui/react'

interface MobileFlexContainerProps {
  isMobile: boolean
}

export const Container = styled.div`
  margin-top: 2rem;
`

export const MobileFlexContainer = styled.div<MobileFlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`
//Title area

export const CustomGridItem = styled(GridItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TitleContainer = styled.div`
  opacity: 1;
  background-position: 50% 50%;
  filter: blur(0);
  background-size: contain;
  background-repeat: no-repeat;
  transition: 0.6s ease, opacity 0.6s ease, background-position 0.8s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: fit-content;
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 10rem;
  }
`

export const Title = styled.h1`
  font-size: ${text.giga};
  font-weight: 700 !important;
`

export const Description = styled.p`
  fontsize-: 3vh;
  margin-bottom: 1rem;
`
