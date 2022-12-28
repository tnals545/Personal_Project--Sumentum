import {
  getWeatherData,
  getWeatherDataSuccess,
  getWeatherDataError,
} from "redux/slice/weatherSlice";
import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { getWeatherAPI } from "pages/api/weatherAPI";

function* getWeather() {
  try {
    const res: AxiosResponse = yield call(getWeatherAPI);
    yield put(
      getWeatherDataSuccess({
        temperature: res.data[0].Temperature.Metric.Value,
        weatherIcon: res.data[0].WeatherIcon,
        weatherText: res.data[0].WeatherText,
      })
    );
  } catch (error) {
    yield put(getWeatherDataError(error));
  }
}

function* watchGetWeather() {
  yield takeLatest(getWeatherData, getWeather);
}

export default function* getWeatherSaga() {
  yield all([fork(watchGetWeather)]);
}
