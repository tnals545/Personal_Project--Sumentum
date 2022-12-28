import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface Weather<T, S> {
  location: T;
  weather: S;
}

interface LocationInfo {
  locationKey: number;
  localizedName: string;
}
interface LocationData {
  loading: boolean;
  error: AxiosError | unknown;
  locationInfo: LocationInfo | null;
}

interface WeatherInfo {
  temperature: number;
  weatherIcon: number;
  weatherText: string;
}
interface WeatherData {
  loading: boolean;
  error: AxiosError | unknown;
  weatherInfo: WeatherInfo | null;
}

const initialState: Weather<LocationData, WeatherData> = {
  location: {
    loading: false,
    error: null,
    locationInfo: null,
  },
  weather: {
    loading: false,
    error: null,
    weatherInfo: null,
  },
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getLocationData(state) {
      state.location.loading = true;
    },
    getLocationDataSuccess(state, action: PayloadAction<LocationInfo>) {
      state.location.locationInfo = action.payload;
      state.location.loading = false;
    },
    getLocationDataError(state, action: PayloadAction<AxiosError | unknown>) {
      state.location.error = action.payload;
      state.location.loading = false;
    },
    getWeatherData(state) {
      state.weather.loading = true;
    },
    getWeatherDataSuccess(state, action: PayloadAction<WeatherInfo>) {
      state.weather.weatherInfo = action.payload;
      state.weather.loading = false;
    },
    getWeatherDataError(state, action: PayloadAction<AxiosError | unknown>) {
      state.weather.error = action.payload;
      state.weather.loading = false;
    },
  },
});

export const {
  getLocationData,
  getLocationDataSuccess,
  getLocationDataError,
  getWeatherData,
  getWeatherDataSuccess,
  getWeatherDataError,
} = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;
