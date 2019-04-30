import { order1, order2, order3 } from '../data/orders';
import products from '../data/products';

const orderReducerDefaultState = [order1, order2, order3];

const ordersReducer = (state = orderReducerDefaultState, action) => {
  switch (action['type']) {
    case 'PLACE_ORDER':
      //Removes the placed order from the order list
      return state.filter(order => order['id'] !== action['id']);
    case 'ADD_PRODUCT_TO_ORDER':
      return state.map(order => {
        //Checks if the correct order is being edited
        if (order['id'] === action['orderId']) {
          //Check if the product being added already is in the order
          const exists = order.items.some(
            item => item['product-id'] === action['productId']
          );
          //If the product is new to the order, add a new product line
          if (!exists) {
            //Gets the correct product details from the product list
            const product = products.filter(
              product => product['id'] === action['productId']
            );
            //Changes the data structure of the product to match the structure used in the order
            const item = {
              'product-id': product[0]['id'],
              quantity: '1',
              'unit-price': product[0]['price'],
              total: product[0]['price']
            };
            //Convers the strings in the data to floats to calculate the order total cost, and changes them back to a string to match the original format afterwards
            order['total'] = String(
              parseFloat(order['total']) + parseFloat(item['total'])
            );
            //Adds the new item to the existing array
            order.items = [...order['items'], item];
          }
          //if the product already exists in the order, add 1
          else {
            //If the item already existed in the order, add 1
            order.items.map(item => {
              if (item['product-id'] === action['productId']) {
                item['quantity']++;
                order['total'] = String(
                  parseFloat(order['total']) + parseFloat(item['unit-price'])
                );
              }
              item['total'] = String(
                item['quantity'] * parseFloat(item['unit-price'])
              );
              return item;
            });
          }
        }
        return order;
      });
    case 'REMOVE_PRODUCT_FROM_ORDER':
      return state.map(order => {
        //Checks if the correct order is being edited
        if (order['id'] === action['orderId']) {
          //Returns the items array without the deleted item
          order['items'] = order['items'].filter(item => {
            if (item['product-id'] === action['productId']) {
              order['total'] -= item['total'];
            }
            return item['product-id'] !== action['productId'];
          });
        }
        return order;
      });
    default:
      return state;
  }
};

export default ordersReducer;
