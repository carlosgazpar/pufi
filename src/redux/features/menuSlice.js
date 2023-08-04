import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const counter = createSlice({
  name: "menu",
  initialState,
  reducers: {
    triggerDisplay: (state) => {
      state.value = !state.value;
    },
  },
});

export const {
  triggerDisplay
} = counter.actions;
export default counter.reducer;
