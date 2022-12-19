import { getLocation, getWeather } from "pages/api/weatherAPI";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setLocationData, setWeatherData } from "redux/slice/weatherSlice";
import WeatherIcon from "components/main/WeatherIcon";

const Weather = () => {
  const locationData = useAppSelector((state) => state.weather.locationData);
  const weatherData = useAppSelector((state) => state.weather.weatherData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (locationData === undefined) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }).then((res) =>
            dispatch(
              setLocationData({
                key: res.data.Key,
                localizedName: res.data.LocalizedName,
              })
            )
          );
        },
        () => {
          alert("Your location could not be found.");
        }
      );
    }
    if (locationData !== undefined) {
      getWeather(locationData.key).then((res) =>
        dispatch(
          setWeatherData({
            temperature: res.data[0].Temperature.Metric.Value,
            weatherIcon: res.data[0].WeatherIcon,
            weatherText: res.data[0].WeatherText,
          })
        )
      );
    }
  }, [dispatch, locationData]);

  console.log(locationData, weatherData);

  return (
    <div>
      <WeatherIcon />
      <span>{locationData?.localizedName}</span>
      <span>{weatherData?.temperature}</span>
      <span>{weatherData?.weatherText}</span>
    </div>
  );
};

export default Weather;
