/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Container from './components/Container';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Route path="/reducer" exact>
            <Reducer />
          </Route>
          <Route path="/ref" exact>
            <Ref />
          </Route>
          <Route path="*">
            <State />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
