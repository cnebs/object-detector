import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Landing from './Container.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Landing />, document.getElementById('root'));
serviceWorker.unregister();
