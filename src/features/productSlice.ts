import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TImageUrls = {
  name: string;
  url: string;
};

export const productSlice = createSlice({
  name: "products",
  initialState: {
    // products: [] as TProducts[],
    imageUrls: [] as TImageUrls[],
  },
  reducers: {
    setImageUrls: (state, action: PayloadAction<TImageUrls[]>) => {
      state.imageUrls = action.payload;
    },
  },
});

export const { setImageUrls } = productSlice.actions;
export default productSlice.reducer;
