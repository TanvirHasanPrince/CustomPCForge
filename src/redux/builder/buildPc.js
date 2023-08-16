// Redux reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  processors: [],
  processorsPrice: 0,
  motherboards: [],
  motherboardPrice: 0,
  ram:[],
  ramPrice:0,
  psu:[],
  psuPrice: 0,
  hdd:[],
  hddPrice: 0,
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
        state.processorsPrice = state.processorsPrice + productData.price;
      } else if (productCategory === "motherboards") {
        state.motherboards.push({ ...productData });
        state.motherboardPrice = state.motherboardPrice + productData.price;
      } else if (productCategory === "ram") {
        state.ram.push({ ...productData });
        state.ramPrice = state.ramPrice + productData.price;
      } else if (productCategory === "psu") {
        state.psu.push({ ...productData });
        state.psuPrice = state.psuPrice + productData.price;
      } else if (productCategory === "hdd") {
        state.hdd.push({ ...productData });
        state.hddPrice = state.hddPrice + productData.price;
      }
    },
  },
});

export const { addToBuilder } = buildPcSlice.actions;

export default buildPcSlice.reducer; // Corrected the export here
