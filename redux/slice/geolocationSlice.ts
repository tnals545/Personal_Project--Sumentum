import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface GeolocationData {
  lat: number;
  lng: number;
}

const initialState: GeolocationData = {
  lat: 0,
  lng: 0,
};

const geolocationSlice = createSlice({
  name: "geoposition",
  initialState,
  reducers: {
    getGeolocationData(state, action: PayloadAction<GeolocationData>) {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
});

export const { getGeolocationData } = geolocationSlice.actions;

export const geolocationReducer = geolocationSlice.reducer;
