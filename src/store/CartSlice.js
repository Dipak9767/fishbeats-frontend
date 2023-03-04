import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'products',
    initialState:{
        cartData:[]
    },
    reducers:{
        addtoCart(state , action){
            const data = action.payload
            console.log(data)
            return data;
        }
    }
})

export const {addtoCart} = CartSlice.actions;
export default CartSlice.reducer