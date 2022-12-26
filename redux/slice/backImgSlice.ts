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
  data: Image;
  error: AxiosError | unknown;
}

const initialState: BackImgState = {
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

const backImgSlice = createSlice({
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
  backImgSlice.actions;
export const backImgReducer = backImgSlice.reducer;
