import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "@/api"

const initialState = {
    files: [],
    currentDir: null,
    popupDisplay: 'none'
}

export const FIleSclice = createSlice({
    name: 'fileSclice',
    initialState,
    reducers: {
        SetPopapDisplay: (state, action) => {
            state.popupDisplay = action.payload
        },
    },
})

export const { SetPopapDisplay, } = FIleSclice.actions

export default FIleSclice.reducer