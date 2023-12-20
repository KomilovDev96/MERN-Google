import axios from 'axios'
import { setUser } from '../store/reducers/userReducers'

export const registerUser = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration', {
            email,
            password
        })
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

export const loginUser = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
    }

}