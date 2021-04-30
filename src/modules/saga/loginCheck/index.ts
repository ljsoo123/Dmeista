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
  POSTCONTENT_SAGA,
  postContent,
  search,
  SEARCH_SAGA,
} from "../../action/loginCheck";
import proc from "redux-saga/lib/proc";
import { initialState } from "../../reducer/loginCheck";

dotenv.config();
function* loginStateSagaFunc() {
  yield put(loginState());
}

function* friendRequestListSagaFunc() {
  try {
    const token = localStorage.getItem("token");
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
    if (err.response.status === 401) {
      const refresh_token = localStorage.getItem("refresh-token");
      yield call(
        axios.put,
        "http://3.36.218.14:8080",
        {},
        { headers: { "X-Refresh-Token": refresh_token } }
      );
    }
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
    alert("로그인 완료");
    yield put(loginEnd());
    localStorage.setItem("token", data.data.access_token);
    localStorage.setItem("refresh-token", data.data.refresh_token);
    const token = localStorage.getItem("token");
    const refresh_token = localStorage.getItem("refresh-token");
    try {
      const userData = yield call(axios.get, "http://3.36.218.14:8080/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem("userName", userData.data.username);
      if (localStorage.getItem("userName")) yield put(loginState());
    } catch (err) {
      yield alert("유저 데이터를 불러오지 못했습니다.");
      if (err.response.status == 401) {
        try {
          yield call(
            axios.put,
            "http://3.36.218.14:8080/auth",
            {},
            {
              headers: {
                "X-Refresh-Token": refresh_token,
              },
            }
          );
        } catch (err) {
          alert("error");
        }
      }
      localStorage.clear();
    }
  } catch (err) {
    yield alert("이메일 혹은 비밀번호가 틀렸습니다.");
    window.localStorage.clear();
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

function* postContentSagaFunc(action: any) {
  const token = localStorage.getItem("token");
  const refresh_token = localStorage.getItem("refresh-token");
  if (token) {
    const data = yield call(
      axios.get,
      `http://3.36.218.14:8080/posts/${action.payload.id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    try {
      yield put(postContent(data.data, action.payload.id));
    } catch (err) {
      if (err.response.status === 401) {
        try {
          yield call(
            axios.put,
            "http://3.36.218.14:8080/auth",
            {},
            {
              headers: {
                "X-Refresh-Token": refresh_token,
              },
            }
          );
        } catch (err) {
          alert("err");
        }
      }
    }
  } else {
    const data = yield call(
      axios.get,
      `http://3.36.218.14:8080/posts/${action.payload.id}`
    );
    try {
      yield put(postContent(data.data, action.payload.id));
    } catch {}
  }
}

function* searchSagaFunc(action: any) {
  yield put(search(action.payload.tag));
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
  yield takeEvery(POSTCONTENT_SAGA, postContentSagaFunc);
  yield takeEvery(SEARCH_SAGA, searchSagaFunc);
}

export default loginSaga;
