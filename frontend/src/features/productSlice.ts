import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProducts } from "./cartSlice";

type TImageUrls = {
  name: string;
  url: string;
};

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
    imageUrls: [] as TImageUrls[],
  },
  reducers: {
    setImageUrls: (state, action: PayloadAction<TImageUrls[]>) => {
      state.imageUrls = action.payload;
    },

    setProducts: (state, action: PayloadAction<TProductsCategories>) => {
      state.categories = action.payload;
    },
  },
});

export const { setImageUrls, setProducts } = productSlice.actions;
export default productSlice.reducer;
