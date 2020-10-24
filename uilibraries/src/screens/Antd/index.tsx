import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.less';
import App from './App';
import { store } from './store';
import { StoreContext } from 'storeon/react';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);
