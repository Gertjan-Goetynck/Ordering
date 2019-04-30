import customers from '../data/customers';

const customersReducerDefaultState = customers;

const customersReducer = (state = customersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default customersReducer;
