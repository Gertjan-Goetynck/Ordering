import { createStore, combineReducers } from 'redux';
import ordersReducer from '../reducers/orders';
import customersReducer from '../reducers/customers';
import productsReducer from '../reducers/products';

export default () => {
  const store = createStore(
    combineReducers({
      orders: ordersReducer,
      customers: customersReducer,
      products: productsReducer
    })
  );
  return store;
};
