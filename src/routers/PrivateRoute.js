import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from 'helpers/authService';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (authService.isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

export default PrivateRoute;
