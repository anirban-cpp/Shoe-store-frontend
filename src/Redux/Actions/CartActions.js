import { CART_ADD_ITEM, CART_CLEAR_ITEM, CART_REMOVE_ITEM } from "../ActionTypes/CartActionTypes"

export const addToCart = id => {
    return {
        type: CART_ADD_ITEM,
        payload: id
    }
}

export const removeFromCart = product => {
    return {
        type: CART_REMOVE_ITEM,
        payload: product
    }
}

export const clearCart = () => {
    return {
        type: CART_CLEAR_ITEM
    }
}