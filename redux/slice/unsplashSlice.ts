import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
};

const unsplashSlice = createSlice({
  name: "background-img",
  initialState,
  reducers: {
    getBackgroundData: (state, action: PayloadAction<Image>) => {
      state.data = action.payload;
    },
  },
});

export const { getBackgroundData } = unsplashSlice.actions;
export const unsplashReducer = unsplashSlice.reducer;
