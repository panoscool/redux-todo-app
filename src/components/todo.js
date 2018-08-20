import React from 'react';

const Todo = ({ onClick, completed, text, removeTodo }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
  <button className="btn btn-remove" onClick={() => removeTodo(todo.id)}>Remove</button>
    {text}
  </li>
)

export default Todo;