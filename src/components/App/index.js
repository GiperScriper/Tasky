import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '@/actions/auth';
import AppRouter from '@/routers/AppRouter';

import Header from '@/components/Header';

class App extends Component {
  componentDidMount = () => {};

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
    userId: auth.userId,
  };
};

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
