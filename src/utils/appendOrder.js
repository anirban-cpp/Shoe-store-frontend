const appendOrder = (orderItems, orderItemToAdd) => {
    const idx = orderItems.findIndex(
      (item) => item._id.toString() === orderItemToAdd._id.toString()
    );

    if (idx >= 0) {
      const newOrderItems = [...orderItems];
      newOrderItems[idx] = orderItemToAdd;
      return newOrderItems;
    } else return orderItems;
};

export default appendOrder;
