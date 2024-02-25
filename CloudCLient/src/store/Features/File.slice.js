import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "@/api"

const initialState = {
    files: [],
    currentDir: null,
    popupDisplay: 'none',
    loading: false
}

export const GetFiles = createAsyncThunk('get/files', async (dirID, thunkAPI) => {
    try {
        const token = localStorage.getItem('token')
        let url = 'api/files'
        if (dirID) {
            url = `api/files/?parent=${dirID}`
        }
        const res = await api.get(url, {
            headers: {
                Authorization: `Bearer ${token} `
            }
        })
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
export const CreateFiles = createAsyncThunk('create/files', async (params, thunkAPI) => {
    try {
        const token = localStorage.getItem('token')
        const res = await api.post('/api/files', {
            headers: {
                Authorization: `Bearer ${token} `
            }
        })
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



export const FIleSclice = createSlice({
    name: 'fileSclice',
    initialState,
    reducers: {
        SetPopapDisplay: (state, action) => {
            state.popupDisplay = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            // GET FIles
            .addCase(GetFiles.pending, (state) => {
                state.loading = true
            })
            .addCase(GetFiles.fulfilled, (state, action) => {
                state.loading = false
                state.files = action.payload
            })
            .addCase(GetFiles.rejected, (state, action) => {
                state.loading = false
            })
    },
})

export const { SetPopapDisplay, } = FIleSclice.actions

export default FIleSclice.reducer