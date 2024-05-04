import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  margin-top: 1rem;
`

export const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-bottom: 1rem;

  h5 {
    margin-right: 0.5rem;
  }
  .linkedin {
    margin-right: 0.5rem;
  }
`

export const FooterLinks = styled.a`
  cursor: pointer;
  display: block;
  font-size: 1.17em;
  transition: all ease 0.25s;
  &:hover {
    transform: scale(1.1);
  }
`

export const FooterYuri = styled.p`
  // margin-top: 1rem;
`
