import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "@/api"


const initialState = {
    user: null,
    loading: false,
    status: "",
    isAuth: false
}


export const UserLogin = createAsyncThunk('user/login', async (params, thunkAPI) => {
    try {
        const res = await api.post('/api/auth/login', params)
        localStorage.setItem('token', res.data.token)
        return res.data
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
)
export const UserRegister = createAsyncThunk('user/register', async (params, thunkAPI) => {
    try {
        const res = await api.post('/api/auth/registration', params)
        return res.data

    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
)

export const AuthUser = createAsyncThunk('user/auth', async (params, thunkAPI) => {
    try {
        const token = localStorage.getItem('token')
        const res = await api.get('/api/auth/auth', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        localStorage.setItem('token', res.data.token)
        return res.data

    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
)
export const UserSslice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        logaut: (state) => {
            state.user = null
            state.isAuth = false
            localStorage.removeItem('token')
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(UserLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(UserLogin.fulfilled, (state, action) => {
                state.loading = false
                state.isAuth = true
                state.user = action.payload
            })
            .addCase(UserLogin.rejected, (state, action) => {
                state.loading = false
                state.isAuth = false
            })
            // UserRegister
            .addCase(UserRegister.pending, (state) => {
                state.loading = true
            })
            .addCase(UserRegister.fulfilled, (state, action) => {
                state.loading = false
                state.status = action.payload
            })
            .addCase(UserRegister.rejected, (state, action) => {
                state.loading = false
            })
            // AuthUser
            .addCase(AuthUser.pending, (state) => {
                state.loading = true
            })
            .addCase(AuthUser.fulfilled, (state, action) => {
                state.loading = false
                state.isAuth = true
                state.user = action.payload
            })
            .addCase(AuthUser.rejected, (state, action) => {
                state.loading = false
            })
    },
})
export const { logaut, } = UserSslice.actions
export default UserSslice.reducer