import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice";
import employeeReducer from "./EmployeeSlice"
export const store = configureStore({
  reducer:{
    productData:productReducer,
    employeeData:employeeReducer,
  } // <- Here is the correction
});
