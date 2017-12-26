import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import config from './config/config';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

console.log('Running quotes-app-react...');
console.log('>>> config: ', config);

ReactDOM.render(<App config={config} />, document.getElementById('root'));
registerServiceWorker();
