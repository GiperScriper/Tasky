import React from 'react';

function asyncComponent(importComponent) {
  return class AsyncComponent extends React.Component {
    state = { Component: null };

    async componentWillMount() {
      const Component = await importComponent();
      this.setState({ Component });
    }

    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };
}

export default asyncComponent;
