import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import PBody from './components/PBody';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PBody />, document.getElementById('root'));
registerServiceWorker();
