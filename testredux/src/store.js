import { configureStore } from "@reduxjs/toolkit";
import add from './feature/add';


export const store = configureStore({
    reducer: {
        add,
        
    }
})