import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer:{
        user:UserSlice,
        cart:CartSlice
    }
})

export default store;