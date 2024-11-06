
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    cartReducer
  },
  devTools: true,
});

export type AppStore = typeof store

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']