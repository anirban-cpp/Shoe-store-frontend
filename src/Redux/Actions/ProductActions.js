import {
  ADD_PRODUCT_REVIEW_FAILURE,
  ADD_PRODUCT_REVIEW_REQUEST,
  ADD_PRODUCT_REVIEW_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_QUERY_FAILURE,
  PRODUCT_QUERY_REQUEST,
  PRODUCT_QUERY_SUCCESS,
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
    payload: productId,
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

// Queried products

export const getqueriedProductRequest = (query) => {
  return {
    type: PRODUCT_QUERY_REQUEST,
    payload: query,
  };
};

export const getqueriedProductSuccess = (products) => {
  return {
    type: PRODUCT_QUERY_SUCCESS,
    payload: products,
  };
};

export const getqueriedProductFailure = (error) => {
  return {
    type: PRODUCT_QUERY_FAILURE,
    payload: error,
  };
};

//product review

export const addProductreviewRequest = (review) => {
  return {
    type: ADD_PRODUCT_REVIEW_REQUEST,
    payload: review,
  };
};

export const addProductreviewSuccess = () => {
  return {
    type: ADD_PRODUCT_REVIEW_SUCCESS,
  };
};

export const addProductreviewFailure = (error) => {
  return {
    type: ADD_PRODUCT_REVIEW_FAILURE,
    payload: error,
  };
};
