import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import getImgSaga from "redux/sagas/backImgSaga";
import { todoReducer } from "redux/slice/todoListSlice";
import { accountReducer } from "redux/slice/accountSlice";
import { weatherReducer } from "redux/slice/weatherSlice";
import { backImgReducer } from "redux/slice/backImgSlice";
import { geolocationReducer } from "./slice/geolocationSlice";
import getLocationSaga from "./sagas/locationSaga";
import getWeatherSaga from "./sagas/weatherSaga";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([fork(getImgSaga), fork(getLocationSaga), fork(getWeatherSaga)]);
}

const createStore = () => {
  const store = configureStore({
    reducer: {
      todos: todoReducer,
      account: accountReducer,
      weather: weatherReducer,
      geolocation: geolocationReducer,
      backImg: backImgReducer,
    },
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);

  return store;
};

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
