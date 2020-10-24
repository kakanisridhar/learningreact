import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Container from '../Shared/components/Container';
import Navbar from '../Shared/components/Navbar';

export default function App() {
  return (
    <Router>
      <Container>
        <Navbar>
          <div>
            <Link to="/Lesson1">Slice</Link>
          </div>
          <div>
            <Link to="/Lesson2">Thunks</Link>
          </div>
          <div>
            <Link to="/Lesson3">Entity Adapters</Link>
          </div>
        </Navbar>
        <Switch>
          <Route path="*">Learning Redux toolkit</Route>
        </Switch>
      </Container>
    </Router>
  );
}
