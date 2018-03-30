import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickCounter from './components/ClickCounter';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < ClickCounter / > , document.getElementById('root'));
registerServiceWorker();