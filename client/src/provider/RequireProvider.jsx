import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "./AuthProvider"


export const RequierAuth = ({ children }) => {
    const location = useLocation()
    const { isAuth, token } = useAuth
    
    if (!token) {
        return <Navigate to="/login" state={{ from: location }} />
    }
    return children

}