import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "@/api"


const initialState = {
    user: null,
    loading: false,
    status: ""
}


export const UserLogin = createAsyncThunk('user/login', async (params, thunkAPI) => {
    try {
        const res = await api.post('/api/auth/login', params)
        console.log(res.data)
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
export const UserSslice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(UserLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(UserLogin.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(UserLogin.rejected, (state, action) => {
                state.loading = false
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
    },
})

export default UserSslice.reducer