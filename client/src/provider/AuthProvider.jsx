import { createContext, useContext } from "react"
import { useSelector } from "react-redux"



export const AuthContext = createContext(null)
export const AuthProvider = ({ children }) => {

    const isAuth = useSelector(state => state.user.isAuth)
    const token = localStorage.getItem("token")
    console.log(token)
    const value = { isAuth, token }
    return <AuthContext.Provider value={value} >
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthProvider)
}