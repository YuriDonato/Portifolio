import styled from 'styled-components'

export const ContactSection = styled.section`
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

export const MainContainer = styled.div`
  overflow: hidden;
  gap: 2.5rem;
  flex-direction: column-reverse;
  display: flex;
`

export const FormContainer = styled.div`
  transform: none;
  padding: 2rem;
  --tw-bg-opacity: 1;
  background-color: rgb(28 69 46 / var(--tw-bg-opacity));
  border-radius: 1rem;
  flex: 0.75;
`

export const Heading = styled.p`
  @media (min-width: 640px) {
    font-size: 18px;
  }

  --tw-text-opacity: 1;
  color: rgb(170 166 195 / var(--tw-text-opacity));
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 14px;
`

export const Title = styled.h3`
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

export const Form = styled.form`
  gap: 2rem;
  flex-direction: column;
  display: flex;
  margin-top: 3rem;
`

export const Label = styled.label`
  flex-direction: column;
  display: flex;
  color: rgb(255 255 255 / var(--tw-text-opacity));
`

export const InputTitle = styled.span`
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  font-weight: 500;
  margin-bottom: 1rem;
`

export const Input = styled.input`
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-weight: 500;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(39 93 63 / var(--tw-bg-opacity));
  border-style: none;
  border-radius: 0.5rem;
  color: rgb(255 255 255 / var(--tw-text-opacity));

  &::placeholder {
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
`

export const TextArea = styled.textarea`
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-weight: 500;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(39 93 63 / var(--tw-bg-opacity));
  border-style: none;
  border-radius: 0.5rem;
  resize: vertical;
  color: rgb(255 255 255 / var(--tw-text-opacity));
`

export const Button = styled.button`
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-shadow-color: #050816;
  --tw-shadow: var(--tw-shadow-colored);
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
    0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  font-weight: 700;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2rem;
  padding-right: 2rem;
  --tw-bg-opacity: 1;
  background-color: rgb(30 138 61 / var(--tw-bg-opacity));
  border-radius: 0.75rem;
  width: -moz-fit-content;
  width: fit-content;
`
