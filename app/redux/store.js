import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice";
import employeeReducer from "./EmployeeSlice";
import todoReduser from "./todoSlice";
export const store = configureStore({
  reducer: {
    productData: productReducer,
    employeeData: employeeReducer,
    todoSlice: todoReduser,
  }, // <- Here is the correction
});
