import React, { Component } from 'react';
import AppRouter from './Router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Header</h1>
        </header>
        <AppRouter />
        <footer>
          <h2>footer</h2>
        </footer>
      </div>
    );
  }
}

export default App;
