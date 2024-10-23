import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cartlist',
    initialState:[],
    reducers:{
        addCartItem: (state,action)=>{
            state.push(action.payload)

        },
        removeCartItem:(state,action)=>{
            return state.filter((item)=>item.id!=action.payload)
        },

        emptyCart:(state)=>{
            return state = []
        }
        
        
    }

})

export const {addCartItem,removeCartItem,emptyCart} = cartSlice.actions
export default cartSlice.reducer