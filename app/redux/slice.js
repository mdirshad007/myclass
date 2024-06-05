const { createSlice, nanoid } = require("@reduxjs/toolkit");
const initialState = {
  products: [],
};

const sliceData = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.products.push(data);
    },
  },
});

export const { addProduct } = sliceData.actions;
export default sliceData.reducer;
