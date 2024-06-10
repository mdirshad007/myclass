import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice";
import todoReduser from "./todoSlice";
export const store = configureStore({
  reducer: {
    productData: productReducer,
    todoSlice: todoReduser,
  },
});
