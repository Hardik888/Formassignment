import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FormData } from "../Api/formInterface";

const initialState: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  profilePicture: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFirstName: (state: FormData, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    updateLastName: (state: FormData, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    updateEmail: (state: FormData, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updateAddress: (state: FormData, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    updateProfilePicture: (
      state: FormData,
      action: PayloadAction<File | null>
    ) => {
      state.profilePicture = action.payload;
    },
    resetData: (state: FormData) => {
      state.firstName = initialState.firstName;
      state.lastName = initialState.lastName;
      state.email = initialState.email;
      state.address = initialState.address;
      state.profilePicture = initialState.profilePicture;
    },
  },
});

export const {
  updateFirstName,
  updateLastName,
  updateEmail,
  updateAddress,
  updateProfilePicture,
  resetData,
} = formSlice.actions;

export default formSlice.reducer;