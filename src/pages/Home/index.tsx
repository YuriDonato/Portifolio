import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MainPage from '../../components/HomePage'
import * as S from './styles'
import { useEffect, useState } from 'react'

import { scaleDown as Menu } from 'react-burger-menu'
import { PropToggleMode } from '../../models/toggleMode'
import ToggleTheme from '../../components/ToggleTheme'

import { useTheme } from 'styled-components'
import ProjectsPage from '../../components/ProjectsPage'
import { MdAppSettingsAlt } from 'react-icons/md'
import AdminPage from '../../components/AdminPage'

interface Page {
  selectedPage: string
}

const Home = ({ toggleMode, themeName }: PropToggleMode) => {
  const [selectedPage, setSelectedPage] = useState('home')
  const theme = useTheme()

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

  return (
    <div id="outer-container">
      <S.StyledMatrixRaining></S.StyledMatrixRaining>
      <Menu
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        styles={MenuStyles}
      >
        <S.CustomButton id="home" onClick={() => setSelectedPage('home')}>
          Home
        </S.CustomButton>
        <S.CustomButton
          id="projects"
          onClick={() => setSelectedPage('projects')}
        >
          Projetos
        </S.CustomButton>
        <S.CustomButton id="admin" onClick={() => setSelectedPage('admin')}>
          <MdAppSettingsAlt />
        </S.CustomButton>

        {/* <S.CustomButton
          id="contact"
          className="menu-item"
          onClick={() => setSelectedPage('contato')}
        >
          Contato
        </S.CustomButton> */}
        {/* <S.CustomButton className="menu-item--small">Settings</S.CustomButton> */}
        <ToggleTheme toggleMode={toggleMode} themeName={themeName} />
      </Menu>
      <S.Main id="page-wrap">
        <S.MainCard>
          <Header />
          {selectedPage == 'home' ? <MainPage /> : <></>}
          {selectedPage == 'projects' ? <ProjectsPage /> : <></>}
          {selectedPage == 'admin' ? <AdminPage /> : <></>}
          <Footer />
        </S.MainCard>
      </S.Main>
    </div>
  )
}

export default Home
