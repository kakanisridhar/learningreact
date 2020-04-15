/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Container from './components/Container';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Reducer from './Reducer';
import State from './State';
import Ref from './Ref';

const Welcome = () => <h1> Learning react hooks</h1>;

export default function App() {
  return (
    <Router>
      <Container>
        <Navbar></Navbar>

        <Switch>
          <Route path="/state">
            <State />
          </Route>
          <Route path="/reducer">
            <Reducer />
          </Route>
          <Route path="/ref">
            <Ref />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
