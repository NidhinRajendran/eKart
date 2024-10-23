import { configureStore } from "@reduxjs/toolkit";
import  wishlistSlice  from "./Slice/wishlistslice";
import  cartSlice  from "./Slice/cartslice";





export const store = configureStore({
    reducer:{
        wishlist: wishlistSlice,
        cartlist: cartSlice

    }
})

export default store