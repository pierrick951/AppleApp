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
        },

        addMultiple: (state, action) => {
            state.value += action.payload
        },
        deleteMultiple: (state,action) => {
            state.value -= action.payload
        }
    }

})

export const { increment, decrement, addMultiple, deleteMultiple} = addApple.actions;
export default addApple.reducer;