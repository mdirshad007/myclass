import { createSlice, nanoid } from "@reduxjs/toolkit";

// Helper functions to safely interact with localStorage
const getEmployeeFromLocalStorage = () => {
  if (typeof localStorage !== "undefined") {
    const storedData = localStorage.getItem("employee");
    console.log("==============>", storedData);
    return storedData ? JSON.parse(storedData) : [];
  }
  return [];
};

const setEmployeeToLocalStorage = (data) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("employee", JSON.stringify(data));
  }
};

const initialState = {
  employee: getEmployeeFromLocalStorage(),
};

const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.employee.push(data);
      setEmployeeToLocalStorage(state.employee);
    },
    removeEmployee: (state, action) => {
      const data = state.employee.filter((item) => item.id !== action.payload);
      state.employee = data;
      setEmployeeToLocalStorage(state.employee);
    },
  },
});

export const { addEmployee, removeEmployee } = EmployeeSlice.actions;
export default EmployeeSlice.reducer;
