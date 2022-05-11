import addItemToCart from "../../utils/addtoCart";
import getTotal from "../../utils/getTotal";
import removeItemfromCart from "../../utils/removefromCart";
import {
  CART_ADD_ITEM,
  CART_CLEAR_ITEM,
  CART_REMOVE_ITEM,
  EMPTY_CART,
} from "../ActionTypes/CartActionTypes";

const initialState = {
  cartItems: [],
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        total: state.total + action.payload.price * action.payload.quantity,
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemfromCart(state.cartItems, action.payload),
        total: state.total - action.payload.price,
      };
    case CART_CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        total: getTotal(state.cartItems, action.payload),
      };
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
        total: 0,
      };
    default:
      return state;
  }
};
