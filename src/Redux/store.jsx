import { configureStore } from "@reduxjs/toolkit";
import CartPageReducer from "./CartPageSlice";
import shoppingPageReducer from "./ShoppingPageSlice";


const store = configureStore({
    reducer:{
        cartpage:CartPageReducer,
        shoppingpage:shoppingPageReducer
    }
})

export default store