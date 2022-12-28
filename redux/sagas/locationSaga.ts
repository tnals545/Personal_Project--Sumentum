import {
  getLocationData,
  getLocationDataSuccess,
  getLocationDataError,
} from "redux/slice/weatherSlice";
import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { getLocationAPI } from "pages/api/weatherAPI";

function* getLocation() {
  try {
    const res: AxiosResponse = yield call(getLocationAPI);
    yield put(
      getLocationDataSuccess({
        locationKey: res.data.ParentCity.Key,
        localizedName: res.data.ParentCity.LocalizedName,
      })
    );
  } catch (error) {
    yield put(getLocationDataError(error));
  }
}

function* watchGetLocation() {
  yield takeLatest(getLocationData, getLocation);
}

export default function* getLocationSaga() {
  yield all([fork(watchGetLocation)]);
}
