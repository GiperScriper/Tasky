import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import authService from '@/helpers/authService';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} component={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)} />
);

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: !!auth.userId,
});

export default connect(mapStateToProps)(PrivateRoute);
