import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TProducts = {
  id: number;
  name: string;
  price: number;
  sale: number;
  stars: number;
  quantity?: number | 0;
  imgUrl?: string;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as TProducts[],
    toggleCart: false,
    resume: {
      quantity: 0,
      subTotal: 0,
      discount: 0.1,
    },
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
      state.resume.subTotal += product.price * (1 - product.sale);
      state.resume.quantity += 1;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.resume.subTotal =
          state.resume.subTotal +
          (quantity - (state.items[index].quantity || 1)) *
            (state.items[index].price * (1 - state.items[index].sale));
        state.resume.quantity += quantity - (state.items[index].quantity || 1);

        state.items[index].quantity = quantity;
      }
    },
    removeProduct: (state, action) => {
      // state.resume.subTotal = state.resume.subTotal - (
      //   state.items.find((item) => item.id === action.payload)?.price || 0
      // )
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
