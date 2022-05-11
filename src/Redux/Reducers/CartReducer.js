import addItemToCart from "../../utils/addtoCart";
import removeItemfromCart from "../../utils/removefromCart";
import {
  CART_ADD_ITEM,
  CART_CLEAR_ITEM,
  CART_REMOVE_ITEM,
} from "../ActionTypes/CartActionTypes";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
        console.log(action)
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemfromCart(state.cartItems, action.payload),
      };
    case CART_CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
