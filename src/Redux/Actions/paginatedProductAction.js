import {
  PRODUCT_PAGINATION_FAILURE,
  PRODUCT_PAGINATION_REQUEST,
  PRODUCT_PAGINATION_SUCCESS,
  REMOVE_PAGINATION_PRODUCT,
} from "../ActionTypes/ProductActionTypes";

export const getProductPaginationRequest = (size) => {
  return {
    type: PRODUCT_PAGINATION_REQUEST,
    payload: size,
  };
};

export const getProductPaginationSuccess = (products) => {
  return {
    type: PRODUCT_PAGINATION_SUCCESS,
    payload: products,
  };
};

export const getProductPaginationFailure = (error) => {
  return {
    type: PRODUCT_PAGINATION_FAILURE,
    payload: error,
  };
};

export const removePaginationproduct = () => {
  return {
    type: REMOVE_PAGINATION_PRODUCT,
  };
};
