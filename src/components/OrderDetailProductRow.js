import React from 'react';
import { connect } from 'react-redux';
import { removeProductFromOrder } from '../actions/orders.js';
const OrderDetailProductRow = props => (
  <tr>
    <td>{props['product-id']}</td>
    <td>{props['quantity']}</td>
    <td>{props['unit-price']}</td>
    <td>{Math.round(props['quantity'] * props['unit-price'] * 100) / 100}</td>
    <td>
      <button
        onClick={event => {
          props.dispatch(
            removeProductFromOrder(props['order-id'], props['product-id'])
          );
        }}
      >
        Delete product
      </button>
    </td>
  </tr>
);
const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};
export default connect(mapStateToProps)(OrderDetailProductRow);
