const { createSlice, nanoid } = require("@reduxjs/toolkit");
const initialState = {
  products: [],
};

const sliceData = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.products.push(data);
    },
    removeProduct: (state, action) => {
      const data = state.products.filter((item) => {
        return item.id !== action.payload; //remove data
      });
      state.products = data;
    },
  },
});

export const { addProduct, removeProduct } = sliceData.actions;
export default sliceData.reducer;
