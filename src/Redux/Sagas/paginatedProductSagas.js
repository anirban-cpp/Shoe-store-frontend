import { takeLatest, call, delay, put, fork } from "@redux-saga/core/effects";
import {
  getProductPaginationFailure,
  getProductPaginationSuccess,
} from "../Actions/paginatedProductAction";
import * as types from "../ActionTypes/ProductActionTypes";
import { loadPaginatedProductsApi } from "../api/Productapi";

function* onPaginatedproductsAsync(action) {
  const page = action.payload;
  try {
    const response = yield call(loadPaginatedProductsApi, page);
    if (response.status === 200) {
      yield delay(500);
      yield put(getProductPaginationSuccess(response.data));
    }
  } catch (e) {
    yield put(getProductPaginationFailure(e.response.data));
  }
}

function* onPaginatedproducts() {
  yield takeLatest(types.PRODUCT_PAGINATION_REQUEST, onPaginatedproductsAsync);
}

export const paginatedSaga = [fork(onPaginatedproducts)];
