import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";

export const menuSlice = createSlice({
    name: 'flag',
    initialState: {
        value1: false,
        value2:false
    },
    reducers: {
        changeMenu1: (state) => {
            state.value1 = !state.value1;
        },
        changeMenu2: (state) => {
            state.value2 = !state.value2;
        },

    }
})
export const {changeMenu1,changeMenu2} = menuSlice.actions

export const selectMenu = (state: RootState) => state.menu.value1

export default menuSlice.reducer