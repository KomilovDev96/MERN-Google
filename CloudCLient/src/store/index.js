import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './RootReduser'

export const store = configureStore({
    devTools: true,
    reducer: reducers,
})