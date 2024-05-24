import styled from 'styled-components'

export const SectionContainer = styled.section`
  @media (min-width: 640px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
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

export const Header = styled.p`
  @media (min-width: 640px) {
    font-size: 18px;
  }
  --tw-text-opacity: 1;
  color: rgb(161 230 190 / var(--tw-text-opacity));
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 14px;
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
`

export const Description = styled.p`
  opacity: 1;
  transform: none;
  --tw-text-opacity: 1;
  color: rgb(161 230 190 / var(--tw-text-opacity));
  line-height: 30px;
  font-size: 17px;
  max-width: 48rem;
  margin-top: 1rem;
`
