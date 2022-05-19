import { takeLatest, call, delay, put, fork } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import { EmptyCart } from "../Actions/CartActions";
import {
  createOrderFailure,
  createOrderSuccess,
  getFilteredUserOrdersFailure,
  getFilteredUserOrdersSuccess,
  getUserOrdersFailure,
  getUserOrdersSuccess,
} from "../Actions/OrderActions";
import * as types from "../ActionTypes/OrderActionsTypes";
import { createOrderApi, getUserFilterOrdersApi, getUserOrdersApi } from "../api/Ordersapi";

function* onCreateOrderAsync(action) {
  const { payload } = action; // order
  try {
    const response = yield call(createOrderApi, payload);
    if (response && response.status === 201) {
      yield delay(500);
      yield put(createOrderSuccess(response.data));
      toast.success("Order placed successfully 😎");
      yield put(EmptyCart());
    }
  } catch (err) {
    yield put(createOrderFailure(err.response.data));
    toast.error("Something went wrong 😓. Unable to place your order");
  }
}

function* onFetchOrdersAsync(action) {
  const { payload } = action;
  try {
    const response = yield call(getUserOrdersApi, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(getUserOrdersSuccess(response.data));
    }
  } catch (err) {
    yield put(getUserOrdersFailure(err.response.data));
  }
}

function* onFetchFilteredOrdersAsync(action) {
  const { payload } = action;

  try {
    const response = yield call(getUserFilterOrdersApi, payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(getFilteredUserOrdersSuccess(response.data));
    }
  } catch (err) {
    yield put(getFilteredUserOrdersFailure(err.response.data));
  }
}

function* onCreateOrder() {
  yield takeLatest(types.ORDER_CREATE_REQUEST, onCreateOrderAsync);
}

// function* onPayOrder() {

// }

function* onFetchOrders() {
  yield takeLatest(types.USER_ORDERS_REQUEST, onFetchOrdersAsync);
}

function* onFetchFilteredOrders() {
  yield takeLatest(types.USER_FILTER_ORDERS_REQUEST, onFetchFilteredOrdersAsync);
}

export const orderSagas = [fork(onCreateOrder), fork(onFetchOrders), fork(onFetchFilteredOrders)];
