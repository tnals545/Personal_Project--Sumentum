import axios from "axios";

interface GeoPosition {
  lat: number;
  lng: number;
}

export const getLocationAPI = async ({ lat, lng }: GeoPosition) => {
  return await axios.get(
    `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.NEXT_PUBLIC_ACCUWEATHER_KEY}&q=${lat}%2C${lng}&language=ko-kr`
  );
};

export const getWeatherAPI = async (locationKey: number) => {
  return await axios.get(
    `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.NEXT_PUBLIC_ACCUWEATHER_KEY}&language=ko-kr`
  );
};
