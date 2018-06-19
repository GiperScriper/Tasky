import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'store';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';
import 'assets/styles/main.scss';

import App from './components/App';
// import './firebase';

const store = createStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
