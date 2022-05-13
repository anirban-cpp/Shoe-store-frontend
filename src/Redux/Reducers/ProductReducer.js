import {
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

const initialState = {
  loading: false,
  products: [],
  product: null,
  error: "",
};

// ProductList

export const productListRequest = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
    case PRODUCT_QUERY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_LIST_SUCCESS:
    case PRODUCT_QUERY_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case PRODUCT_LIST_FAILURE:
    case PRODUCT_QUERY_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

// Product

export const productRequest = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
