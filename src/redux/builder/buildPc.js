// Redux reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const buildPcSlice = createSlice({
  name: "buildPc",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.products.push({ ...action.payload });
    },
  },
});

export const { addToBuilder } = buildPcSlice.actions;

export default buildPcSlice.reducer; // Corrected the export here
