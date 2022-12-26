import {
  getImgData,
  getImgDataSuccess,
  getImgDataError,
} from "redux/slice/backImgSlice";
import { getBackImgAPI } from "pages/api/backImgAPI";
import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import { AxiosResponse } from "axios";

function* getImg() {
  try {
    const response: AxiosResponse = yield call(getBackImgAPI);
    yield put(
      getImgDataSuccess({
        altDescription: response.data.alt_description,
        photographer: response.data.user.name,
        imgName: response.data.location.name,
        html: response.data.links.html,
        url: response.data.urls.full,
      })
    );
  } catch (error) {
    yield put(getImgDataError(error));
  }
}

function* watchGetImg() {
  yield takeLatest(getImgData, getImg);
}

export default function* getImgSaga() {
  yield all([fork(watchGetImg)]);
}
