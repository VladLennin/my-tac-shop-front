import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {IUser, Roles} from "../models/Models"

interface UserState {
    value: IUser
}

const initialState: UserState = {
    value: new IUser(0,
        "Vladlen", Roles.ADMIN, "Marchenko", "",
        "", "", ""
    )
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUser: (state, action: PayloadAction<IUser>) => {
            state.value = action.payload
        },
        changeName: (state, action: PayloadAction<string>) => {
            state.value.name = action.payload
        },

    }
})
export const {changeUser, changeName} = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer