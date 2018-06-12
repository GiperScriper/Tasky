import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';
import 'assets/styles/main.scss';

import App from 'components/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
