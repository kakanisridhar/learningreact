import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

const Lesson1 = props => (
  <div>
    <p>
      learning redux, create a store, dispatch actions and connect store to
      component
    </p>
    <button onClick={props.increment}>+</button>
    {props.counter}
    <button onClick={props.decrement}>-</button>
  </div>
);

const Lesson1Container = connect(mapStateToProps, mapDispatchToProps)(Lesson1);
export default Lesson1Container;
