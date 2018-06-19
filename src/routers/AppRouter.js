import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Login from 'components/Login';
import Layout from 'components/Layout';

const appRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={Layout} />
    </Switch>
  </BrowserRouter>
);

export default appRouter;
