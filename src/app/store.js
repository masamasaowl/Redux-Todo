import {configureStore} from "@reduxjs/toolkit";

// this is todoSlice.reducer
import todoReducer from "../features/todoSlice"; 

// ask Redux Toolkit to do the store configuration for us
export const store = configureStore({
    // define reducers
    reducer: todoReducer,
}

)