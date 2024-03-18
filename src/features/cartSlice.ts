import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Products = {
  id: number;
  name: string;
  price: number;
  sale: number;
  stars: number;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as Products[],
  },
  reducers: {
    addProduct: (state, action: PayloadAction<Products>) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
