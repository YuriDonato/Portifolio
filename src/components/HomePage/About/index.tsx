import { Grid, GridItem, Image } from '@chakra-ui/react'
import * as S from './styles'
import { useTheme } from 'styled-components'
import profilePhoto from '../../../assets/images/icon/iconVersao2.png'

const About = () => {
  const theme = useTheme()
  return (
    <>
      <S.Container className="container">
        {/* Usando flex-direction para alterar o layout em dispositivos móveis */}
        <S.MobileFlexContainer className="container">
          <S.TitleContainer style={{ color: `${theme.titleAbout}` }}>
            <center>
              <S.Title className="fw-bold">Yuri Vinicius</S.Title>
              <S.Description>
                Desenvolvedor FullStack <br></br> 23 Anos
              </S.Description>
            </center>
          </S.TitleContainer>
          <div>
            <center>
              <Image src={profilePhoto} />
            </center>
          </div>
        </S.MobileFlexContainer>
      </S.Container>
    </>
  )
}

export default About
