import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPanel from './components/ControlPanel';
// import ClickCounter from './components/ClickCounter';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <ControlPanel / > , document.getElementById('root'));
registerServiceWorker();