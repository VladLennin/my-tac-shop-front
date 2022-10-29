import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {IProduct} from "../models/Models";

interface BasketState {
    value: IProduct[]
}

const initialState: BasketState = {
    value: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.value.push(action.payload)
        },
        delProduct: (state, action: PayloadAction<IProduct>) => {
            state.value = state.value.filter(x => x.id !== action.payload.id)
        },

    }
})
export const {addProduct, delProduct} = basketSlice.actions

export const selectBasket = (state: RootState) => state.basket.value

export default basketSlice.reducer