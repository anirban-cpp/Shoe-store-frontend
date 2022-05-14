import {
  PRODUCT_PAGINATION_FAILURE,
  PRODUCT_PAGINATION_REQUEST,
  PRODUCT_PAGINATION_SUCCESS,
  REMOVE_PAGINATION_PRODUCT,
} from "../ActionTypes/ProductActionTypes";

const initialState = {
  paginationLoading: false,
  paginatedProducts: [],
  error: "",
};

// ProductList

export const paginatedProductListRequest = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_PAGINATION_REQUEST:
      return {
        ...state,
        paginationLoading: true,
      };
    case PRODUCT_PAGINATION_SUCCESS:
      return {
        ...state,
        paginatedProducts: [...state.paginatedProducts, ...action.payload],
        paginationLoading: false,
      };
    case PRODUCT_PAGINATION_FAILURE:
      return {
        ...state,
        error: action.payload,
        paginationLoading: false,
      };
    case REMOVE_PAGINATION_PRODUCT:
      return {
        ...state,
        paginatedProducts: [],
      };
    default:
      return state;
  }
};
