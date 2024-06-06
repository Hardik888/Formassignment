import { createSlice } from "@reduxjs/toolkit";
import { FormData } from "../Api/formInterface";

const initialState: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFirstName: (state: FormData, action) => {
      state.firstName = action.payload;
    },
    updateLastName: (state: FormData, action) => {
      state.lastName = action.payload;
    },
    updateEmail: (state: FormData, action) => {
      state.email = action.payload;
    },
    updateAddress: (state: FormData, action) => {
      state.address = action.payload;
    },
    resetData: (state: FormData) => {
      Object.assign(state, initialState);
    },
    submitFormSuccess: (state: FormData) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  updateFirstName,
  updateLastName,
  updateEmail,
  updateAddress,
  resetData,
  submitFormSuccess,
} = formSlice.actions;

export default formSlice.reducer;
