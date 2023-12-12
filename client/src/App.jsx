import { Route, Routes } from "react-router-dom"
import Layout from "./layout"
import MainPage from "./pages/MainPage"

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="login" element={<>Login</>} />
        <Route path="register" element={<>Register</>} />
      </Route>
    </Routes>
  )
}

export default App