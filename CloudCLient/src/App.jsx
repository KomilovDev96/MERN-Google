import React, { useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'
import LayoutCustom from '@/layout'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import MainPage from '@/pages/MainPage'
import { useDispatch, useSelector } from "react-redux"
import { AuthUser } from '@/store/Features/User.slice';

export default function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(AuthUser())
  }, [])

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
