import * as types from "../ActionTypes/OrderActionsTypes";

// Create Order

export const createOrderRequest = (order) => {
  return {
    type: types.ORDER_CREATE_REQUEST,
    payload: order,
  };
};

export const createOrderSuccess = () => {
  return {
    type: types.ORDER_CREATE_SUCCESS,
  };
};

export const createOrderFailure = (error) => {
  return {
    type: types.ORDER_CREATE_FAILURE,
    payload: error,
  };
};

// get order details

export const getUserOrdersRequest = (userId) => {
  return {
    type: types.USER_ORDERS_REQUEST,
    payload: userId,
  };
};

export const getUserOrdersSuccess = (orders) => {
  return {
    type: types.USER_ORDERS_SUCCESS,
    payload: orders,
  };
};

export const getUserOrdersFailure = (error) => {
  return {
    type: types.USER_ORDERS_FAILURE,
    payload: error,
  };
};

// cancel order

export const cancelOrderRequest = (orderId) => {
  return {
    type: types.ORDER_CANCEL_REQUEST,
    payload: orderId,
  };
};

export const cancelOrderSuccess = () => {
  return {
    type: types.ORDER_CANCEL_SUCCESS,
  };
};

export const cancelOrderFailure = (error) => {
  return {
    type: types.ORDER_CANCEL_FAILURE,
    payload: error,
  };
};

// pay for order

export const payOrderRequest = (orderId) => {
  return {
    type: types.ORDER_PAY_REQUEST,
    payload: orderId,
  };
};

export const payOrderSuccess = () => {
  return {
    type: types.ORDER_PAY_SUCCESS,
  };
};

export const payOrderFailure = (error) => {
  return {
    type: types.ORDER_PAY_FAILURE,
    payload: error,
  };
};

// get filtered-order details

export const getFilteredUserOrdersRequest = (payload) => {
  return {
    type: types.USER_FILTER_ORDERS_REQUEST,
    payload: payload,
  };
};

export const getFilteredUserOrdersSuccess = (orders) => {
  return {
    type: types.USER_FILTER_ORDERS_SUCCESS,
    payload: orders,
  };
};

export const getFilteredUserOrdersFailure = (error) => {
  return {
    type: types.USER_FILTER_ORDERS_FAILURE,
    payload: error,
  };
};
