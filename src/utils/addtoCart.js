const addItemToCart = (cartItems, cartItemToAdd) => {

  if (cartItems.length === 0) return [...cartItems, cartItemToAdd];

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + cartItemToAdd.quantity }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd }];
};

export default addItemToCart;
