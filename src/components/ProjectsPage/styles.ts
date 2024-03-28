import styled from 'styled-components'

export const ProjectContainer = styled.div`
  color: ${({ theme }) => theme.defaultText};
`
export const Title = styled.h2`
  font-size: 5vw;
  margin-bottom: 0.5em;
  margin-top: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
`

export const SubTitle = styled.p`
  font-size: 2.5vw;
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
