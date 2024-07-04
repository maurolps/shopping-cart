import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import productSlice from "../features/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
