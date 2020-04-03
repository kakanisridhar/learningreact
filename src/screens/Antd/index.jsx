import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.less';

var mountNode = document.getElementById('root');
ReactDOM.render(<App name="Jane" />, mountNode);
