import {
  CART_ADD_ITEM,
  CART_CLEAR_ITEM,
  CART_REMOVE_ITEM,
  EMPTY_CART,
} from "../ActionTypes/CartActionTypes";

export const addToCart = (product) => {
  return {
    type: CART_ADD_ITEM,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: CART_REMOVE_ITEM,
    payload: product,
  };
};

export const clearCart = (id) => {
  return {
    type: CART_CLEAR_ITEM,
    payload: id,
  };
};

export const EmptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};