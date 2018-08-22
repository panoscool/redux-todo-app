import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <ul className="todo-wrapper">
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        toggle={() => toggleTodo(todo.id)}
        remove={() => removeTodo(todo.id)}
      />
    ))}
  </ul>
);

export default TodoList;
