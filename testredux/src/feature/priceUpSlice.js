// feature/priceUpSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const priceUP = createSlice({
    name: "priceUP",
    initialState,
    reducers: {
        increasePrice: (state) => {
            state.value += 2.99;
        },
        decreasePrice: (state) => {
            state.value -= 2.99;
        },
        increMultiple: (state, action) => {
            state.value += action.payload;
        },
        decreMultiple: (state, action) => {
            state.value -= action.payload;
        }
    }
})

export const { increasePrice, decreasePrice, increMultiple, decreMultiple } = priceUP.actions;
export default priceUP.reducer;
