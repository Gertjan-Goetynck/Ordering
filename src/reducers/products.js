import products from '../data/products';

const productsReducerDefaultState = products;

const productsReducer = (state = productsReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
