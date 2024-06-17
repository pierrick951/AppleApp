// store.js
import { configureStore } from "@reduxjs/toolkit";
import addAppleReducer from './feature/addAppleSlice';
import priceUPReducer from './feature/priceUpSlice';

export const store = configureStore({
    reducer: {
        addApple: addAppleReducer,
        priceUP: priceUPReducer,
    }
});

export default store;
