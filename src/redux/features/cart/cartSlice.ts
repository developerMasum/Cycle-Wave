import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import { toast } from "sonner";
import { CartProduct } from "../../../types";

type TCartState = {
  products: CartProduct[];
};

const initialState: TCartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<{ product: CartProduct; quantity: number }>
    ) => {
      const product = action.payload.product;
      const quantity = action.payload.quantity;
      if (quantity < 1) {
        toast.error("Product is out of stock..");
      } else {
        const existing = state.products.find((item) => item?.id === product.id);
        if (existing) {
          const totalQuantity = existing.orderQuantity + product.orderQuantity;
          existing.orderQuantity =
            totalQuantity > quantity ? quantity : totalQuantity;
        } else {
          const newProduct = product;
          newProduct.orderQuantity =
            newProduct.orderQuantity > quantity
              ? quantity
              : newProduct.orderQuantity;
          state.products.push(newProduct);
        }
        toast.success("Product Has added to cart!!");
      }
    },

    increaseQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.products.find((product) => product.id === id);
      if (item && item.orderQuantity < quantity) {
        item.orderQuantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.products.find((product) => product.id === id);
      if (item && item.orderQuantity > 1) {
        item.orderQuantity -= 1;
      }
    },

    removeProduct: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.products = state.products.filter((item) => item.id !== id);
    },

    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const selectCurrentCartProducts = (state: RootState) =>
  state.cart.products;

export const {
  addProduct,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
