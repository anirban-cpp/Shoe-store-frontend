import {
  PRODUCT_FAILURE,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "../ActionTypes/ProductActionTypes";

// Products List

export const getProductListRequest = () => {
  return {
    type: PRODUCT_LIST_REQUEST,
  };
};

export const getProductListSuccess = (products) => {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: products,
  };
};

export const getProductListFailure = (error) => {
  return {
    type: PRODUCT_LIST_FAILURE,
    payload: error,
  };
};

// Individual Product

export const getProductRequest = (productId) => {
  return {
    type: PRODUCT_REQUEST,
    payload: productId
  };
};

export const getProductSuccess = (product) => {
  return {
    type: PRODUCT_SUCCESS,
    payload: product,
  };
};

export const getProductFailure = (error) => {
  return {
    type: PRODUCT_FAILURE,
    payload: error,
  };
};
