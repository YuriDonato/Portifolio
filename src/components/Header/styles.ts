import styled from 'styled-components'
import { text } from '../../styles'

export const HeaderContainer = styled.div`
  margin-left: 3rem;
  margin-top: 0.1rem;
`

export const Text = styled.h1`
  color: ${({ theme }) => theme.defaultText};
  font-size: ${text.xl};
`
interface CustomButtonProps {
  testCompleted?: boolean // Definindo testCompleted como uma propriedade opcional
}

export const CustomButton = styled.button<CustomButtonProps>`
  position: relative;
  text-align: center;
  color: rgb(3, 100, 52);
  line-height: 2.5;
  transition: color 400ms;

  &:before {
    content: '${(props) => (props.testCompleted ? 'Yuri Vinicius' : 'YV')}';
    position: absolute;
    left: 0;
    top: 0;
    transition: opacity 400ms, content 400ms;
    opacity: ${(props) => (props.testCompleted ? '1' : '0')};
  }

  &:after {
    content: '${(props) => (props.testCompleted ? 'YV' : 'Yuri Vinicius')}';
    position: absolute;
    left: 0;
    top: 0;
    transition: opacity 400ms, content 400ms;
    opacity: ${(props) => (props.testCompleted ? '0' : '1')};
  }

  /* Lógica para alterar a cor do texto quando hover */
  &:hover {
    color: ${(props) =>
      props.testCompleted ? 'rgb(3, 100, 52)' : props.theme.defaultText};
  }
`
