import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import unsplashSaga from "./sagas/unsplashSaga";
import { todoReducer } from "./slice/todoListSlice";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([fork(unsplashSaga)]);
}

const createStore = () => {
  const store = configureStore({
    reducer: { todos: todoReducer },
    // middleware: [sagaMiddleware],
    // devTools: true,
  });
  // sagaMiddleware.run(rootSaga);

  return store;
};

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
