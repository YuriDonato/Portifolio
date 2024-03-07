import { Grid, GridItem, Image } from '@chakra-ui/react'
import * as S from './styles'
import { useTheme } from 'styled-components'
import profilePhoto from '../../../assets/images/icon/iconVersao2.png'

const About = () => {
  const theme = useTheme()
  return (
    <>
      <S.Container className="container">
        <Grid justifyItems={'center'} templateColumns="repeat(2, 1fr)" gap={6}>
          <S.CustomGridItem w="100%" h="100%">
            <S.TitleContainer style={{ color: `${theme.titleAbout}` }}>
              <center>
                <S.Title className="fw-bold">Yuri Vinicius</S.Title>
                <S.Description>
                  Desenvolvedor FullStack <br></br> 23 Anos
                </S.Description>
              </center>
            </S.TitleContainer>
          </S.CustomGridItem>
          <GridItem w="20em" h="fit-content">
            <div>
              <center>
                <Image src={profilePhoto} />
              </center>
            </div>
          </GridItem>
        </Grid>
      </S.Container>
    </>
  )
}

export default About
