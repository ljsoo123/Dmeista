import { put, delay, takeEvery, call } from "@redux-saga/core/effects";
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
  LOGINEND_SAGA,
  loginEnd,
  friendRequestList,
  FRIENDREQUESTLIST_SAGA,
  FRIENDREQUESTLIST,
} from "../../action/loginCheck";
import proc from "redux-saga/lib/proc";
import { initialState } from "../../reducer/loginCheck";

const token = localStorage.getItem("token");
const refresh_token = localStorage.getItem("refresh-token");
const userInfo = localStorage.getItem("userInfo");
dotenv.config();

function* loginStateSagaFunc() {
  yield put(loginState());
}

function* friendRequestListSagaFunc() {
  try {
    const data = yield call(
      axios.get,
      "http://3.36.218.14:8080/users/friends/request",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(friendRequestList(data.data.application_responses));
  } catch (err) {
    console.log(err.response);
  }
}

interface ActionType {
  email: string;
  password: string;
}

function* loginEndSagaFunc(action: any) {
  try {
    const data = yield call(axios.post, "http://3.36.218.14:8080/auth", {
      email: action.payload.email,
      password: action.payload.password,
    });
    console.log(data);
    alert("로그인 완료");
    yield put(loginEnd());
    //console.log(data.data.access_token);
    localStorage.setItem("token", data.data.access_token);
    localStorage.setItem("refresh-token", data.data.refresh_token);
    //console.log(localStorage.getItem("token"));
    try {
      const userData = yield call(axios.get, "http://3.36.218.14:8080/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(userData);
      localStorage.setItem("userName", userData.data.username);
      yield put(loginState());
    } catch (err) {
      if (err.data.status == 401) {
        try {
          const refreshToken = yield call(
            axios.put,
            "http://3.36.218.14:8080/auth",
            {
              headers: {
                "X-Refresh-Token": refresh_token,
              },
            }
          );
          console.log(refreshToken);
        } catch (err) {
          console.log(err);
        }
      }
      console.log(err.response);
    }
  } catch (err) {
    alert("이메일 혹은 비밀번호가 틀렸습니다.");
    console.log(err.response);
  }
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
  yield takeEvery(LOGINEND_SAGA, loginEndSagaFunc);
  yield takeEvery(FRIENDREQUESTLIST_SAGA, friendRequestListSagaFunc);
}

export default loginSaga;
