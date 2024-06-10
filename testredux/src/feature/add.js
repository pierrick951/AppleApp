import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
}


export const addApple = createSlice({
    name: "addApple",
    initialState,
    reducers: {
        increment: (state) => {

            state.value += 1;

        },

        decrement: (state) => {
            state.value -= 1;
        }
    }

})

export const { increment, decrement } = addApple.actions;
export default addApple.reducer;