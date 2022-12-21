import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayHaze,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiFog,
  WiShowers,
  WiDayShowers,
  WiStormShowers,
  WiDayStormShowers,
  WiRain,
  WiCloudyGusts,
  WiDayCloudyGusts,
  WiSnow,
  WiDaySnow,
  WiSnowflakeCold,
  WiSleet,
  WiHail,
  WiRainMix,
  WiThermometer,
  WiThermometerExterior,
  WiWindy,
  WiNightClear,
  WiNightAltPartlyCloudy,
  WiNightAltCloudyHigh,
  WiNightAltCloudy,
  WiNightAltShowers,
  WiNightAltStormShowers,
  WiNightAltCloudyGusts,
  WiNightAltSnow,
} from "react-icons/wi";
import { useAppSelector } from "redux/hooks";

interface WeatherIconMap {
  [key: number]: JSX.Element;
}

const WeatherIcon = () => {
  const weatherIcon: any = useAppSelector(
    (state) => state.weather.weatherData?.weatherIcon
  );

  const weatherIconMap: WeatherIconMap = {
    1: <WiDaySunny />,
    2: <WiDaySunnyOvercast />,
    3: <WiDaySunnyOvercast />,
    4: <WiDaySunnyOvercast />,
    5: <WiDayHaze />,
    6: <WiDayCloudy />,
    7: <WiCloud />,
    8: <WiCloudy />,
    11: <WiFog />,
    12: <WiShowers />,
    13: <WiDayShowers />,
    14: <WiDayShowers />,
    15: <WiStormShowers />,
    16: <WiDayStormShowers />,
    17: <WiDayStormShowers />,
    18: <WiRain />,
    19: <WiCloudyGusts />,
    20: <WiDayCloudyGusts />,
    21: <WiDayCloudyGusts />,
    22: <WiSnow />,
    23: <WiDaySnow />,
    24: <WiSnowflakeCold />,
    25: <WiSleet />,
    26: <WiHail />,
    29: <WiRainMix />,
    30: <WiThermometer />,
    31: <WiThermometerExterior />,
    32: <WiWindy />,
    33: <WiNightClear />,
    34: <WiNightAltPartlyCloudy />,
    35: <WiNightAltPartlyCloudy />,
    36: <WiNightAltPartlyCloudy />,
    37: <WiNightAltCloudyHigh />,
    38: <WiNightAltCloudy />,
    39: <WiNightAltShowers />,
    40: <WiNightAltShowers />,
    41: <WiNightAltStormShowers />,
    42: <WiNightAltStormShowers />,
    43: <WiNightAltCloudyGusts />,
    44: <WiNightAltSnow />,
  };

  const executeIcon = (weatherIcon: number) => {
    return weatherIconMap[weatherIcon];
  };

  return executeIcon(weatherIcon);
};

export default WeatherIcon;
