import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import { useState } from 'react'
import { PropToggleMode } from './models/toggleMode'
import { useAuth } from './data/AuthProvider'

const CustomRoutes = ({ toggleMode, themeName }: PropToggleMode) => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />}></Route>
      <Route
        path="/"
        element={<Home toggleMode={toggleMode} themeName={themeName} />}
      ></Route>
    </Routes>
  )
}

export default CustomRoutes
