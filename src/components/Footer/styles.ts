import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  margin-top: 1rem;
`

export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  transition: all ease 0.25s;
  &:hover {
    transform: scale(1.1);
  }
`

export const FooterYuri = styled.p``
