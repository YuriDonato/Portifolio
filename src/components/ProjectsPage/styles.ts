import styled from 'styled-components'

export const ProjectContainer = styled.div`
  color: ${({ theme }) => theme.defaultText};
`
export const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 0.5em;
  margin-top: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
`

export const SubTitle = styled.p`
  font-size: 1.5rem;
`

export const CenterContainer = styled.div`
  display: block;
  text-align: -webkit-center;
`

export const BoldText = styled.b`
  display: flex;
`

export const DetailText = styled.p`
  margin-left: 0.5rem;
`
export const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Por padrão, em dispositivos móveis, as seções devem ficar uma abaixo da outra */

  @media screen and (min-width: 768px) {
    flex-direction: row; /* Em telas maiores, as seções devem ficar lado a lado */
  }
  margin-top: 2rem;
`

export const Section1 = styled.div`
  flex: 1;
  margin-bottom: 20px; /* Adiciona espaçamento entre as seções em dispositivos móveis */

  @media screen and (min-width: 768px) {
    margin-bottom: 0; /* Remove o espaçamento entre as seções em telas maiores */
    margin-right: 20px; /* Adiciona espaçamento entre as seções em telas maiores */
  }
`

export const Section2 = styled.div`
  flex: 1;
`
