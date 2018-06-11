import React, { Component } from 'react';
import AppRouter from 'routers/AppRouter';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;
