import React from 'react';
import Todo from './Todo';
import { TodoModel } from './todotypes';

type TodoListProps = {
  todos: TodoModel[];
  toggleTodo: (todo: string) => any;
};

const TodoList = ({ todos, toggleTodo }: TodoListProps) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
