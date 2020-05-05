import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from '../Shared/components/Container';
import Navbar from '../Shared/components/Navbar';

export default function App() {
  return (
    <Router>
      <Container>
        <Navbar>
          <div>
            <Link to="/Lesson1">Lesson1</Link>
          </div>
        </Navbar>
        <Route path="*" component={Welcome} />
      </Container>
    </Router>
  );
}
