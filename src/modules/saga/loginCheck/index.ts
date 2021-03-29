import { put, delay, takeEvery } from "@redux-saga/core/effects";
import {
  loginState,
  loginStateSaga,
  LOGINSTATE,
  LOGINSTATE_SAGA,
  MODALSTATE,
  MODALSTATE_SAGA,
  modalState,
} from "../../action/loginCheck";

function* loginStateSagaFunc() {
  yield put(loginState());
}

function* loginSaga() {
  yield takeEvery(LOGINSTATE_SAGA, loginStateSagaFunc);
  yield takeEvery(MODALSTATE_SAGA, modalStateSagaFunc);
}

function* modalStateSagaFunc() {
  yield put(modalState());
}

export default loginSaga;
