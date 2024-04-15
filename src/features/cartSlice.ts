import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TProducts = {
  id: number;
  name: string;
  price: number;
  sale: number;
  stars: number;
  quantity?: number;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as TProducts[],
    toggleCart: false,
  },
  reducers: {
    addProduct: (state, action: PayloadAction<TProducts>) => {
      const product = action.payload;
      const index = state.items.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.items[index].quantity = (state.items[index].quantity || 1) + 1;
      } else {
        product.quantity = 1;
        state.items.push(product);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items[index].quantity = quantity;
      }
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleCart: (state) => {
      state.toggleCart = !state.toggleCart;
    },
  },
});

export const { addProduct, removeProduct, toggleCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
