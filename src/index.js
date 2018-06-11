import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';

import './assets/sass/main.scss';
import App from 'components/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
