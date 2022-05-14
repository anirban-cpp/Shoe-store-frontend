import { productSagas } from "./ProductSagas";
import { all } from "@redux-saga/core/effects";
import { userSagas } from "./UserSagas";
import { paginatedSaga } from "./paginatedProductSagas";

export default function* rootSaga() {
  yield all([...productSagas, ...userSagas, ...paginatedSaga]);
}
