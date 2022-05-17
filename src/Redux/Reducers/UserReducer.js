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
  USER_UPDATE_FAILURE,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../ActionTypes/UserActionTypes";

import storage from "redux-persist/lib/storage";

const initialState = {
  loading: false,
  user: null,
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        user: null,
      };
    case USER_LOGOUT:
      storage.removeItem("persist-store");
      return {
        ...state,
        user: null,
        loading: false,
        error: "",
      };
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
      };
    case USER_REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        user: null,
      };
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
      };
    case USER_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        user: null,
      };
    case USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
      };
    case USER_UPDATE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};
