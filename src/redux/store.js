import { configureStore } from "@reduxjs/toolkit";
import buildReducer from '../redux/builder/buildPc'

const store = configureStore({
  reducer: {
    build: buildReducer,
  },
});



export default store;
