import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import LayoutCutom from "./layout"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

const App = () => {
  return (
    <Routes>
      <Route element={<LayoutCutom />}>
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App