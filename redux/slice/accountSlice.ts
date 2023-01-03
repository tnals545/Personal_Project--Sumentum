import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AccountState {
  emailRegex: RegExp;
  passwordRegex: RegExp;
  isValid: boolean;
  errMessage: string | null;
}

const initialState: AccountState = {
  // 이메일 유효성 검사 정규표현식
  emailRegex: /([\w-.!#$%&'+-/=?^_`{|}~]+)@([\w]+.)([a-zA-Z]{2,4}|[0-9]{1,3})$/,
  // 비밀번호 유효성 검사 정규표현식 - 숫자, 영문자, 특수문자 조합으로 8자 이상
  passwordRegex: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
  isValid: true,
  errMessage: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setValid(state, action: PayloadAction<AccountState>) {
      state.isValid = action.payload.isValid;
      state.errMessage = action.payload.errMessage;
    },
  },
});

export const { setValid } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;
