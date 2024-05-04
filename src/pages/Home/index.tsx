import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MainPage from '../../components/HomePage'
import * as S from './styles'
import { useEffect, useState } from 'react'

import { scaleDown as Menu } from 'react-burger-menu'
import { PropToggleMode } from '../../models/toggleMode'
import ToggleTheme from '../../components/ToggleTheme'
import { useTheme } from 'styled-components'
import { MdAppSettingsAlt } from 'react-icons/md'
import AdminPage from '../../components/AdminPage'
import Projects from '../Projects'
import ProjectsPage from '../../components/ProjectsPage'
import { useAuth } from '../../data/AuthProvider'
import { EmptyProjectData } from '../../models/Project'

const Home = ({ toggleMode, themeName }: PropToggleMode) => {
  const { currentPage, setCurrentPage, currentProject, setCurrentProject } =
    useAuth()
  const theme = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const MenuStyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: `${theme.burgerBars}`
    },
    bmBurgerBarsHover: {
      background: `${theme.burgerBarsHover}`
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: `${theme.closeButton}`
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: `${theme.menuBackground}`,
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmItemList: {
      padding: '0.8em'
    },
    bmItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: `${theme.menuButtonBackground}`,
      color: `${theme.menuButtonColor}`
    },
    bmOverlay: {
      background: `${theme.overlay}`
    }
  }

  useEffect(() => {
    console.log(`${currentPage} ${currentProject.nameProject}`)
  }, [currentPage])

  const handleCloseMenu = (page: string) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
  }

  return (
    <div id="outer-container">
      <S.StyledMatrixRaining></S.StyledMatrixRaining>
      <Menu
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        styles={MenuStyles}
        isOpen={isMenuOpen}
        onStateChange={(state) => setIsMenuOpen(state.isOpen)}
      >
        <S.CustomButton id="home" onClick={() => handleCloseMenu('home')}>
          Inicio
        </S.CustomButton>
        <S.CustomButton
          id="projects"
          onClick={() => handleCloseMenu('projects')}
        >
          Experiências
        </S.CustomButton>
        {/* <S.CustomButton id="admin" onClick={() => setCurrentPage('admin')}>
          <MdAppSettingsAlt />
        </S.CustomButton> */}

        {/* <S.CustomButton
          id="contact"
          className="menu-item"
          onClick={() => setSelectedPage('contato')}
        >
          Contato
        </S.CustomButton> */}
        {/* <S.CustomButton className="menu-item--small">Settings</S.CustomButton> */}
        {/* <ToggleTheme toggleMode={toggleMode} themeName={themeName} /> */}
      </Menu>
      <S.Main id="page-wrap">
        <S.MainCard>
          <Header />
          {currentPage == 'home' ? <MainPage /> : <></>}
          {currentPage == 'projects' ? <Projects /> : <></>}
          {currentPage == 'project' && <Projects />}
          <Footer />
        </S.MainCard>
      </S.Main>
    </div>
  )
}

export default Home
