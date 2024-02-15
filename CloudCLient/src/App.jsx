import React, { useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'
import LayoutCustom from '@/layout'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import MainPage from '@/pages/MainPage'
import { useDispatch, useSelector } from "react-redux"
import { AuthUser } from '@/store/Features/User.slice';
import DiscPage from '@/pages/DiscPage'

export default function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      dispatch(AuthUser())
    }
  }, [])

  if (isAuth) {
    return (
      <Routes>
        <Route element={<LayoutCustom />}>
          <Route index element={<MainPage />} />
          <Route path="deck" element={<DiscPage />} />
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
