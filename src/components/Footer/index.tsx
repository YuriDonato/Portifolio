import { useAuth } from '../../data/AuthProvider'
import * as S from './styles'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

const Footer = () => {
  const { setCurrentPage } = useAuth()

  return (
    <section id="rodape">
      <S.FooterContainer>
        <S.FooterSocial>
          <h5>Siga-me</h5>
          <S.FooterLinks
            className="linkedin"
            href="https://www.linkedin.com/in/yuri-donato/"
          >
            <IoLogoLinkedin color="white" />
          </S.FooterLinks>
          <S.FooterLinks href="https://github.com/YuriDonato">
            <IoLogoGithub />
          </S.FooterLinks>
        </S.FooterSocial>

        <S.FooterLinks onClick={() => setCurrentPage('home')}>
          Inicio
        </S.FooterLinks>
        <S.FooterLinks onClick={() => setCurrentPage('experiencias')}>
          Projetos
        </S.FooterLinks>

        <S.FooterYuri>© Yuri Vinicius 2023</S.FooterYuri>
      </S.FooterContainer>
    </section>
  )
}

export default Footer
