import { configureStore } from '@reduxjs/toolkit'
import {menuSlice} from "./menuSlice";
import {basketSlice} from "./basketSlice";
import {userSlice} from "./userSlice";

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        basket:basketSlice.reducer,
        user:userSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch