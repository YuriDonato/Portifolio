import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { useState } from 'react'
import { PropToggleMode } from './models/toggleMode'

const CustomRoutes = ({ toggleMode, themeName }: PropToggleMode) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false) // Estado de autenticação

  // Função para realizar a autenticação (pode ser alterada para se adequar à sua lógica de autenticação)
  const handleLogin = () => {
    setIsAuthenticated(true)
  }
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          isAuthenticated ? ( // Verifica se o usuário está autenticado
            <Admin />
          ) : (
            <Navigate to={'/'}></Navigate>
          )
        }
      ></Route>
      <Route
        path="/"
        element={<Home toggleMode={toggleMode} themeName={themeName} />}
      ></Route>
    </Routes>
  )
}

export default CustomRoutes
