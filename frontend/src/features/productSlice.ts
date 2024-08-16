import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProducts } from "./cartSlice";

type TProductsCategories = {
  running: TProducts[];
  training: TProducts[];
  walking: TProducts[];
  specialOffer: TProducts[];
  trending: TProducts[];
};

export const productSlice = createSlice({
  name: "products",
  initialState: {
    categories: {} as TProductsCategories,
  },
  reducers: {
    setProducts: (state, action: PayloadAction<TProductsCategories>) => {
      state.categories = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
