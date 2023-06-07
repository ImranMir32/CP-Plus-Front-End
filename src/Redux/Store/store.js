import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../Slice/globalSlice";

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

export default store;
