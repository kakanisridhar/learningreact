import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/logo.svg';
import './App.css';

// This is functional component
const Welcome = () => <h1> Hello World with hmr</h1>;

// This is class based component
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Welcome />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
