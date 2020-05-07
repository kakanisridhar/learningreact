import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Container from '../Shared/components/Container';
import Navbar from '../Shared/components/Navbar';
import Lesson1 from './Lesson1/Lesson1';
import Lesson2 from './Lesson2/Lesson2';
import Lesson3 from './Lesson3/Lesson3';

export default function App() {
  return (
    <Router>
      <Container>
        <Navbar>
          <div>
            <Link to="/Lesson1">Lesson1</Link>
          </div>
          <div>
            <Link to="/Lesson2">Lesson2</Link>
          </div>
          <div>
            <Link to="/Lesson3">Lesson3</Link>
          </div>
        </Navbar>
        <Route exact path="/Lesson1" component={Lesson1} />
        <Route exact path="/Lesson2" component={Lesson2} />
        <Route exact path="/Lesson3" component={Lesson3} />
      </Container>
    </Router>
  );
}
