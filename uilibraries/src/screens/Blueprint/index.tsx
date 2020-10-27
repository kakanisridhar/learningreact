import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './Redux/Store';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.Fragment>
    <Provider store={Store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
