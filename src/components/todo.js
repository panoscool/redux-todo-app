import React from "react";

const Todo = ({ todo, onToggle, onRemove }) => (
  <li
    onClick={onToggle}
    style={{
      textDecoration: todo.completed ? "line-through" : "none"
    }}
  >
    <button className="btn btn-remove" onClick={onRemove}>
      Remove
    </button>
    {todo.text}
  </li>
);

export default Todo;
