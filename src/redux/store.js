import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import airlineSlice from "./slice/airlineSlice";
import rootSaga from "./sagas/airlineSaga";

const sagaMiddleWare = createSagaMiddleware()

const store = configureStore({
  reducer:{
    data:airlineSlice
  },
  middleware:[sagaMiddleWare]
})

sagaMiddleWare.run(rootSaga)

export default store
