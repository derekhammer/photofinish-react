import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root') as HTMLElement);
registerServiceWorker();
