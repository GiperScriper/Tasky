import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'store';

import { verifyAuth } from '@/actions/auth';

import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';
import 'assets/styles/main.scss';

import MainRouter from './routers/MainRouter';

const store = createStore();

const App = (
  <Provider store={store}>
    <MainRouter />
  </Provider>
);

const renderApp = () => ReactDOM.render(App, document.getElementById('root'));

ReactDOM.render(<h1>LOADING</h1>, document.getElementById('root'));

store.dispatch(verifyAuth(renderApp));

registerServiceWorker();

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}
