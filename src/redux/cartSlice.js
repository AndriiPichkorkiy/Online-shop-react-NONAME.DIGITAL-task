import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(store, { payload: id }) {
      const index = store.products.findIndex((product) => product.id === id);
      if (index !== -1) store.products[index].count += 1;
      else store.products.push({ id, count: 1 });
    },
    deleteProductFromCart(store, { payload: id }) {
      store.products = store.products.filter((product) => product.id !== id);
    },
    removeProductFromCart(store, { payload: id }) {
      const index = store.products.findIndex((product) => product.id === id);
      const total = (store.products[index].count -= 1);
      if (total <= 0)
        store.products = store.products.filter((product) => product.id !== id);
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  deleteProductFromCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
