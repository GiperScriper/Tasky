import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Dashboard from 'components/Dashboard';
import Login from 'components/Login';

const appRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={Dashboard} exact />
    </Switch>
  </BrowserRouter>
);

export default appRouter;
