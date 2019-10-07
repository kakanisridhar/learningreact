import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

const App = (props) => (
  <div>
    <button onClick = {props.increment}>+</button>
    {props.counter}
    <button onClick = {props.decrement}>-</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
