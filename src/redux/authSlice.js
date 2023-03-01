import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(_, { payload }) {
      return { user: payload };
    },
    singOut() {
      return initialState;
    },
  },
});

export const { signIn, singOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
