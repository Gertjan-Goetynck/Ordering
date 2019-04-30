import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import OrderList from './OrderList';
import OrderDetails from './OrderDetails';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={OrderList} />
      <Route exact path="/order/:id/details" component={OrderDetails} />
    </Switch>
  </BrowserRouter>
);

export default Router;
