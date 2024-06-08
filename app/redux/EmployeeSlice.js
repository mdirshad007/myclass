import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    employee:[],
}
const EmployeeSlice=createSlice({
    name:"employee",
    initialState,
    reducers:{
        addEmployee:(state,action)=>{
            const data={
                id:nanoid(),
                name:action.payload,
            }
            state.employee.push(data)
        }
    }
})

export const {addEmployee}=EmployeeSlice.actions
export default EmployeeSlice.reducer
