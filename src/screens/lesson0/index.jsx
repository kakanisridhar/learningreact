import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);

