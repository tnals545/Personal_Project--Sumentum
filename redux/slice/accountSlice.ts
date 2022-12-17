import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AccountState {
  isValid: boolean;
  errMessage: string;
}

const initialState: AccountState = {
  isValid: true,
  errMessage: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setIsValid(state, action: PayloadAction<boolean>) {
      state.isValid = action.payload;
    },
    setErrMessage(state, action: PayloadAction<string>) {
      state.errMessage = action.payload;
    },
  },
});

export const { setIsValid, setErrMessage } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
