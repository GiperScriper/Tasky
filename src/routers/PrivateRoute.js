import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from 'helpers/authService';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      authService.isAuthenticated() ? (
        <div>
          <h1>header</h1>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
