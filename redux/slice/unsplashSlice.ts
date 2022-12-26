import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface Image {
  altDescription: string;
  photographer: string;
  imgName: string;
  html: string;
  url: string;
}

interface UnsplashState {
  loading: boolean;
  data: Image;
  error: AxiosError | unknown;
}

const initialState: UnsplashState = {
  loading: false,
  data: {
    altDescription: "",
    photographer: "",
    imgName: "",
    html: "",
    url: "",
  },
  error: null,
};

const unsplashSlice = createSlice({
  name: "background-img",
  initialState,
  reducers: {
    getImgData: (state) => {
      state.loading = true;
    },
    getImgDataSuccess: (state, action: PayloadAction<Image>) => {
      state.data = action.payload;
      state.loading = false;
    },
    getImgDataError: (state, action: PayloadAction<AxiosError | unknown>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getImgData, getImgDataSuccess, getImgDataError } =
  unsplashSlice.actions;
export const unsplashReducer = unsplashSlice.reducer;
