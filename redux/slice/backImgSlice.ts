import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface Image {
  altDescription: string;
  photographer: string;
  imgName: string;
  html: string;
  url: string;
}

interface BackImgState {
  loading: boolean;
  error: AxiosError | unknown;
  backImgData: Image;
}

const initialState: BackImgState = {
  loading: false,
  error: null,
  backImgData: {
    altDescription: "",
    photographer: "",
    imgName: "",
    html: "",
    url: "",
  },
};

const backImgSlice = createSlice({
  name: "background-img",
  initialState,
  reducers: {
    getImgData: (state) => {
      state.loading = true;
    },
    getImgDataSuccess: (state, action: PayloadAction<Image>) => {
      state.backImgData = action.payload;
      state.loading = false;
    },
    getImgDataError: (state, action: PayloadAction<AxiosError | unknown>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getImgData, getImgDataSuccess, getImgDataError } =
  backImgSlice.actions;
export const backImgReducer = backImgSlice.reducer;
