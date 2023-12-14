import axios from 'axios'

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