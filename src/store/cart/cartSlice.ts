import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { CartItem } from '../../types/type';

export const cartSlice = createSlice({
    name: 'cart',
    initialState : [] as CartItem[],    
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
            state = state.filter((item) => item.id !== action.payload.id)
        },
        removeAllItem: (state) => {
            state = []
        }
    }
})

export const cartSelector = (state: RootState) => state

// this is for dispatch
export const { addToCart, removeFromCart, removeAllItem } = cartSlice.actions;

// this is for configureStore
export default cartSlice.reducer;
