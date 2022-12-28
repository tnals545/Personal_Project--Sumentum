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
    const res: AxiosResponse = yield call(getBackImgAPI);
    yield put(
      getImgDataSuccess({
        altDescription: res.data.alt_description,
        photographer: res.data.user.name,
        imgName: res.data.location.name,
        html: res.data.links.html,
        url: res.data.urls.full,
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
