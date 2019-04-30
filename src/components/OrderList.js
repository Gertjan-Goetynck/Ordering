import React from 'react';
import { connect } from 'react-redux';

import OrderListItem from './OrderListItem';
const OrderList = props => (
  <div>
    <h1>Orders</h1>
    <table>
      <tbody>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Amount of items</th>
          <th>Total cost in EUR</th>
          <th>Action</th>
        </tr>
        {props.orders.map(orderItem => (
          //Generates an Order item for each order
          <OrderListItem
            key={orderItem['id']}
            id={orderItem['id']}
            customer-id={orderItem['customer-id']}
            items={orderItem['items']}
            itemsAmount={orderItem['items'].length}
            total={orderItem['total']}
          />
        ))}
      </tbody>
    </table>
  </div>
);

const ConnectedOrderList = connect(state => {
  return {
    orders: state.orders
  };
})(OrderList);

export default ConnectedOrderList;
