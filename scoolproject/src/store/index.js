import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/ikrement'
export const store = configureStore({
    devTools: true,
    reducer: {
        counter: counterSlice,
    },
})