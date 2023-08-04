import { configureStore } from "@reduxjs/toolkit";
import menuReducer from '@/redux/features/menuSlice'
import formReducer from '@/redux/features/formSlice'

export const store = configureStore({
  reducer: {
    menuReducer,
    formReducer
  },
});