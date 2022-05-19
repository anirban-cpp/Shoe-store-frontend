import * as types from "../ActionTypes/OrderActionsTypes";

const initialState = {
  loading: false,
  error: "",
};

const orderedInitialState = {
  orderedItems: [],
  loading: false,
  error: "",
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ORDER_CREATE_REQUEST:
    case types.ORDER_PAY_REQUEST:
    case types.ORDER_CANCEL_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.ORDER_CREATE_SUCCESS:
    case types.ORDER_PAY_SUCCESS:
    case types.ORDER_CANCEL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
      };
    case types.ORDER_CREATE_FAILURE:
    case types.ORDER_PAY_FAILURE:
    case types.ORDER_CANCEL_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// get orders reducer

export const getordersReducer = (state = orderedInitialState, action) => {
  switch (action.type) {
    case types.USER_ORDERS_REQUEST:
    case types.USER_FILTER_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.USER_ORDERS_SUCCESS:
    case types.USER_FILTER_ORDERS_SUCCESS:
      return {
        ...state,
        orderedItems: action.payload,
        loading: false,
        error: "",
      };
    case types.USER_ORDERS_FAILURE:
    case types.USER_FILTER_ORDERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
