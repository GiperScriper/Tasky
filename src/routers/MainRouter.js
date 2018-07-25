import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AsyncComponent from '@/hocs/AsyncComponent';

import Login from '@/components/Login';

const App = AsyncComponent(() => import('@/components/App').then(module => module.default));

const MainRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default MainRouter;
