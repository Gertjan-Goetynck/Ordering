import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { placeOrder } from '../actions/orders';

class OrderListItem extends React.Component {
  //Displays the required info for each order based on props
  render() {
    const { id, itemsAmount, total } = this.props;
    return (
      <tr>
        <td>
          <Link to={`order/${id}/details`}>{id}</Link>
        </td>
        <td>{this.props['customer-id']}</td>
        <td>{itemsAmount}</td>
        <td>{total}</td>
        <td>
          <button
            onClick={e => {
              e.preventDefault();
              if (itemsAmount > 0) {
                this.props.dispatch(placeOrder(id));
                alert('Your order has been placed');
              } else {
                alert('You cannot place an empty order');
              }
            }}
          >
            Place order
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

export default connect(mapStateToProps)(OrderListItem);
