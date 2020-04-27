/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container, { Row } from '../Shared/components/Container';
import Navbar from '../Shared/components/Navbar';
import Lesson1 from './Lesson1/Lesson1';

const Welcome = () => <h1> Learning XState</h1>;

export default function App() {
  return (
    <Router>
      <Container>
        <Navbar>
          <div>
            <Link to="/lesson1">Basics</Link>
          </div>
        </Navbar>
        <Switch>
          <Route path="/lesson1" exact>
            <Lesson1 />
          </Route>
          <Route path="/*" exact>
            <Welcome />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
