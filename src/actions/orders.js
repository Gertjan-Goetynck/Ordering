//REMOVE PRODUCT FROM ORDER
export const removeProductFromOrder = (orderId, productId) => ({
  type: 'REMOVE_PRODUCT_FROM_ORDER',
  orderId,
  productId
});

export const addProductToOrder = (orderId, productId) => ({
  type: 'ADD_PRODUCT_TO_ORDER',
  orderId,
  productId
});

export const placeOrder = id => ({
  type: 'PLACE_ORDER',
  id
});
