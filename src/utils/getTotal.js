const getTotal = (cartItems, removedItemId) => {
  let total = 0;
  for (const item of cartItems) total += item.id!==removedItemId ? (item.price * item.quantity) : 0;
  return total;
};

export default getTotal;
