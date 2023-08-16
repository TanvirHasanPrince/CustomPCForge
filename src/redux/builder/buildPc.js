// Redux reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  processors: [],
  motherboards: [],
  total: 0,
};

const buildPcSlice = createSlice({
  name: "buildPc",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      const  productData  = action.payload;
      const productCategory = productData.category.toLowerCase();
      if (productCategory === "processors") {
        state.processors.push({ ...productData });
      } else if (productCategory === "motherboards") {
        state.motherboards.push({ ...productData });
      }
    },
  },
});

export const { addToBuilder } = buildPcSlice.actions;

export default buildPcSlice.reducer; // Corrected the export here
