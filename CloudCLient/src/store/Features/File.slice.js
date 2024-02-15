import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "@/api"

const initialState = {
    files: [],
    currentDir: null
}
