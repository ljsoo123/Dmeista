import { put, delay, takeEvery } from "@redux-saga/core/effects";
import { take } from "redux-saga/effects";
import axios from "axios";
import dotenv from "dotenv";
import {
  loginState,
  loginStateSaga,
  LOGINSTATE,
  LOGINSTATE_SAGA,
  MODALSTATE,
  MODALSTATE_SAGA,
  modalState,
  SIGNUPSTATE,
  SIGNUPSTATE_SAGA,
  signUpState,
  friendState,
  FRIENDSTATE_SAGA,
  changeInfo,
  CHANGEINFO_SAGA,
  changePassword,
  CHANGEPASSWORD_SAGA,
  changeEmail,
  CHANGEEMAIL_SAGA,
  newPost,
  NEWPOST_SAGA,
  NEWPOST,
} from "../../action/loginCheck";
import proc from "redux-saga/lib/proc";

dotenv.config();

function* loginStateSagaFunc() {
  yield put(loginState());
}

function* modalStateSagaFunc() {
  yield put(modalState());
}

function* signUpStateSagaFunc() {
  yield put(signUpState());
}

function* friendStateSagaFunc() {
  yield put(friendState());
}

function* changeInfoSagaFunc() {
  yield put(changeInfo());
}

function* changePasswordSagaFunc() {
  yield put(changePassword());
}

function* changeEmailSagaFunc() {
  yield put(changeEmail());
}

function* newPostSagaFunc() {
  yield put(newPost());
}

function* loginSaga() {
  yield takeEvery(LOGINSTATE_SAGA, loginStateSagaFunc);
  yield takeEvery(MODALSTATE_SAGA, modalStateSagaFunc);
  yield takeEvery(SIGNUPSTATE_SAGA, signUpStateSagaFunc);
  yield takeEvery(FRIENDSTATE_SAGA, friendStateSagaFunc);
  yield takeEvery(CHANGEINFO_SAGA, changeInfoSagaFunc);
  yield takeEvery(CHANGEPASSWORD_SAGA, changePasswordSagaFunc);
  yield takeEvery(CHANGEEMAIL_SAGA, changeEmailSagaFunc);
  yield takeEvery(NEWPOST_SAGA, newPostSagaFunc);
}

export default loginSaga;
