import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { GlobalCss } from './styles'
import CustomRoutes from './routes'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { darkModeColors, lightModeColors } from './theme'
import './scrollbar.css'
import { AuthProvider } from './data/AuthProvider'
import { LanguageProvider } from './data/Language'
import { Analytics } from '@vercel/analytics/react';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ''
      }
    })
  }
})

function App() {
  const [mode, setMode] = useState('dark')

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <LanguageProvider>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <ThemeProvider
            theme={mode === 'light' ? lightModeColors : darkModeColors}
          >
            <BrowserRouter>
              <GlobalCss />
              <Analytics />
              <CustomRoutes toggleMode={toggleMode} themeName={mode} />
            </BrowserRouter>
          </ThemeProvider>
        </AuthProvider>
      </ChakraProvider>
    </LanguageProvider>
  )
}

export default App
