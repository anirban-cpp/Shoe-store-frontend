import {
  USER_DETAILS_FAILURE,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE
} from "../ActionTypes/UserActionTypes";

// Login

export const loginRequest = (userInfo) => {
  return {
    type: USER_LOGIN_REQUEST,
    payload: userInfo,
  };
};

export const loginSuccess = (user) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: error,
  };
};

// logout

export const logout = () => {
  return {
    type: USER_LOGOUT,
  };
};

// Register

export const registerRequest = (userInfo) => {
  return {
    type: USER_REGISTER_REQUEST,
    payload: userInfo,
  };
};

export const registerSuccess = (user) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: user,
  };
};

export const registerFailure = (error) => {
  return {
    type: USER_REGISTER_FAILURE,
    payload: error,
  };
};

// get user details

export const getUserRequest = (userId) => {
  return {
    type: USER_DETAILS_REQUEST,
    payload: userId
  };
};

export const getUserSuccess = (user) => {
  return {
    type: USER_DETAILS_SUCCESS,
    payload: user,
  };
};

export const getUserFailure = (error) => {
  return {
    type: USER_DETAILS_FAILURE,
    payload: error,
  };
};

// update user details

export const updateUserRequest = (userInfo) => {
  return {
    type: USER_UPDATE_REQUEST,
    payload: userInfo
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: USER_UPDATE_SUCCESS,
    payload: user,
  };
};

export const updateUserFailure = (error) => {
  return {
    type: USER_UPDATE_FAILURE,
    payload: error,
  };
};