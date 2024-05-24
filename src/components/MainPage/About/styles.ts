import styled from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  color: white;
`

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`

export const LeftSideContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const RightSideContainer = styled.div`
  display: flex;
  width: 100%;
  // justify-content: center;

  @media (max-width: 1024) {
    align-items: center;
  }
`

export const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Dot = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgb(77 185 125 / var(--tw-bg-opacity));
  border-radius: 9999px;
  width: 1.25rem;
  height: 1.25rem;
`

export const Line = styled.div`
  background: -webkit-linear-gradient(
    -90deg,
    #4db97d 0%,
    rgba(60, 51, 80, 0) 100%
  );
  width: 0.25rem;
  height: 10rem;
  @media (min-width: 640px) {
    height: 20rem;
  }
`

export const TextContainer = styled.div`
  min-width: 50%;
`

export const Title = styled.h1`
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  font-weight: 900;
  font-size: 40px;
  margin-top: 0.5rem;
  @media (min-width: 1024px) {
    line-height: 98px;
    font-size: 80px;
  }
  @media (min-width: 640px) {
    font-size: 60px;
  }
  @media (min-width: 450px) {
    font-size: 50px;
  }
`

export const NameTitle = styled.span`
  color: #13db6c;
  margin-left: 0.5rem;
`

export const Description = styled.p`
  --tw-text-opacity: 1;
  color: rgb(243 243 243 / var(--tw-text-opacity));
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 3.5rem;
  margin-top: 0.5rem;

  @media (min-width: 1024px) {
    line-height: 40px;
    font-size: 30px;
  }

  @media (min-width: 640px) {
    font-size: 26px;
  }

  @media (min-width: 450px) {
    font-size: 20px;
  }
`
