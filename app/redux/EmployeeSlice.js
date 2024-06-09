import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    employee:[],
}
const EmployeeSlice=createSlice({
    name:"employee",
    initialState,
    reducers:{
        addEmployee:(state,action)=>{
            console.log(action)
            const data={
                id:nanoid(),
                name:action.payload,
            }
            state.employee.push(data)
        },
        removeEmployee:(state,action)=>{
            const data = state.employee.filter((item) => {
                return item.id !== action.payload; //remove data
              });
              state.employee = data;
        }
    }
})

export const {addEmployee,removeEmployee}=EmployeeSlice.actions
export default EmployeeSlice.reducer
