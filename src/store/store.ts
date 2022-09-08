import { configureStore } from '@reduxjs/toolkit'
import {menuSlice} from "./menuSlice";
import {basketSlice} from "./basketSlice";

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        basket:basketSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch