const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  todo: [],
};
const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      console.log(action);
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.todo.push(data);
    },
    removeTodos: (state, action) => {
      console.log("Remove todo item", action);
      const data = state.todo.filter((item) => {
        return item.id !== action.payload;
      });
      state.todo = data;
    },
  },
});

export const { addTodos, removeTodos } = todoSlice.actions;
export default todoSlice.reducer;
