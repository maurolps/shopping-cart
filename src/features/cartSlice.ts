import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Products = {
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
    items: [] as Products[],
    toggleCart: false,
  },
  reducers: {
    addProduct: (state, action: PayloadAction<Products>) => {
      const product = action.payload;
      const index = state.items.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.items[index].quantity = (state.items[index].quantity || 1) + 1;
      } else {
        product.quantity = 1;
        state.items.push(product);
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

export const { addProduct, removeProduct, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
