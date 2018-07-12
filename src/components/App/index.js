import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '@/actions/auth';
import AuthService from '@/helpers/authService';
import AppRouter from '@/routers/AppRouter';

import Header from '@/components/Header';

class App extends Component {
  componentWillMount = () => {
    if (AuthService.isAuthenticated()) {
      // this.props.login('some data');
    }
  };

  render() {
    console.log('app');
    return (
      <div className="container">
        <Header />
        <AppRouter />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isLoggenIn: auth.loggedIn,
  };
};

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
