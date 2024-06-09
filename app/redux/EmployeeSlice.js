import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    employee: JSON.parse(localStorage.getItem("employee")) || [],
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
            localStorage.setItem("employee", JSON.stringify(state.employee));
        },
        removeEmployee: (state, action) => {
            const data = state.employee.filter((item) => item.id !== action.payload);
            state.employee = data;
            localStorage.setItem("employee", JSON.stringify(state.employee));
        },
    },
});

export const { addEmployee, removeEmployee } = EmployeeSlice.actions;
export default EmployeeSlice.reducer;