import React from 'react';
import { connect } from 'react-redux';
import OrderDetailProductRow from './OrderDetailProductRow';
import { addProductToOrder } from '../actions/orders.js';

import { Link } from 'react-router-dom';

class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addItem: ''
    };
  }
  handleDropdownChange(e) {
    console.log('test');
  }
  render() {
    return (
      <React.Fragment>
        {this.props.orders.map(order =>
          order.id === this.props.match.params.id ? (
            <div key={order.id}>
              <p>Order id: {order.id}</p>
              <p>Customer id: {order['customer-id']}</p>
              <Link to="/">Back to index</Link>
              <table>
                <tbody>
                  <tr>
                    <th>Product ID</th>
                    <th>Quantity</th>
                    <th>Unit price</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                  {order.items.map(product => (
                    <OrderDetailProductRow
                      key={product['product-id']}
                      order-id={this.props.match.params.id}
                      product-id={product['product-id']}
                      quantity={product['quantity']}
                      unit-price={product['unit-price']}
                    />
                  ))}
                </tbody>
              </table>
              <p>Total cost: {order.total}</p>
              <form>
                Add a product:
                <select
                  required
                  onChange={e => {
                    this.setState({
                      addItem: e.target.value
                    });
                  }}
                  defaultValue={'DEFAULT'}
                >
                  <option value="DEFAULT" disabled="disabled">
                    Choose an item
                  </option>
                  {this.props.products.map(product => (
                    <option key={product.id} value={product.id}>
                      {product.description}
                    </option>
                  ))}
                </select>
                <input
                  type="submit"
                  value="Add"
                  onClick={e => {
                    e.preventDefault();
                    if (this.state.addItem !== '') {
                      this.props.dispatch(
                        addProductToOrder(order.id, this.state.addItem)
                      );
                    }
                  }}
                />
              </form>
            </div>
          ) : null
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    orders: state.orders,
    customers: state.customers,
    products: state.products
  };
};

export default connect(mapStateToProps)(OrderDetails);
