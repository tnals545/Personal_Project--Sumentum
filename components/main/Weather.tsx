import { getLocationAPI, getWeatherAPI } from "pages/api/weatherAPI";
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
          getLocationAPI({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }).then((res) => {
            const resData = res.data.ParentCity;
            dispatch(
              setLocationData({
                key: resData.Key,
                localizedName: resData.LocalizedName,
              })
            );
          });
        },
        () => {
          alert("Your location could not be found.");
        }
      );
    }
    if (locationData !== undefined) {
      getWeatherAPI(locationData.key).then((res) => {
        const resData = res.data[0];
        dispatch(
          setWeatherData({
            temperature: resData.Temperature.Metric.Value,
            weatherIcon: resData.WeatherIcon,
            weatherText: resData.WeatherText,
          })
        );
      });
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
