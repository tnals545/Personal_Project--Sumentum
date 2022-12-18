import { getLocation, getWeather } from "pages/api/weatherAPI";
import { useState, useEffect } from "react";

interface LocationData {
  key: number;
  localizedName: string;
}
interface WeatherData {
  temperature: number;
  weatherIcon: number;
  weatherText: string;
}

const Weather = () => {
  const [locationData, setLocationData] = useState<LocationData>();
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    if (locationData === undefined) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }).then((res) =>
            setLocationData({
              key: res.data.Key,
              localizedName: res.data.LocalizedName,
            })
          );
        },
        () => {
          alert("Your location could not be found.");
        }
      );
    }
    if (locationData !== undefined) {
      getWeather(locationData.key).then((res) =>
        setWeatherData({
          temperature: res.data[0].Temperature.Metric.Value,
          weatherIcon: res.data[0].WeatherIcon,
          weatherText: res.data[0].WeatherText,
        })
      );
    }
  }, [locationData]);

  console.log(locationData, weatherData);

  return (
    <div>
      <span>{locationData?.localizedName}</span>
      <span>{weatherData?.temperature}</span>
      <span>{weatherData?.weatherIcon}</span>
      <span>{weatherData?.weatherText}</span>
    </div>
  );
};

export default Weather;
