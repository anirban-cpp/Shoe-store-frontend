import { combineReducers } from "redux";
import { cartReducer } from "./Reducers/CartReducer";
import { paginatedProductListRequest } from "./Reducers/paginatedProductReducer";
import { productListRequest, productRequest } from "./Reducers/ProductReducer";
import { userReducer } from "./Reducers/UserReducer";

const rootReducer = combineReducers({
  user: userReducer,
  productList: productListRequest,
  product: productRequest,
  cart: cartReducer,
  paginatedproduct: paginatedProductListRequest,
});

export default rootReducer;
