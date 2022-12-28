import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import WeatherIcon from "components/main/WeatherIcon";
import { getGeolocationData } from "redux/slice/geolocationSlice";
import { getLocationData, getWeatherData } from "redux/slice/weatherSlice";
import store from "redux/store";

const Weather = () => {
  const locationData = useAppSelector(
    (state) => state.weather.location.locationInfo
  );
  const weatherData = useAppSelector(
    (state) => state.weather.weather.weatherInfo
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (locationData === null) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(
            getGeolocationData({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
          );
          dispatch(getLocationData());
        },
        () => {
          alert("Your location could not be found.");
        }
      );
    }
    if (locationData !== null) {
      dispatch(getWeatherData());
    }
  }, [dispatch, locationData]);

  return (
    <div>
      <span>
        <WeatherIcon />
      </span>
      <span>{locationData?.localizedName}</span>
      <span>{weatherData?.temperature}</span>
      <span>{weatherData?.weatherText}</span>
    </div>
  );
};

export default Weather;
