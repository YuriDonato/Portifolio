import { Grid, GridItem, Image, useMediaQuery } from '@chakra-ui/react'
import * as S from './styles'
import { useTheme } from 'styled-components'
import profilePhoto from '../../../assets/images/icon/iconVersao2.png'

const About = () => {
  const theme = useTheme()
  const [isMobile] = useMediaQuery('(max-width: 767px)') // Verifica se é um dispositivo móvel

  return (
    <>
      <S.Container className="container">
        {/* Usando flex-direction para alterar o layout em dispositivos móveis */}
        <S.MobileFlexContainer className="container" isMobile={isMobile}>
          <S.TitleContainer style={{ color: `${theme.titleAbout}` }}>
            <center>
              {!isMobile && (
                <>
                  <S.Title className="fw-bold">Yuri Vinicius</S.Title>
                </>
              )}
              <S.Description>
                Desenvolvedor FullStack <br /> 23 Anos
              </S.Description>
            </center>
          </S.TitleContainer>
          <div>
            <center>
              <Image
                src={profilePhoto}
                maxW={isMobile ? '100%' : '20em'} // Definindo largura máxima da imagem
                h="auto" // Altura automática para manter a proporção
              />{' '}
              {/* Define o tamanho máximo da imagem para 100% em dispositivos móveis */}
            </center>
          </div>
        </S.MobileFlexContainer>
      </S.Container>
    </>
  )
}

export default About
