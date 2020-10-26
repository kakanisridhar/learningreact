import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Container from '../Shared/components/Container';
import Navbar from '../Shared/components/Navbar';
import TodoContainer from './TodoList/components/TodoContainer';

export default function App() {
  return (
    <Router>
      <Container>
        <Navbar>
          <div>
            <Link to="/Lesson1">Slice - Todo List</Link>
          </div>
          <div>
            <Link to="/Lesson2">Thunks</Link>
          </div>
          <div>
            <Link to="/Lesson3">Entity Adapters</Link>
          </div>
        </Navbar>
        <Switch>
          <Route path="/Lesson1" exact component={TodoContainer}></Route>
          <Route path="*">Learning Redux toolkit</Route>
        </Switch>
      </Container>
    </Router>
  );
}
