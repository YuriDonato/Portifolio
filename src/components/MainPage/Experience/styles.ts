import styled from 'styled-components'

export const SectionContainer = styled.section`
  @media (min-width: 640px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  @media (min-width: 640px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  position: relative;
`

export const smallTitle = styled.p`
  @media (min-width: 640px) {
    font-size: 18px;
  }
  --tw-text-opacity: 1;
  color: rgb(161 230 190 / var(--tw-text-opacity));
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
`

export const Title = styled.h2`
  @media (min-width: 768px) {
    font-size: 60px;
  }
  @media (min-width: 640px) {
    font-size: 50px;
  }
  @media (min-width: 450px) {
    font-size: 40px;
  }
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  font-weight: 900;
  font-size: 30px;
  text-align: center;
`

export const ProjectContainer = styled.div`
  width: 95%;
  max-width: 1170px;
  margin: 0 auto;
  position: relative;
  // padding: 2em 0;
`
