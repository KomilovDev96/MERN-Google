import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import LayoutCutom from "./layout"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { useDispatch, useSelector } from "react-redux"
import FilePage from "./pages/FilePage"
import { useEffect } from "react"
import { auth } from "./actions/user"

const App = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  const token = JSON.parse(localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      dispatch(auth())
    }
  }, [])

  if (isAuth) {
    return (
      <Routes>
        <Route element={<LayoutCutom />}>
          <Route index element={<MainPage />} />
          <Route path="file" element={<FilePage />} />
          <Route path="*" element={<>404</>} />
        </Route>
      </Routes>
    )
  } else {
    return (
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    )
  }


}

export default App