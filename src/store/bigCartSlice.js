import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShopData = createAsyncThunk(
  "bigCartSlice/fetchShopData",
  async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;

      const shopDataWithCounter = data.map((item) => ({
        ...item,
        counter: 1,
      }));

      return shopDataWithCounter;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = { shopData: [], bigCart: 0, favorite: [], cart: [] };

export const bigCartSlice = createSlice({
  name: "bigCartSlice",
  initialState,
  reducers: {
    addPopUp(state, action) {
      state.bigCart = action.payload;
    },
    removePopUp(state) {
      state.bigCart = 0;
    },
    CartCounterIncrease(state, action) {
      const itemId = action.payload;
      state.shopData[itemId - 1].counter++;
      if (state.bigCart.counter) {
        state.bigCart.counter++;
      }
    },
    CartCounterDecrease(state, action) {
      const itemId = action.payload;
      if (state.shopData[itemId - 1].counter > 1) {
        state.shopData[itemId - 1].counter--;
        if (state.bigCart.counter) {
          state.bigCart.counter--;
        }
      }
    },
    toggleCart(state, action) {
      const itemToAdd = action.payload;
      const index = state.cart.findIndex((item) => item === itemToAdd);
      if (index === -1) {
        state.cart.push(itemToAdd);
      } else {
        state.cart = state.cart.filter((item) => item !== itemToAdd);
      }
    },
    toggleFavorite(state, action) {
      const itemToAdd = action.payload;
      const index = state.favorite.findIndex((item) => item === itemToAdd);
      if (index === -1) {
        state.favorite.push(itemToAdd);
      } else {
        state.favorite = state.favorite.filter((item) => item !== itemToAdd);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShopData.fulfilled, (state, action) => {
      state.shopData = action.payload;
    });
  },
});

export const {
  addPopUp,
  removePopUp,
  CartCounterIncrease,
  CartCounterDecrease,
  toggleCart,
  toggleFavorite,
} = bigCartSlice.actions;
export default bigCartSlice.reducer;
