import { put, delay, takeEvery } from "@redux-saga/core/effects";
import {
  loginState,
  loginStateSaga,
  LOGINSTATE,
  LOGINSTATE_SAGA,
} from "../../action/loginCheck";

function* loginStateSagaFunc() {
  yield put(loginState());
}

function* loginSaga() {
  yield takeEvery(LOGINSTATE_SAGA, loginStateSagaFunc);
}

export default loginSaga;
