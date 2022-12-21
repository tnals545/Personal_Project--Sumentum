import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherState<T, S> {
  locationData: T | undefined;
  weatherData: S | undefined;
}

interface LocationData {
  key: number;
  localizedName: string;
}
interface WeatherData {
  temperature: number;
  weatherIcon: number;
  weatherText: string;
}

const initialState: WeatherState<LocationData, WeatherData> = {
  locationData: undefined,
  weatherData: undefined,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLocationData(state, action: PayloadAction<LocationData>) {
      state.locationData = action.payload;
    },
    setWeatherData(state, action: PayloadAction<WeatherData>) {
      state.weatherData = action.payload;
    },
  },
});

export const { setLocationData, setWeatherData } = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;
