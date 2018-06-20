import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Login from 'components/Login';
import App from 'components/App';

const appRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default appRouter;
