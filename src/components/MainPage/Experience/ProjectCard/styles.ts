import styled from 'styled-components'

export const CardContainer = styled.div`
  background: rgb(28, 69, 46);
  color: rgb(255, 255, 255);
  min-height: 1px;
  position: relative;
  margin-left: 60px;
  border-radius: 0.25em;
  padding: 1em;
  box-shadow: 0 3px #ddd;
  box-sizing: border-box;
  margin-top: 0;
  position: relative;
  margin: 2em 0;
`

export const Title = styled.h3`
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  font-weight: 700;
  font-size: 24px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`

export const WorkType = styled.p`
  margin: 0px;
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
  line-height: 1.6;
  font-size: 13px;
  font-size: 0.8125rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(161 230 190 / var(--tw-text-opacity));
  font-weight: 600;
  font-size: 16px;
  box-sizing: border-box;
`

export const DescriptionContainer = styled.ul`
  margin-top: 1.25rem;
  margin-left: 1.25rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`

export const Description = styled.li`
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  letter-spacing: 0.05em;
  font-size: 14px;
  padding-left: 0.25rem;
  box-sizing: border-box;
`

export const TechContainer = styled.div`
  gap: 0.5rem;
  flex-wrap: wrap;
  display: flex;
  margin-top: 1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`

export const Tech = styled.span`
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(101 217 98 / var(--tw-bg-opacity));
  border-radius: 0.25rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`

export const ButtonContainer = styled.div`
  margin-top: 1rem;
`

export const Button = styled.button`
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  font-weight: 700;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  --tw-bg-opacity: 1;
  background-color: rgb(30 138 61 / var(--tw-bg-opacity));
  border-radius: 0.25rem;
  align-items: center;
  display: inline-flex;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`

export const ButtonTextContainer = styled.div`
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  --tw-bg-opacity: 0.5;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  top: 0;
  left: 0;
  position: absolute;
  box-sizing: border-box;

  &:hover {
    opacity: 1;
  }
`

export const ButtonText = styled.span`
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
  border-radius: 0.25rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`
