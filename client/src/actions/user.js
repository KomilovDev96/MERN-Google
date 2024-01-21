import axios from 'axios'
import { setUser } from '../store/reducers/userReducers'
import { toast } from 'react-toastify'
const token = JSON.parse(localStorage.getItem('token'))
export const registerUser = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration', {
            email,
            password
        })
        toast.success(response.data.message)
    } catch (err) {
        toast.error(`${err.response.data.message}`)
    }
}

export const loginUser = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('https://merncolud-e3e7a94f70cd.herokuapp.com/api/auth/login', {
                email,
                password
            })
            await dispatch(setUser(response.data.user))
            localStorage.setItem('token', JSON.stringify(response.data.token))
        } catch (err) {
            console.log(err)
        }
    }

}
export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get('https://merncolud-e3e7a94f70cd.herokuapp.com/api/auth/auth', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', JSON.stringify(response.data.token))
          
        } catch (err) {
            console.log(err)
        }
    }

}