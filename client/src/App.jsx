import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import LayoutCutom from "./layout"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { useSelector } from "react-redux"
import { AuthProvider } from "./provider/AuthProvider"
import { RequierAuth } from "./provider/RequireProvider"

const App = () => {
  // const isAuth = useSelector(state => state.user.isAuth)
  // console.log(isAuth)
  return (
    <AuthProvider>
      <Routes>
        <Route element={<LayoutCutom />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="about" element={<RequierAuth><>About</></RequierAuth>} />
        </Route>
      </Routes>
    </AuthProvider>

  )
}

export default App