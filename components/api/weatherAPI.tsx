import axios from "axios";
import store from "redux/store";

export const getLocationAPI = async () => {
  const lat = store.getState().geolocation.lat;
  const lng = store.getState().geolocation.lng;

  return await axios.get(
    `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.NEXT_PUBLIC_ACCUWEATHER_KEY}&q=${lat}%2C${lng}&language=ko-kr`
  );
};

export const getWeatherAPI = async () => {
  const locationKey =
    store.getState().weather.location.locationInfo?.locationKey;

  return await axios.get(
    `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.NEXT_PUBLIC_ACCUWEATHER_KEY}&language=ko-kr`
  );
};
