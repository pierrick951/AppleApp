import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value:1
}


export const addApple = createSlice({
    name: "add-apple",
    initialState,

})