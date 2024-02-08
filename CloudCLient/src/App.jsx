import React from 'react'

import { Route, Routes } from 'react-router-dom'
import LayoutCustom from './layout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

export default function App() {
  const isAuth = false
  if (isAuth) {
    return (
      <Routes>
        <Route element={<LayoutCustom />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<>404</>} />
        </Route>
      </Routes>
    )
  }
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  )
}