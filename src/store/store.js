import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import bigCartSlice from "./bigCartSlice";

const rootReducer = combineReducers({
  bigCartSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
