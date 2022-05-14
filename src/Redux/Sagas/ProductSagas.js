import { takeLatest, call, delay, put, fork } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import {
  addProductreviewFailure,
  addProductreviewSuccess,
  getProductFailure,
  getProductListFailure,
  getProductListSuccess,
  getProductRequest,
  getProductSuccess,
  getqueriedProductFailure,
  getqueriedProductSuccess,
} from "../Actions/ProductActions";
import * as types from "../ActionTypes/ProductActionTypes";
import {
  addProductReviewApi,
  loadProductApi,
  loadProductsApi,
  loadQueriedProductsApi,
} from "../api/Productapi";

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
  const productId = action.payload;
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

function* onQueryProductAsync(action) {
  const keyword = action.payload;
  try {
    const response = yield call(loadQueriedProductsApi, keyword);
    if (response.status === 200) {
      yield delay(500);
      yield put(getqueriedProductSuccess(response.data));
    }
  } catch (e) {
    yield put(getqueriedProductFailure(e.response.data));
  }
}

function* onAddReviewAsync(action) {
  const review = action.payload;
  try {
    const response = yield call(addProductReviewApi, review);
    if (response.status === 201) {
      yield delay(500);
      yield put(addProductreviewSuccess());
      yield put(getProductRequest(review.id));
      toast.success("Review added");
    } else {
      yield delay(500);
      yield put(addProductreviewFailure(response.data.toString()));
      toast.success("Review added");
    }
  } catch (err) {
    yield put(addProductreviewFailure(err.response.data));
    toast.error(err.response.data);
  }
}

function* onLoadProducts() {
  yield takeLatest(types.PRODUCT_LIST_REQUEST, onLoadProductsAsync);
}

function* onLoadProduct() {
  yield takeLatest(types.PRODUCT_REQUEST, onLoadProductAsync);
}

function* onQueryProduct() {
  yield takeLatest(types.PRODUCT_QUERY_REQUEST, onQueryProductAsync);
}

function* onAddReview() {
  yield takeLatest(types.ADD_PRODUCT_REVIEW_REQUEST, onAddReviewAsync);
}

export const productSagas = [
  fork(onLoadProducts),
  fork(onLoadProduct),
  fork(onQueryProduct),
  fork(onAddReview),
];
