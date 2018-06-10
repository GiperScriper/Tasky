import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';

const appRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Dashboard} exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default appRouter;
