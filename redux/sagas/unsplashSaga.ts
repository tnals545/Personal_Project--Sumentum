import {
  getImage,
  getImageSuccess,
  getImageError,
} from "redux/slice/unsplashSlice";
import { getImageAPI } from "pages/api/unsplashAPI";
import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import { AxiosResponse } from "axios";

function* getImageSaga() {
  try {
    const response: AxiosResponse = yield call(getImageAPI);
    yield put(getImageSuccess(response.data));
  } catch (error) {
    yield put(getImageError(error));
  }
}

function* watchGetImage() {
  yield takeLatest(getImage, getImageSaga);
}

export default function* unsplashSaga() {
  yield all([fork(watchGetImage)]);
}
