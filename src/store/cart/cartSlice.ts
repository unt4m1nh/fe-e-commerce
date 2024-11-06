import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { CartItem } from '../../types/type';

export const cartSlice = createSlice({
    name: 'cart',
    initialState : [] as CartItem[],    
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.push(action.payload);
            console.log(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
            state = state.filter((item) => item.id !== action.payload.id)
        },
        removeAllItem: (state) => {
            state = []
            localStorage.setItem('cartState', JSON.stringify(state))
        }
    }
})

// this is for dispatch
export const { addToCart, removeFromCart, removeAllItem } = cartSlice.actions;

export const cartSelector = (state: RootState) => state.cartReducer

// this is for configureStore
export default cartSlice.reducer;
