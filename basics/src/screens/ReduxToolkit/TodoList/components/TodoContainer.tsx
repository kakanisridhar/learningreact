import React from 'react';
import Footer from '../features/filters/Footer';
import AddTodo from '../features/todos/AddTodo';
import VisibleTodoList from '../features/todos/VisibleTodoList';

const TodoContainer = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoContainer;
