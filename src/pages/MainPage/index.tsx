import Footer from '../../components/Footer'
import Header from '../../components/Header'
import About from '../../components/MainPage/About'
import Contact from '../../components/MainPage/Contact'
import Experience from '../../components/MainPage/Experience'
import Introduction from '../../components/MainPage/Introduction'
import * as S from './styles'
const MainPage = () => {
  return (
    <div>
      <S.StyledMatrixRaining></S.StyledMatrixRaining>
      <Header />
      <About />
      <Introduction />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default MainPage
