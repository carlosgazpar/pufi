import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const form = createSlice({
  name: "form",
  initialState,
  reducers: {
    triggerDisplay: (state) => {
      state.value = !state.value;
    },
  },
});

export const {
  triggerDisplay
} = form.actions;
export default form.reducer;
