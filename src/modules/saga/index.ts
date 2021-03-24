import { all } from "@redux-saga/core/effects";
import loginSaga from "./loginCheck";

function* rootSaga() {
  yield all([loginSaga()]);
}

export default rootSaga;
