import { takeLatest, call, delay, put, fork } from "@redux-saga/core/effects";
import {
  getProductFailure,
  getProductListFailure,
  getProductListSuccess,
  getProductSuccess,
} from "../Actions/ProductActions";
import * as types from "../ActionTypes/ProductActionTypes";
import { loadProductApi, loadProductsApi } from "../api/Productapi";

function* onLoadProductsAsync() {
  try {
    const response = yield call(loadProductsApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(getProductListSuccess(response.data));
    }
  } catch (e) {
    yield put(getProductListFailure(e.response.data));
  }
}

function* onLoadProductAsync(action) {
  const productId = action.payload
  try {
    const response = yield call(loadProductApi, productId);
    if (response.status === 200) {
      yield delay(500);
      yield put(getProductSuccess(response.data));
    }
  } catch (e) {
    yield put(getProductFailure(e.response.data));
  }
}

function* onLoadProducts() {
  yield takeLatest(types.PRODUCT_LIST_REQUEST, onLoadProductsAsync);
}

function* onLoadProduct() {
  yield takeLatest(types.PRODUCT_REQUEST, onLoadProductAsync);
}

export const productSagas = [fork(onLoadProducts), fork(onLoadProduct)];
