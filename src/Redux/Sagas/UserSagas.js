import { takeLatest, call, delay, put, fork } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import {
  getUserFailure,
  getUserSuccess,
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
  updateUserFailure,
  updateUserSuccess,
} from "../Actions/UserActions";
import * as types from "../ActionTypes/UserActionTypes";
import {
  LoginUserApi,
  RegisterUserApi,
  getUserApi,
  updateUserApi,
} from "../api/Usersapi";

function* onUserLoginStartAsync(action) {
  try {
    const response = yield call(LoginUserApi, action.payload);
    if (response.status === 200) {
      const userResponse = yield call(getUserApi, response.data._id);
      if (userResponse.status === 200) {
        yield delay(500);
        yield put(loginSuccess(userResponse.data));
        toast.success("Successfully Logged in 😄");
      }
    }
  } catch (e) {
    yield put(loginFailure(e.response.data));
    toast.error(e.response.data + " 😓");
  }
}

function* onUserRegisterStartAsync(action) {
  const { payload } = action;
  try {
    const response = yield call(RegisterUserApi, payload);
    if (response.status === 200) {
      const userResponse = yield call(getUserApi, response.data._id);
      if (userResponse.status === 200) {
        yield delay(500);
        yield put(registerSuccess(userResponse.data));
        toast.success("Successfully Registered 😄");
      }
    }
  } catch (e) {
    yield put(registerFailure(e.response.data));
    toast.error(e.response.data + " 😓");
  }
}

function* ongetUserStart(action) {
  const { payload } = action;
  try {
    const userResponse = yield call(getUserApi, payload);
    if (userResponse.status === 200) {
      yield delay(500);
      yield put(getUserSuccess(userResponse.data));
    }
  } catch (e) {
    yield put(getUserFailure(e.response.data + " 😓"));
  }
}

function* onupdateUserStartAsync(action) {
  const { payload } = action;
  try {
    const response = yield call(updateUserApi, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(updateUserSuccess(response.data));
      if (!("shippingAddress" in payload))
        toast.success("Profile updated successfully 😄");
    }
  } catch (e) {
    yield put(updateUserFailure(e.response.data));
    toast.error(e.response.data + " 😓");
  }
}

function* onLoginUser() {
  yield takeLatest(types.USER_LOGIN_REQUEST, onUserLoginStartAsync);
}

function* onRegisterUSer() {
  yield takeLatest(types.USER_REGISTER_REQUEST, onUserRegisterStartAsync);
}

function* ongetUser() {
  yield takeLatest(types.USER_DETAILS_REQUEST, ongetUserStart);
}

function* onupdateUser() {
  yield takeLatest(types.USER_UPDATE_REQUEST, onupdateUserStartAsync);
}

export const userSagas = [
  fork(onLoginUser),
  fork(onRegisterUSer),
  fork(ongetUser),
  fork(onupdateUser),
];
