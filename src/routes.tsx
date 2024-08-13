import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/MainPage'
import Admin from './pages/Admin'
import { useState } from 'react'
import { PropToggleMode } from './models/toggleMode'
import { useAuth } from './data/AuthProvider'
import Test from './components/Test'

const CustomRoutes = ({ toggleMode, themeName }: PropToggleMode) => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  )
}

export default CustomRoutes
