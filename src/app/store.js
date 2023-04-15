import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "../app/Slices/TodoSlice";

const store = configureStore({
    reducer: TodoReducer
})

export default store;