import styles from './app.module.scss';
import { Container, Row, Col, Button} from 'react-bootstrap';
import React, { Component } from 'react';
import AppNav from './components/AppNav';
import cx from 'classnames'

// This is class based component
class App extends Component {


  render() {
    let appClass = cx(
      'd-flex',
      'flex-column',
      styles.app
    );
  
    return (
      <div className={appClass}>
        <div>
          <AppNav>Navbar will come here</AppNav>
        </div>
        <div>
          This is main area
        </div>
      </div>
    );
  }
}

export default App;
