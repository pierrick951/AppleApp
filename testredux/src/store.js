import { configureStore } from "@reduxjs/toolkit";
import addAppleReducer from './feature/add';


export const store = configureStore({
    reducer: {
        addApple: addAppleReducer,
        
    }
})